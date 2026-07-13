// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/orders", {
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹ {order.price}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;