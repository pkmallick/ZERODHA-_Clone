// import React, { useState } from "react";

// import BuyActionWindow from "./BuyActionWindow";

// const GeneralContext = React.createContext({
//   openBuyWindow: (uid) => {},
//   closeBuyWindow: () => {},
// });

// export const GeneralContextProvider = (props) => {
//   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//   const [selectedStockUID, setSelectedStockUID] = useState("");

//   const handleOpenBuyWindow = (uid) => {
//     setIsBuyWindowOpen(true);
//     setSelectedStockUID(uid);
//   };

//   const handleCloseBuyWindow = () => {
//     setIsBuyWindowOpen(false);
//     setSelectedStockUID("");
//   };

//   return (
//     <GeneralContext.Provider
//       value={{
//         openBuyWindow: handleOpenBuyWindow,
//         closeBuyWindow: handleCloseBuyWindow,
//       }}
//     >
//       {props.children}
//       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
//     </GeneralContext.Provider>
//   );
// };

// export default GeneralContext;

import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";


const GeneralContext = React.createContext();


export const GeneralContextProvider = ({ children }) => {


  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);

  const [selectedStockUID, setSelectedStockUID] = useState("");



  const openBuyWindow = (uid) => {

    setSelectedStockUID(uid);

    setIsBuyWindowOpen(true);

  };



  const closeBuyWindow = () => {

    setSelectedStockUID("");

    setIsBuyWindowOpen(false);

  };



  return (

    <GeneralContext.Provider

      value={{
        openBuyWindow,
        closeBuyWindow,
      }}

    >

      {children}


      {
        isBuyWindowOpen &&

        <BuyActionWindow 
          uid={selectedStockUID}
        />

      }


    </GeneralContext.Provider>

  );

};
export default GeneralContext;