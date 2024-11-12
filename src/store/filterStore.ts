import { atom } from "nanostores";

export interface filterOptions {
  searchQuery: string;
  tags: string[];
}

export const filterStore = atom<filterOptions>({
  searchQuery: "",
  tags: [],
});
