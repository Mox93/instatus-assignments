"use client";

import { useEffect, useMemo } from "react";

import LoadingIcon from "@/assets/icons/loading.svg";
import SearchBar from "@/components/SearchBar";
import Item from "@/components/Item";
import { useEvents, useDashboardControls } from "@/hooks";

export default function ActivityLog() {
  const loadMore = useDashboardControls((store) => store.loadMore);
  const isLoading = useDashboardControls((store) => store.isLoading);
  const page = useDashboardControls((store) => store.page);

  const pages = useMemo(() => {
    const list: number[] = [];

    for (let i = 1; i <= page; i++) list.push(i);

    return list;
  }, [page]);

  return (
    <div className="ActivityLog">
      <div className="header">
        <SearchBar />
        <div className="labels">
          <h3>ACTOR</h3>
          <h3>ACTION</h3>
          <h3>DATE</h3>
        </div>
      </div>
      <div className="body">
        {pages.map((i) => (
          <Page key={i} index={i} />
        ))}
        {isLoading && page === 1 ? (
          <p className="loadingMessage">Loading...</p> // TODO replace with skeleton
        ) : null}
      </div>
      <div className="footer">
        <button className="load" onClick={loadMore} disabled={isLoading}>
          LOAD MORE
          {isLoading && (
            <div className="loadingSpinner">
              <LoadingIcon />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

function Page({ index }: { index: number }) {
  const selected = useDashboardControls((store) => store.selected);
  const setSelected = useDashboardControls((store) => store.setSelected);
  const setIsLoading = useDashboardControls((store) => store.setIsLoading);
  const rollBack = useDashboardControls((store) => store.rollBack);

  const { data: events, error, isLoading } = useEvents(index);

  useEffect(() => {
    setIsLoading(index, isLoading);
  }, [index, isLoading, setIsLoading]);

  useEffect(() => {
    if (!events?.length && !error && !isLoading) rollBack(index);
  }, [events, error, isLoading, rollBack, index]);

  return (
    <>
      {error ? <p className="errorMessage">Something went wrong!</p> : null}
      {events?.map((data) => (
        <Item
          key={data.id}
          data={data}
          expanded={selected === data.id}
          select={() => setSelected(data.id)}
          unselect={() => setSelected(undefined)}
        />
      ))}
    </>
  );
}
