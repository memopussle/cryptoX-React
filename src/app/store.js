import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { nftsApi } from "../services/nftsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [nftsApi.reducerPath]: nftsApi.reducer,
  },
});
