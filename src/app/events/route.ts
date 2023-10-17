import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import { EventLog, eventRequestSchema, eventResponseSchema } from "@/types";
import { getAction, getActor, getTarget, makeId, toInt } from "@/utils";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  // [DONE] Pagination: ?pageSize=20&page=1
  // [DONE] Search: ?search=someNameOrEmailOrAction
  // Filter: ?actor_id=user_3VG74289PUA2&target_id=user_DOKVD1U3L030&action_id=evt_action_PGTD81NCAOQ2&action_name=user.login_succeeded

  const params = request.nextUrl.searchParams;

  const page = toInt(params.get("page"), 1);
  const pageSize = toInt(params.get("pageSize"), 15);

  const search = params.get("search");

  function match<K extends string>(key: K) {
    return {
      [key]: { contains: search!, mode: "insensitive" },
    } as {
      [key in K]: { contains: string; mode: "insensitive" };
    };
  }

  const data = await prisma.event.findMany({
    ...(search
      ? {
          where: {
            OR: [
              match("object"),
              { actor: match("name") },
              { actor: match("email") },
              { target: match("name") },
              { action: match("name") },
              { action: match("object") },
            ],
          },
        }
      : {}),
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      occurred_at: "desc",
    },
    include: {
      action: true,
      actor: true,
      target: true,
    },
  });

  const events = eventResponseSchema.array().parse(
    data.map(({ actor, target, ...rest }) => ({
      ...rest,
      actor_id: actor.id,
      actor_name: actor.name,
      actor_email: actor.email,
      target_id: target.id,
      target_name: target.name,
    }))
  );

  return NextResponse.json(events); // result.slice(start, end));
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const result = eventRequestSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const { actor, action, target, ...rest } = result.data;

  const _actor = await getActor(prisma, actor);
  const _action = await getAction(prisma, action);
  const _target = await getTarget(prisma, target);

  const errors = [];

  if (!_actor) errors.push("actor");
  if (!_action) errors.push("action");
  if (!_target) errors.push("target");

  if (errors.length) {
    return NextResponse.json(
      {
        error: {
          message: `The following IDs [${errors.join(" ,")}] do not exist!`,
        },
      },
      { status: 404 }
    );
  }

  const data = await prisma.event.create({
    data: {
      id: makeId({ prefix: "evt_" }),
      ...rest,
      actionId: _action!.action.id,
      actorId: _actor!.actor_id,
      targetId: _target!.target_id,
    },
  });

  const newEvent = eventResponseSchema.parse({
    id: data.id,
    ...rest,
    ..._actor,
    ..._action,
    ..._target,
  });

  return NextResponse.json({ newEvent });
}
