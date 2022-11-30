import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
