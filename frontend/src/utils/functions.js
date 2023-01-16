import products from '../database/products.js';

export const getProducts = () => {
  return products.map(item => {
    return item;
  });
};

export const shortString = (str, slc= 50) => {
  return str.length > slc ? str.slice(0, slc) + '...' : str 
};