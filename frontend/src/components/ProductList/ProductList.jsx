// import styles from 'ProductList.module.css';
import { useState } from 'react';
import { getProducts } from '../../utils/functions.js';
import Card from '../Card';

const ProductList = () => {

  const products = getProducts();
  console.log(products)
  // const [products, setProducts] = useState(getProducts());
  
  const cards = products.map((product) => {
    return <Card key={product.id} {...product} />
  });

  return (
    
    <>
      <h3>Product List</h3>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cards}   
      </div>
    </>
  );

};

export default ProductList;