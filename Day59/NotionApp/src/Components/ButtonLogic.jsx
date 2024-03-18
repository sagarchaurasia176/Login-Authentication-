import React, { useContext } from "react";
import toast from "react-hot-toast";

import { NavLink } from "react-router-dom";

import dataPass from "../Context/Log";

function ButtonLogic(props) {
  const { isLoggedIn, setLoggedIn } = useContext(dataPass);

  return (
    <div>
      <div className=" flex  justify-around gap-4  ">
        {!isLoggedIn && (
          <NavLink to="/Login" className="  bg-slate-400 p-1  rounded-lg ">
            <button
              onClick={() => {
                setLoggedIn(false);
                toast.error("login again");
              }}
              className="  bg-slate-400 p-1  rounded-lg "
            >
              login
            </button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/Signup">
            <button
              onClick={() => {
                setLoggedIn(false);
                toast.error("singup again");
              }}
              className="  bg-slate-400 p-2  rounded-lg "
            >
              Signup
            </button>
          </NavLink>
        )}
        {/* // when the condtions is true */}
        {isLoggedIn && (
          <NavLink to="/Dashboard">
            <button className="  bg-slate-400 p-1  rounded-lg ">
              Dashboard
            </button>
          </NavLink>
        )}
        {/* //when the conditions is true */}
        {isLoggedIn && (
          <NavLink to="/">
            <button
              onClick={() => {
                setLoggedIn(false);
                toast.success("Logged out");
              }}
              className="  bg-slate-400 p-1  rounded-lg "
            >
              logout
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default ButtonLogic;
