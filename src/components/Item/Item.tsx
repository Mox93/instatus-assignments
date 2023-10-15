"use client";

import { useMemo } from "react";

import ArrowIcon from "@/assets/icons/arrow.svg";
import CloseIcon from "@/assets/icons/close.svg";
import { EventLog } from "@/types";
import { cn } from "@/utils";

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
  occurred_at = useMemo(() => {
    const date = new Date(occurred_at);

    const formatter = Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      ...(date.getFullYear() === new Date().getFullYear()
        ? {}
        : { year: "numeric" }),
      hour: "numeric",
      minute: "2-digit",
    });

    return formatter.format(date);
  }, [occurred_at]);

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
            <div className="avatar">
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
          <Section title="DATE" data={[["Readable", occurred_at]]} />
        ) : (
          <span>{occurred_at}</span>
        )}
      </div>
      <button onClick={expanded ? unselect : select} className="action">
        {expanded ? <CloseIcon /> : <ArrowIcon />}
      </button>
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
        {data.map(([key, val], i) => (
          <tr className="row" key={i}>
            <td className="label">{key}</td>
            <td className="info" title={`${val}`}>{`${val}`}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
