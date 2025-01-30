import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import star_icon from "../assets/frontend_assets/star_icon.png";
import dull_star_icon from "../assets/frontend_assets/star_dull_icon.png";

const Product = () => {
  const { id } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  console.log(id);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item.id === id) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3  sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scrolll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                alt="Product Image"
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shink-0 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Product Image" className="w-full h-auto" />
          </div>
        </div>

        {/* Products Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex item-center gap-1 mt-2">
            <img src={star_icon} alt="star" className="w-5 5" />
            <img src={star_icon} alt="star" className="w-5 5" />
            <img src={star_icon} alt="star" className="w-5 5" />
            <img src={star_icon} alt="star" className="w-5 5" />
            <img src={dull_star_icon} alt="star" className="w-5 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <div
                  className={`border border-gray-300 px-4 py-2 cursor-pointer ${
                    size === item ? "bg-black text-white" : ""
                  }`}
                  key={index}
                  onClick={() => setSize(item)}
                >
                  {item}
                </div>
              ))}
            </div>
            <button className="border border-black-300 px-4 py-4 cursor-pointer bg-black text-white active:bg-gray-700 w-full">
              ADD TO CART
            </button>
            <hr className="mt-8 sm:4/5" />
            <div className="text-sm  text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product</p>
              <p>Cash on Delivery is avaliable on this product</p>
              <p>Easy Return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <div className="border px-5 py-3 text-sm">Description</div>
          <div className="border px-5 py-3 text-sm">Reviews (122)</div>
        </div>
        <div className="border px-5 py-3 flex flex-col gap-4 text-sm text-gray-600">
          <p>
            Our e-commerce platform is your one-stop shop for all your needs,
            offering a diverse selection of products ranging from the latest
            electronics to trendy fashion items. We pride ourselves on providing
            high-quality products at competitive prices, ensuring that you get
            the best value for your money.
          </p>
          <p>
            Experience seamless shopping with our user-friendly interface and
            enjoy exclusive deals and discounts tailored just for you. Whether
            you're looking for the newest gadgets or the latest fashion trends,
            our platform is designed to cater to your preferences and make your
            shopping experience enjoyable and convenient.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;