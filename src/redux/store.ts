import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawer.slice";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
