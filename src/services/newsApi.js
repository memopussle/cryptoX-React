import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const newsHeaders = {
  "X-RapidAPI-Key": "03f8ed297fmshe38d28b4515a3a0p1cd970jsn5702025fb60a",
  "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
};
const baseUrl = "https://crypto-news-live3.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: newsHeaders });

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => createRequest(`/news?`),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
console.log(useGetNewsQuery)