import { createContext, useState } from "react";

export const ProductsListContext = createContext();

export function ProductsListContextProvider({ children }) {
  const [productsList, setProductsList] = useState([]);

  return (
    <ProductsListContext.Provider value={{ productsList, setProductsList }}>
      {children}
    </ProductsListContext.Provider>
  );
}
