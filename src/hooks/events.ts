import { useDeferredValue } from "react";
import useSWR from "swr";

import { EventLog } from "@/types";

import { useDashboardControls } from ".";

interface UseEventsOptions {
  page?: number;
  pageSize?: number;
  search?: string;
}

export function useEvents(page: number) {
  const pageSize = useDashboardControls((store) => store.pageSize);
  const live = useDashboardControls((store) => store.live);
  const _search = useDashboardControls((store) => store.search);
  const search = useDeferredValue(_search);

  return useSWR({ page, pageSize, search }, getEvents, {
    ...(live ? { refreshInterval: 1e4 } : {}),
  });
}

async function getEvents(options?: UseEventsOptions) {
  console.log("getEvents");
  const { page = 1, pageSize = 15, search } = options || {};

  const params = new URLSearchParams([
    ["page", `${page}`],
    ["pageSize", `${pageSize}`],
  ]);

  if (search) params.set("search", `${search}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(`/events?${params.toString()}`);
  return (await res.json()) as EventLog[];
}
