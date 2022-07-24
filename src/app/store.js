import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { newsApi } from "../services/newsApi";
import { nftsApi } from "../services/nftsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [nftsApi.reducerPath]: nftsApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
});
