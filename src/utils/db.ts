import { PrismaClient } from "@prisma/client";

import { ActionRequest, ActorRequest, TargetRequest } from "@/types";
import { makeId } from ".";

export const prisma: PrismaClient =
  (global as any).prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") (global as any).prisma = prisma;

export async function getActor(actor: ActorRequest) {
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

export async function getAction(action: ActionRequest) {
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

export async function getTarget(target: TargetRequest) {
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
