import { RootState } from "../index";

export const selectCompanies = (state: RootState) =>
  state.companies.allCompanies;
export const selectCompaniesTotalCount = (state: RootState) =>
  state.companies.companiesCount;
export const selectIsPending = (state: RootState) => state.companies.isPending;
