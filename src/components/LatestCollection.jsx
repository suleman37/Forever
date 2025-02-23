import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Title from "./Title";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setlatestProduct] = useState([]);
  useEffect(() => {
    setlatestProduct(products.slice(0, 10));
    // console.log("latestProduct)
  }, [products]);
  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            blanditiis temporibus iure architecto!
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProduct.map((item, index) => {
            return (
              <ProductItem
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LatestCollection;