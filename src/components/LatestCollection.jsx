import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';


const LatestCollection = () => {
    const {productsData}=useContext(ShopContext);
    console.log(productsData);
  return (
    <>
      <div>

      </div>
    </>
  )
}

export default LatestCollection;