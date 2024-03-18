import React, { useContext, useState } from "react";
import Study from "../Img/Study.avif";
import toast from "react-hot-toast";
// import { FaGoogle } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import dataPass from "../Context/Log";
import Security from "../Auth/Security";

function Signup() {
  //form verifications concepts
  const [userData, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  //this is for password
  const [password, setPass] = useState(false);

  //handler the functions
  const tabHandler = (e) =>
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));

  //data is logged in and setLoggedIn
  const { isLoggedIn, setLoggedIn } = useContext(dataPass);
  const nav = useNavigate();

  //submit handler data
  const stored = (e) => {
    e.preventDefault();
    if (userData.password != userData.confirmpassword) {
      setLoggedIn(false);
      toast.error("password not match");
    } else {
      setLoggedIn(true);
      nav("/Dashboard");
      toast.success("Account created");
    }
  };
  //this is for active btn
  const [active, setActive] = useState(false);
  // stop handler
  const stopHandler = () => {
    setActive(true);
    toast.success("student mode on");
  };
  // disabled handler
  const disabledHandler = () => {
    setActive(false);
    toast.success("Instructor mode on");
  };

  //active btn css
  const styles = {
    stopHandler: {
      backgroundColor: "white",
      color: "black",
      cursor: "pointer",
      hover: "black",
    },
    disabledHandler: {
      backgroundColor: "gray",
      hover: "black",
    },
  };
  return (
    <div>
      <h1 className="text-4xl  font-extrabold  text-white mb-4">
        Join the millions learning to <br />
        code with JMS for free
      </h1>
      <div className=" grid grid-cols-2">
        <div className="container-first ">
          <p>
            build skills for today , tomorrow and beyond
            <i className=" text-blue-400 ">
              {" "}
              Education to future-proof your career
            </i>
          </p>
          <br></br>
          <img src={Study} className="  animate-pulse" alt="study" />
          {/* form types */}
        </div>

        <div className="">
          <div className="btn bg-slate-400 w-1/3 m-auto rounded-lg text-center  flex p-2">
            <button
              disabled={active}
              onClick={stopHandler}
              style={active ? styles.stopHandler : styles.disabledHandler}
              className=" cursor-pointer text-white font-bold py-2 px-4 rounded"
            >
              Student
            </button>
            <button
              onClick={disabledHandler}
              disabled={!active}
              style={!active ? styles.stopHandler : styles.disabledHandler}
              className="  hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
            >
              Instructor
            </button>
          </div>

          {/* <img src={Study} alt="" /> */}
          <form
            onSubmit={stored}
            className=" shadow-md rounded px-9 pt-3 pb-3 h-auto mb-5 w-2/3  bg-slate-50 m-auto"
          >
            <div class="mb-4 ">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="first-name"
              >
                First Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first-name"
                type="text"
                placeholder="First Name"
                name="firstname"
                value={userData.firstname}
                required
                onChange={tabHandler}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="last-name"
              >
                Last Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last-name"
                type="text"
                name="lastname"
                value={userData.lastname}
                onChange={tabHandler}
                placeholder="Last Name"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={tabHandler}
              />
            </div>
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={password ? "text" : "password"}
                name="password"
                value={userData.password}
                onChange={tabHandler}
                placeholder="Password"
              />

              <span
                onClick={() => {
                  setPass((prev) => !prev);
                }}
                className=" flex justify-end text-black cursor-pointer"
              >
                {password ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Confirm Password
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confpassword"
                type={password ? "text" : "password"}
                name="confirmpassword"
                value={userData.confirmpassword}
                onChange={tabHandler}
                placeholder="confirm password"
              />

              <span
                onClick={() => {
                  setPass((prev) => !prev);
                }}
                className=" flex justify-end text-black cursor-pointer"
              >
                {password ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <div className="account flex justify-end">
              <p className=" text-blue-500 font-medium cursor-pointer  underline-offset-8">
                forget password
              </p>
            </div>
            <br></br>
            <div class="flex items-center justify-between">
              <button class="  bg-yellow-300  text-black hover:text-white transition-all  hover:bg-slate-700 w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Create Account
              </button>
            </div>
            <br></br>
            {/* create the line  */}
            <div className=" flex w-full items-center gap-x-4">
              <div className=" w-full h-[1px] bg-black"> </div>
              <p className=" text-black font-medium leading[1.375rem]">OR</p>
              <div className="w-full h-[1px] bg-black "></div>
            </div>
            {/* google auth provider  */}
            <button className=" w-full  flex items-center justify-center">
              <Security isLogged />
            </button>
          </form>
        </div>
        {/* grid last values */}
      </div>
    </div>
  );
}
export default Signup;
