"use client";

import FilterIcon from "@/assets/icons/filter.svg";
import ExportIcon from "@/assets/icons/export.svg";
import { cn } from "@/utils";
import { useState } from "react";

export default function SearchBar() {
  const [isLive, setIsLive] = useState(false);

  return (
    <div className="SearchBar">
      <input className="field" placeholder="Search name, email or action..." />
      <button className="action filter">
        <FilterIcon />
        FILTER
      </button>
      <button className="action export">
        <ExportIcon />
        EXPORT
      </button>
      <button className="action live" onClick={() => setIsLive((x) => !x)}>
        <div className={cn("spot", { on: isLive })} />
        LIVE
      </button>
    </div>
  );
}
