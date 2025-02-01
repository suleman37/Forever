import { useContext, React, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import bin_icon from "../assets/frontend_assets/bin_icon.png";
import Title from "../components/Title";

const Cart = () => {
  const { cartItems, products, currency } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const Data = [];
    for (const items in cartItems) {
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
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
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product.id === item.id);
            return (
              <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex  items-start gap-6">
                  <img className="w-16 sm:w-20" src={productData.image[0]} alt="Cart Item" />
                 <div>
                 <p>{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className="border border-gray-300 px-4 py-2">{item.size}</p>
                  </div>
                 </div>
                </div>
                <input className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity} />
                <img src={bin_icon} alt="Bin Icon" className="w-4 mr-4 sm:w-5 cursor-pointer" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Cart;