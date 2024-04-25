import { apiEndpoints, privateClient } from "@http";
import { SerializedError } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "@utils/store";
import { IGetCompanies } from "./types";
import { setAllCompanies } from "./slice";

export const fetchCompanies = createAppAsyncThunk<
  unknown,
  Record<string, number | string>
>(
  "companies/fetchCompanies",
  async ({ pageSize, page, search }, { rejectWithValue, dispatch }) => {
    try {
      const params: Record<string, number | string> = {};

      if (pageSize !== undefined) {
        params._limit = Number(pageSize);
      }

      if (page !== undefined) {
        params._page = Number(page) + 1;
      }

      if (search !== undefined) {
        params.q = search;
      }

      const res = await privateClient.get({
        route: apiEndpoints.API_GET_COMPANIES,
        replacements: {
          queryString: params,
        },
      });
      const _data: IGetCompanies = {
        companies: res.data,
        // json web server returns total count in headers not in response model
        companiesCount: Number(res.headers["x-total-count"]),
      };
      dispatch(setAllCompanies(_data));
    } catch (e) {
      const error = e as SerializedError;
      rejectWithValue(error);
    }
  }
);
