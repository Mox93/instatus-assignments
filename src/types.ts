import { z } from "zod";

const identitySchema = z.object({
  id: z.string(),
  name: z.string(),
});

const actionSchema = z
  .object({
    object: z.string(),
  })
  .merge(identitySchema);

const actionRequestSchema = z.union([
  z.string(),
  actionSchema.omit({ id: true }).strict(),
]);

const actorSchema = z
  .object({
    email: z.string().email().nullish(),
  })
  .merge(identitySchema);

const actorRequestSchema = z.union([
  z.string(),
  actorSchema.omit({ id: true }).strict(),
]);

const targetSchema = z.object({}).merge(identitySchema);

const targetRequestSchema = z.union([
  z.string(),
  targetSchema.omit({ id: true }).strict(),
]);

const eventBaseSchema = z.object({
  object: z.string(),
  group: z.string(),
  location: z.string(),
  occurred_at: z.coerce.date(),
  metadata: z
    .record(z.string(), z.union([z.string(), z.number(), z.boolean()]))
    .optional(),
});

export const eventRequestSchema = z
  .object({
    action: actionRequestSchema,
    actor: actorRequestSchema,
    target: targetRequestSchema,
  })
  .merge(eventBaseSchema)
  .strict();

export const eventResponseSchema = z
  .object({
    id: z.string(),
    actor_id: z.string(),
    actor_name: z.string(),
    actor_email: z.string().nullish(),
    action: actionSchema,
    target_id: z.string(),
    target_name: z.string(),
  })
  .merge(eventBaseSchema);

export type EventLog = z.infer<typeof eventResponseSchema>;
export type ActorRequest = z.infer<typeof actorRequestSchema>;
export type ActionRequest = z.infer<typeof actionRequestSchema>;
export type TargetRequest = z.infer<typeof targetRequestSchema>;
