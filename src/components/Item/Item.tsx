"use client";

import { useMemo } from "react";

import ArrowIcon from "@/assets/icons/arrow.svg";
import CloseIcon from "@/assets/icons/close.svg";
import IconButton from "@/components/IconButton";
import { EventLog } from "@/types";
import { cn, getColors } from "@/utils";

interface ItemProps {
  expanded?: boolean;
  data: EventLog;
  select?: VoidFunction;
  unselect?: VoidFunction;
}

export default function Item({
  expanded,
  data: {
    id,
    // object,
    actor_id,
    actor_name,
    actor_email,
    // group,
    action,
    target_id,
    target_name,
    // location,
    occurred_at,
    metadata,
  },
  select,
  unselect,
}: ItemProps) {
  const date = useMemo(() => {
    const formatter = Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      ...(occurred_at.getFullYear() === new Date().getFullYear()
        ? {}
        : { year: "numeric" }),
      hour: "numeric",
      minute: "2-digit",
    });

    return formatter.format(occurred_at);
  }, [occurred_at]);

  const [fromColor, toColor] = getColors(actor_email || actor_name);

  return (
    <div className={cn("Item", { expanded })}>
      <div className="col">
        {expanded ? (
          <>
            <Section
              title="ACTOR"
              data={[
                ["Name", actor_name],
                ["Email", actor_email || "N/A"],
                ["ID", actor_id],
              ]}
            />
            {metadata ? (
              <Section title="METADATA" data={Object.entries(metadata)} />
            ) : null}
          </>
        ) : (
          <>
            <div className={`avatar from-${fromColor} to-${toColor}`}>
              {(actor_email || actor_name).slice(0, 1).toUpperCase()}
            </div>
            <span>{actor_email || actor_name}</span>
          </>
        )}
      </div>
      <div className="col">
        {expanded ? (
          <>
            <Section
              title="ACTION"
              data={[
                ["Name", action.name],
                ["Object", action.object],
                ["ID", action.id],
              ]}
            />
            <Section
              title="TARGET"
              data={[
                ["Name", target_name],
                ["ID", target_id],
              ]}
            />
          </>
        ) : (
          <span>{action.name}</span>
        )}
      </div>
      <div className="col">
        {expanded ? (
          <Section title="DATE" data={[["Readable", date]]} />
        ) : (
          <span>{date}</span>
        )}
      </div>
      <IconButton
        onClick={expanded ? unselect : select}
        className="action"
        icon={expanded ? <CloseIcon /> : <ArrowIcon />}
      />
    </div>
  );
}

interface SectionProps {
  title: string;
  data: [string, string | number | boolean][];
}

function Section({ title, data }: SectionProps) {
  return (
    <div className="section">
      <h3 className="title">{title}</h3>
      <table>
        <tbody>
          {data.map(([key, val], i) => (
            <tr className="row" key={i}>
              <td className="label">{key}</td>
              <td className="info" title={`${val}`}>{`${val}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
