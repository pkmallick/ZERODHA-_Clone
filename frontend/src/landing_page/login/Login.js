import React, { useState } from "react";
import axios from "axios";


function Login() {

  const [data, setData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const res = await axios.post(
        "http://localhost:3002/api/auth/login",
        data,
        {
          withCredentials: true,
        }
      );


      if (res.data.success) {

        alert("Login successful!");


        // Redirect to separate Dashboard React app
        window.location.href = "http://localhost:3001/dashboard";
      } else {

        alert(
          res.data.message || "Login failed"
        );

      }


    } catch (err) {

      console.error(err);


      alert(
        err.response?.data?.message ||
        "Login failed. Please try again."
      );

    }

  };



  return (

    <div className="container mt-5">


      <h2>Login</h2>



      <form onSubmit={handleSubmit}>


        <input

          className="form-control mb-3"

          type="email"

          name="email"

          placeholder="Enter Email"

          value={data.email}

          onChange={handleChange}

          required

        />



        <input

          className="form-control mb-3"

          type="password"

          name="password"

          placeholder="Enter Password"

          value={data.password}

          onChange={handleChange}

          required

        />

        <button

          type="submit"

          className="btn btn-success"
        >

          Login

        </button>

      </form>


    </div>

  );

}

export default Login;