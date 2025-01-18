import React, { useContext  , useEffect, useState} from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setlatestProduct] = useState([]);
  useEffect(()=>{
    setlatestProduct(products.slice(0,10))
  },[])
  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"LASTEST"} text2={"COLLECTIONS"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            explicabo labore! Dignissimos molestiae, id nesciunt reiciendis
            blanditiis temporibus iure architecto! Magnam odit sequi vel ut
            ducimus dignissimos error velit reiciendis.
          </p>
        </div>
      </div>
    </>
  );
};

export default LatestCollection;