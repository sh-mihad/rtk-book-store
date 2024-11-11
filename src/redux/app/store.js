import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../features/api/api";
import filterReducer from "../features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export default store;
