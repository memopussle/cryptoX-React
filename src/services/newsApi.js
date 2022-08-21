import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const newsHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_NEWS_RAPID_API,
  "X-RapidAPI-Host": process.env.REACT_APP_NEWS_HOST,
};
const baseUrl = `https://${process.env.REACT_APP_NEWS_HOST}`;

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