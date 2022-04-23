import { useContext } from 'react';
import { ProductsListContext } from '../contexts/ProductsList';

export const useProductsList = () => {
  const value = useContext(ProductsListContext);

  return value;
}