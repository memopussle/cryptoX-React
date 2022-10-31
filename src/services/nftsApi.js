import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const nftsHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_NFTS_RAPID_API,
  "X-RapidAPI-Host": process.env.REACT_APP_NFTS_HOST,
};
const baseUrl = `https://${process.env.REACT_APP_NFTS_HOST}/collections`;

const createRequest = (url) => ({ url, headers: nftsHeaders });
export const nftsApi = createApi({
  reducerPath: "nftsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNfts: builder.query({
      query: (date) => createRequest(`/${date}`),
    }),
  }),
});

export const { useGetNftsQuery } = nftsApi;
