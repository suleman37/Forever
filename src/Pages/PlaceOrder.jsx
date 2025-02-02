import React, { use, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import Stripe from "../assets/frontend_assets/stripe_logo.png";
import RazorPay from "../assets/frontend_assets/razorpay_logo.png";
import { useNavigate } from "react-router-dom";

const PaymentMethod = ({ method, setMethod, value, logo, label }) => (
  <div
    className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
    onClick={() => setMethod(value)}
    onKeyDown={(e) => e.key === "Enter" && setMethod(value)}
    tabIndex={0}
    aria-label={`Select ${label} as payment method`}
  >
    <div
      className={`w-3 h-3 border rounded-full ${
        method === value ? "bg-green-500" : ""
      }`}
    ></div>
    {logo ? (
      <img className="h-5 mx-4" src={logo} alt={label} />
    ) : (
      <p className="text-gray-500 text-sm font-medium mx-4">{label}</p>
    )}
  </div>
);

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();

  const paymentMethods = [
    { value: "stripe", logo: Stripe, label: "Stripe" },
    { value: "razorpay", logo: RazorPay, label: "Razor Pay" },
    { value: "cod", logo: null, label: "CASH ON DELIVERY" },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last Name"
          />
        </div>
        <input
          type="email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Street Address"
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="number"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="ZipCode"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone Number"
        />
      </div>

      <div className="mt-8 w-full sm:w-auto">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col lg:flex-row gap-3">
            {paymentMethods.map((pm) => (
              <PaymentMethod
                key={pm.value}
                method={method}
                setMethod={setMethod}
                value={pm.value}
                logo={pm.logo}
                label={pm.label}
              />
            ))}
          </div>

          <div className="w-full text-end">
            <button
              className="bg-black text-white text-sm my-8 px-8 py-3"
              onClick={() => navigate("/orders")}
            >
              PLACE OREDR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
