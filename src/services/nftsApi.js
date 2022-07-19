import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const nftsHeaders = {
  "X-RapidAPI-Key": "03f8ed297fmshe38d28b4515a3a0p1cd970jsn5702025fb60a",
  "X-RapidAPI-Host": "top-nft-collections-and-sales.p.rapidapi.com",
};
const baseUrl =
  "https://top-nft-collections-and-sales.p.rapidapi.com/collections";

const createRequest = (url) => ({ url, headers: nftsHeaders });

export const nftsApi = createApi({
  reducerPath: "nftsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNfts: builder.query({
      query: (count) => createRequest(`/1d?&count=${count}`),
    }),
  }),
});

export const { useGetNftsQuery } = nftsApi;
console.log(useGetNftsQuery);