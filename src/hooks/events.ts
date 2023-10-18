import { useDeferredValue, useEffect } from "react";
import useSWR from "swr";

import { eventResponseSchema } from "@/types";

import { useDashboardControls } from ".";
import { cachedData } from "@/utils";

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

  const result = useSWR({ page, pageSize, search }, getEvents, {
    ...(live ? { refreshInterval: 1e4 } : {}),
  });

  useEffect(() => {
    result.data?.forEach((e) => cachedData.events.set(e.id, e));

    return () => result.data?.forEach((e) => cachedData.events.delete(e.id));
  }, [result.data]);

  return result;
}

async function getEvents(options?: UseEventsOptions) {
  const { page = 1, pageSize = 15, search } = options || {};

  const params = new URLSearchParams([
    ["page", `${page}`],
    ["pageSize", `${pageSize}`],
  ]);

  if (search) params.set("search", `${search}`);

  const res = await fetch(`/events?${params.toString()}`);

  return eventResponseSchema.array().parse(await res.json());
}
