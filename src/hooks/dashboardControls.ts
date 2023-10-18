import { create } from "zustand";

interface DashboardControls {
  selected?: string;
  page: number;
  pageSize: number;
  live?: boolean;
  search: string;
  actor_id?: string;
  target_id?: string;
  action_id?: string;
  action_name?: string;
  isLoading?: boolean;
  setIsLoading(index: number, value: boolean): void;
  setSelected(id: string | undefined): void;
  loadMore(): void;
  rollBack(index: number): void;
  setSearch(value: string): void;
  toggleLive(): void;
}

export const useDashboardControls = create<DashboardControls>()((set) => {
  const loadingList: boolean[] = [];

  return {
    page: 1,
    pageSize: 15,
    search: "",
    setIsLoading(index, value) {
      loadingList[index] = value;
      set({ isLoading: loadingList.some((l) => l) });
    },
    loadMore() {
      set(({ page }) => ({ page: page + 1 }));
    },
    rollBack(index) {
      set(({ page }) => ({ page: page < index ? page : index - 1 }));
    },
    setSelected(selected) {
      set({ selected });
    },
    setSearch(value) {
      set(({ search }) => ({
        search: value,
        ...(search === value ? {} : { page: 1, selected: undefined }),
      }));
    },
    toggleLive() {
      set(({ live }) => ({ live: !live }));
    },
  };
});
