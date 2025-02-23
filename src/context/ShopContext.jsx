import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { products } from "../assets/frontend_assets/assets";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryCharge = 10;
  const backendurl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showsearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [product, setProduct] = useState([]);

  const AddToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
    }
    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const updateQuantity = (size, itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartItem = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      for (let item in cartItems[items]) {
        if (item && cartItems[items][item] > 0) {
          totalcount += cartItems[items][item];
        }
      }
    }
    return totalcount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendurl}/api/product/list`);
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getProductsData()
  },[])

  const CartCount = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      let iteminfo = products.find((product) => product.id === items);
      for (let item in cartItems[items]) {
        try {
          if (item && cartItems[items][item] > 0) {
            totalcount += iteminfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalcount;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    deliveryCharge,
    search,
    setSearch,
    showsearch,
    setShowSearch,
    cartItems,
    AddToCart,
    getCartItem,
    updateQuantity,
    CartCount,
    backendurl
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
