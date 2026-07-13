

// import React, { useEffect } from "react";
// import axios from "axios";

// function Apps() {

//   useEffect(() => {

//     axios.get(
//       "/api/auth/verify",
//       { withCredentials: true }
//     )
//     .then(res => {

//       if (!res.data.status) {
//         window.location.href = "/login";
//       }

//     })
//     .catch(() => {
//       window.location.href = "/login";
//     });

//   }, []);

//   return (
//     <div>
//       <h2>Apps Page</h2>
//       <p>No apps available yet.</p>
//     </div>
//   );
// }

// export default Apps;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Apps() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const verifyUser = async () => {
//       try {
//         const res = await axios.get("/api/auth/verify", {
//           withCredentials: true,
//         });

//         if (!res.data.status) {
//           window.location.href = "/login";
//         }
//       } catch (error) {
//         console.error(error);
//         window.location.href = "/login";
//       } finally {
//         setLoading(false);
//       }
//     };

//     verifyUser();
//   }, []);

//   if (loading) {
//     return <h3>Loading...</h3>;
//   }

//   return (
//     <div>
//       <h2>Apps Page</h2>
//       <p>No apps available yet.</p>
//     </div>
//   );
// }

// export default Apps;

import React from "react";

function Apps() {
  return (
    <div className="content-wrapper">
      <h2>Apps</h2>
      <p>No apps available yet.</p>
    </div>
  );
}

export default Apps;