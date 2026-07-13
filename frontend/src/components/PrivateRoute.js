

// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";

// const PrivateRoute = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const res = await axios.get("/api/user", {
//           withCredentials: true,
//         });

//         if (res.data.status) {
//           setAuthenticated(true);
//         }
//       } catch (err) {
//         setAuthenticated(false);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (!authenticated) return <Navigate to="/login" replace />;

//   return children;
// };

// export default PrivateRoute;

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          "/api/auth/verify",
          {
            withCredentials: true,
          }
        );

        if (res.data.status) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        console.error(error);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;