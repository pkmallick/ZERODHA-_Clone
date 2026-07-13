
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Signup() {

//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {

//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });

//   };

//   // const handleSubmit = async (e) => {

//   //   e.preventDefault();

//   //   try {

//   //     const res = await axios.post(
//   //       "http://localhost:3002/api/auth/signup",
//   //       user
//   //     );

//   //     if (res.data.success) {

//   //       alert("Signup successful");

//   //       navigate("/login");

//   //     }

//   //   } catch (err) {

//   //     console.log(err);

//   //     alert(
//   //       err.response?.data?.message ||
//   //       "Signup failed"
//   //     );

//   //   }

//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await axios.post(
//       "/api/auth/signup",
//       user
//     );

//     if (res.data.success) {
//       alert("Signup successful");
//       navigate("/login");
//     }
//   } catch (err) {
//     console.log(err);

//     alert(
//       err.response?.data?.message ||
//       "Signup failed"
//     );
//   }
// };

//   return (

//     <div className="container mt-5">

//       <h2>Signup</h2>

//       <form onSubmit={handleSubmit}>

//         <input
//           className="form-control mb-3"
//           type="text"
//           name="username"
//           placeholder="Enter Username"
//           onChange={handleChange}
//           required
//         />

//         <input
//           className="form-control mb-3"
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           onChange={handleChange}
//           required
//         />

//         <input
//           className="form-control mb-3"
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           onChange={handleChange}
//           required
//         />

//         <button
//           className="btn btn-primary"
//           type="submit"
//         >
//           Signup
//         </button>

//       </form>

//     </div>

//   );

// }

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/api/auth/signup",
        user,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        alert("Signup successful!");

        navigate("/login");
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "Signup failed. Please try again."
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="username"
          placeholder="Enter Username"
          value={user.username}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
