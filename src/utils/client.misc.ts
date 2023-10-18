import { EventLog } from "@/types";

export const cachedData = { events: new Map<string, EventLog>() };

export function getCSV() {
  const headers = [
    "id",
    "object",
    "group",
    "actor_id",
    "actor_name",
    "actor_email",
    "action_id",
    "action_name",
    "target_id",
    "target_name",
    "occurred_at",
    "location",
    "metadata",
  ].join(";");
  const rows = Array.from(cachedData.events.values())
    .map(
      ({
        id,
        object,
        group,
        actor_id,
        actor_name,
        actor_email = "",
        action: { id: action_id, name: action_name },
        target_id,
        target_name,
        occurred_at,
        location,
        metadata,
      }) =>
        [
          id,
          object,
          group,
          actor_id,
          actor_name,
          actor_email,
          action_id,
          action_name,
          target_id,
          target_name,
          occurred_at.toISOString(),
          location,
          JSON.stringify(metadata),
        ].join(";")
    )
    .join("\n");

  const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`;

  return encodeURI(csvContent);
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const COLORS = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const NAMES = new Map<string, number>();

const LETTERS = new Map<string, number>();

export function getColors(name: string) {
  const initial = name.slice(0, 1).toUpperCase();

  let index = NAMES.get(name);

  if (typeof index === "undefined") {
    index = LETTERS.get(initial) ?? ALPHABET.indexOf(initial);
    LETTERS.set(initial, (index + 5) % COLORS.length);
    NAMES.set(name, index);
  }

  const fromColor = COLORS[index % COLORS.length];
  const toColor = COLORS[(index + 12) % COLORS.length];

  return [fromColor, toColor];
}
