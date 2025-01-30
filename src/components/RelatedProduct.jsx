import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProduct = ({category , subcategory}) => {
    const {product} = useContext(ShopContext);
    const [related , setRelated] = useState();
    useEffect(()=>{
        if (product.lenght > 0) {
            let ProductCopy  = product.slice();
            ProductCopy = ProductCopy.filter((item)=>category === item.category);
            ProductCopy = ProductCopy.filter((item)=>subcategory === item.subcategory);
            console.log(ProductCopy.slice(0,5))
        }
    })
  return (
    <>
      <div className="my-24">
        <div className="text-center text-3xl py-2">
            <Title text1={"RELATED"} text2={"PRODUCT"}/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-col-4 lg:grid-col-5 gap-4">
            {related.map((item , index)=>{
                <ProductItem key={index}  id={item.id} name={item.name} price={item.price} image={item.image}/>
            })}
        </div>
      </div>
    </>
  )
}

export default RelatedProduct;