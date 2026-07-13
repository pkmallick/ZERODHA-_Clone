// import React, { useState , useContext} from "react";
// //import { Link } from "react-router-dom";

// import axios from "axios";

// import GeneralContext from "./GeneralContext";

// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   const { closeBuyWindow } = useContext(GeneralContext);

//   const handleBuyClick = () => {
//     axios.post("http://localhost:3002/newOrder", {
//       name: uid,
//       qty: stockQuantity,
//       price: stockPrice,
//       mode: "BUY",
//     });
// closeBuyWindow();
//     //GeneralContext.closeBuyWindow();
//   };




// const handleBuyClick = () => {
// axios.post(
//   "/api/orders",
//   {
//     name: uid,
//     qty: stockQuantity,
//     price: stockPrice,
//     mode: "BUY",
// },
//   {
//     withCredentials: true,
//   }
// );

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>
//         <div>
//           <button className="btn btn-blue" onClick={handleBuyClick}>
//             Buy
//           </button>
//           <button className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;

import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  // Buy Order
  const handleBuyClick = async () => {
    try {
      await axios.post(
        "http://localhost:3002/api/orders",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        {
          withCredentials: true,
        }
      );

      alert("Order placed successfully!");
      closeBuyWindow();
     } 
    catch (error) {
  console.error("Order Error:", error);

  if (error.response) {
    console.log("Status:", error.response.status);
    console.log("Data:", error.response.data);

    alert(error.response.data.message || "Failed to place order.");
  } else {
    alert(error.message);
  }
}
  };

  // Cancel
  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>

          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;