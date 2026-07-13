// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import VerticalGraph from "./VerticalGraph";

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);

//   useEffect(() => {
//     axios
//       //.get("http://localhost:3002/allHoldings", { withCredentials: true })
//       //.get("/allHoldings", { withCredentials: true })
//       .get("/api/holdings", {withCredentials: true})

//       .then((res) => {
//         setAllHoldings(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching holdings:", err);
//       });
//   }, []);

//   const labels = allHoldings.map((stock) => stock.name);

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Stock Price",
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

//   return (
//     <>
//       <h3 className="title">Holdings ({allHoldings.length})</h3>

//       <div className="order-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Instrument</th>
//               <th>Qty.</th>
//               <th>Avg. cost</th>
//               <th>LTP</th>
//               <th>Cur. val</th>
//               <th>P&L</th>
//               <th>Net chg.</th>
//               <th>Day chg.</th>
//             </tr>
//           </thead>

//           <tbody>
//             {allHoldings.map((stock, index) => {
//               const curValue = stock.price * stock.qty;
//               const profit = curValue - stock.avg * stock.qty;
//               const isProfit = profit >= 0;
//               const profClass = isProfit ? "profit" : "loss";
//               const dayClass = stock.isLoss ? "loss" : "profit";

//               return (
//                 <tr key={index}>
//                   <td>{stock.name}</td>
//                   <td>{stock.qty}</td>
//                   <td>{stock.avg.toFixed(2)}</td>
//                   <td>{stock.price.toFixed(2)}</td>
//                   <td>{curValue.toFixed(2)}</td>
//                   <td className={profClass}>{profit.toFixed(2)}</td>
//                   <td className={profClass}>{stock.net}</td>
//                   <td className={dayClass}>{stock.day}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       <div className="row">
//         <div className="col">
//           <h5>
//             29,875.<span>55</span>
//           </h5>
//           <p>Total investment</p>
//         </div>

//         <div className="col">
//           <h5>
//             31,428.<span>95</span>
//           </h5>
//           <p>Current value</p>
//         </div>

//         <div className="col">
//           <h5>1,553.40 (+5.20%)</h5>
//           <p>P&L</p>
//         </div>
//       </div>

//       <VerticalGraph data={data} />
//     </>
//   );
// };

// export default Holdings;

// 2n edition
import React, { useEffect, useState } from "react";
import axios from "axios";
import VerticalGraph from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/holdings", {
          withCredentials: true,
        });

        setAllHoldings(res.data);
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };

    fetchHoldings();
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Current Value</th>
              <th>P&amp;L</th>
              <th>Net Chg.</th>
              <th>Day Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const currentValue = stock.price * stock.qty;
              const profit = currentValue - stock.avg * stock.qty;

              const profitClass = profit >= 0 ? "profit" : "loss";
              const dayClass =
                stock.day && stock.day.includes("-") ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>₹ {stock.avg.toFixed(2)}</td>
                  <td>₹ {stock.price.toFixed(2)}</td>
                  <td>₹ {currentValue.toFixed(2)}</td>

                  <td className={profitClass}>
                    ₹ {profit.toFixed(2)}
                  </td>

                  <td className={profitClass}>
                    {stock.net}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total Investment</p>
        </div>

        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current Value</p>
        </div>

        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&amp;L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
