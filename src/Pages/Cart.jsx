import { useContext, React, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import bin_icon from "../assets/frontend_assets/bin_icon.png";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, products, currency, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const Data = [];
    for (const items in cartItems) {
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0 && item) {
          Data.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(Data);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product.id === item.id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex  items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt="Cart Item"
                />
                <div>
                  <p>{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="border border-gray-300 px-4 py-2">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? "null"
                    : updateQuantity(item.size, item.id, Number(e.target.value))
                }
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                onClick={() => {
                  updateQuantity(item.size, item.id, 0);
                }}
                src={bin_icon}
                alt="Bin Icon"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal/>
          <div className="w-full text-end">
            <button 
              className="bg-black text-white text-sm my-8 px-8 py-3"
              onClick={() => navigate('/place-order')}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;