import React, { useContext, useState } from "react";
import Img from "../Img/Student.avif";
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import dataPass from "../Context/Log";

function Login() {
  const [userData, setData] = useState({
    username: " ",
    password: null,
  });

  //context api data
  const { isLoggedIn, setLoggedIn } = useContext(dataPass);

  //click to submit the values

  const clickSubmit = (e) => {
    //it's basically contained the prev state copy and update the next values
    setData((prev) => ({
      ...prev,

      //key and object values
      [e.target.name]: e.target.value,
    }));
  };
  const nav = useNavigate();

  function save(e) {
    //this is mandatory to used here otherwise it's reload very fastly
    e.preventDefault();

    toast.success("Thanks for login");
    setLoggedIn(true);
    nav("/Dashboard");
  }

  const [pass, showPass] = useState(false);

  //navigata logic to move to the next logic here

  return (
    <>
      <div className="grid  grid-cols-2 gap-4">
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis deleniti magni.</p> */}
        <div className=" mx-auto w-3/4">
          <h1 className="text-2xl font-semibold text-white mb-4">
            Registration Form
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            numquam officia qui!
          </p>

          <form
            onSubmit={save}
            // onClick={runData}
            className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                required
                type="email"
                name="username"
                value={userData.username}
                placeholder="username"
                onChange={clickSubmit}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                required
                name="password"
                type={pass ? "text" : "password"}
                onChange={clickSubmit}
                value={userData.password}
                placeholder="********"
              />

              {/* button icon apply  logic*/}
              <span
                onClick={() => {
                  showPass((prev) => !prev);
                }}
                className=" cursor-pointer flex justify-end"
              >
                {pass ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <div className="flex items-center justify-end">
              <Link
                to="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </Link>
            </div>
            <br></br>

            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>

            <br></br>
          </form>
        </div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis deleniti magni.</p> */}
        <div>
          <img className=" w-4/5  animate-pulse" src={Img} alt="image" />
        </div>
      </div>
    </>
  );
}

export default Login;
