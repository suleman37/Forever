import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { CartCount, currency, deliveryCharge } = useContext(ShopContext);
  return (
    <div className="w-full border border-gray-400 p-5">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>
            {currency}
            {CartCount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {deliveryCharge}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>
            <b>Total</b>
          </p>
          <p>
            {currency}
            {CartCount() === 0 ? 0 : CartCount() + deliveryCharge}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;