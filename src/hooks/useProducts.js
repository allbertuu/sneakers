import { useContext } from 'react';
import { ProductsContext } from '../contexts/Products';

export const useProducts = () => {
  const value = useContext(ProductsContext);

  return value;
}