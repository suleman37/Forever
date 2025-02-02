import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20"
                src={item.image[0]}
                alt="Ordered Items"
              />
              <div>
                <p className="sm:text-base">{item.name}</p>
                <div className="flex item-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p className="text-lg">Quantity: {item.quantity}</p>
                  <p className="text-lg">Size: {item.size}</p>
                </div>
                <p>
                  Date: <span className="text-gray-500">2 February 2025</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center gap-2">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="whitespace-nowrap text sm md:text-base">
                  Ready To Ship
                </p>
              </div>
              <div className="flex justify-end w-full">
                <button className="bg-black text-white text-sm my-8 px-8 py-3">Track Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;