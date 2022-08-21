import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_CRYPTO_RAPID_API,
  "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_HOST,
};

const baseUrl = `https://${process.env.REACT_APP_CRYPTO_HOST}`;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders }); //url = url,headers = cryptoApiHeaders
//headers: Object { "X-RapidAPI-Key": "03f8ed297fmshe38d28b4515a3a0p1cd970jsn5702025fb60a", "X-RapidAPI-Host": "coinranking1.p.rapidapi.com" }

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }), //baseUrl = baseUrl variable above
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`), //will add endpoint to url https://coinranking1.p.rapidapi.com/coins
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCoinPriceHistory: builder.query({
      query: (coinId, timePeriod) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCoinPriceHistoryQuery } = cryptoApi; //creat a hook to get all data for the query above


