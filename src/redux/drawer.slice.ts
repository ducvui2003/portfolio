import { createReducer } from "@reduxjs/toolkit";

export interface DrawnerState {
  open: boolean;
}

const initialState: DrawnerState = { open: false };

export const drawerReducer = createReducer(initialState, (builder) => {});

export default drawerReducer;
