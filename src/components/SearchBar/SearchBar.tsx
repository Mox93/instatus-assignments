"use client";

import CloseIcon from "@/assets/icons/close.svg";
import ExportIcon from "@/assets/icons/export.svg";
import FilterIcon from "@/assets/icons/filter.svg";
import IconButton from "@/components/IconButton";
import { cn, getCSV } from "@/utils";
import { useDashboardControls } from "@/hooks";
import { useCallback, useRef } from "react";

export default function SearchBar() {
  const isLive = useDashboardControls((store) => store.live);
  const toggleIsLive = useDashboardControls((store) => store.toggleLive);
  const setSearch = useDashboardControls((store) => store.setSearch);
  const search = useDashboardControls((store) => store.search);

  const exportRef = useRef<HTMLAnchorElement>(null);

  const exportCSV = useCallback(() => {
    if (!exportRef.current) return;

    exportRef.current.setAttribute("href", getCSV());
    exportRef.current.setAttribute(
      "download",
      `instalog-dump_${new Date().toISOString()}.csv`
    );
  }, []);

  return (
    <div className="SearchBar">
      <input
        className="field"
        placeholder="Search name, email or action..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search ? (
        <IconButton
          className="clearSearch"
          onClick={() => setSearch("")}
          icon={<CloseIcon />}
        />
      ) : null}
      {/* <button className="action filter">
        <FilterIcon />
        FILTER
      </button> */}
      <a className="action export" onClick={exportCSV} ref={exportRef}>
        <ExportIcon />
        EXPORT
      </a>
      <button className="action live" onClick={toggleIsLive}>
        <div className={cn("spot", { on: isLive })} />
        LIVE
      </button>
    </div>
  );
}
