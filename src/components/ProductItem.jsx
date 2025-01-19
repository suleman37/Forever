// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";

// const ProductItem = ({ id, name, price, image }) => {
//   const [currency] = useContext(ShopContext);
//   return (
//     <Link to={`product/${id}`} className="text-gray-700 cursor-pointer">
//       <div className="overflow-hidden">
//         <img
//           className="hover:scale-110 transition ease-in-out"
//           src={image[0]}
//           alt=""
//         />
//       </div>
//       <p className="pt-3 pb-3 text-sm">{name}</p>
//       <p className="text-sm font-medium">
//         {currency}
//         {price}
//       </p>
//     </Link>
//   );
// };

// export default ProductItem;


import React from 'react'

const ProductItem = () => {
  return (
    <div>
      <h1>Cards</h1>
    </div>
  )
}

export default ProductItem
