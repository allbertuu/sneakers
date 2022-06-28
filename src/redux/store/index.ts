import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../slices/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// tipos para o RootState, o state geral da aplicação
export type RootState = ReturnType<typeof store.getState>;
