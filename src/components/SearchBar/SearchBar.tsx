"use client";

import CloseIcon from "@/assets/icons/close.svg";
import ExportIcon from "@/assets/icons/export.svg";
import FilterIcon from "@/assets/icons/filter.svg";
import IconButton from "@/components/IconButton";
import { cn } from "@/utils";
import { useDashboardControls } from "@/hooks";

export default function SearchBar() {
  const isLive = useDashboardControls((store) => store.live);
  const toggleIsLive = useDashboardControls((store) => store.toggleLive);
  const setSearch = useDashboardControls((store) => store.setSearch);
  const search = useDashboardControls((store) => store.search);

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
      <button className="action filter">
        <FilterIcon />
        FILTER
      </button>
      <button className="action export">
        <ExportIcon />
        EXPORT
      </button>
      <button className="action live" onClick={toggleIsLive}>
        <div className={cn("spot", { on: isLive })} />
        LIVE
      </button>
    </div>
  );
}
