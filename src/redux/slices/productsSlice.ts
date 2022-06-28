import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type ProductsState = {
  id: string;
  name: string;
  count: number;
}[];

const initialState: ProductsState = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.find(
        (product) => product.name === action.payload.name
      );
      if (existingProduct) {
        existingProduct.count += action.payload.count;
      } else {
        state.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      const choseProduct = state.findIndex((product) => {
        return product.id === action.payload.id;
      });
      if (choseProduct !== -1) {
        state.splice(choseProduct, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
