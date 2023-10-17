import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

import { ActionRequest, ActorRequest, TargetRequest } from "@/types";
import { makeId } from ".";

export async function getActor(prisma: PrismaClient, actor: ActorRequest) {
  const _actor =
    typeof actor === "string"
      ? await prisma.actor.findUnique({
          where: {
            id: actor,
          },
        })
      : await prisma.actor.create({
          data: {
            id: makeId({ prefix: "user_" }),
            name: actor.name,
            email: actor.email,
          },
        });

  return (
    _actor && {
      actor_id: _actor.id,
      actor_name: _actor.name,
      ...(_actor.email && { actor_email: _actor.email }),
    }
  );
}

export async function getAction(prisma: PrismaClient, action: ActionRequest) {
  const _action =
    typeof action === "string"
      ? await prisma.action.findUnique({
          where: {
            id: action,
          },
        })
      : await prisma.action.create({
          data: {
            id: makeId({ prefix: "evt_action_" }),
            name: action.name,
            object: action.object,
          },
        });

  return (
    _action && {
      action: _action,
    }
  );
}

export async function getTarget(prisma: PrismaClient, target: TargetRequest) {
  const _target =
    typeof target === "string"
      ? await prisma.target.findUnique({
          where: {
            id: target,
          },
        })
      : await prisma.target.create({
          data: {
            id: makeId({ prefix: "user_" }),
            name: target.name,
          },
        });

  return (
    _target && {
      target_id: _target.id,
      target_name: _target.name,
    }
  );
}
