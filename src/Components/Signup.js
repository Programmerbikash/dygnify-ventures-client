import React from "react";
import { toast } from "react-hot-toast";
import { RiAdminFill, RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Signup = () => {
  const validation = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (name && email && password) {
      alert("SignUp Successfully");
      toast.success("SignUp Successfully");
      return false;
    } else {
      alert("SignUp Failed");
      toast.success("SignUp Failed");
    }
  };

  return (
    <div>
      <div className="w-1/2 mx-auto bg-emerald-200 p-5 mt-14">
        <h1 className="text-4xl text-center font-bold">Sign Up</h1>
        <form action="">
          <RiAdminFill className="inline text-xl mr-2 mb-2" />
          <label className="font-semibold text-2xl">Enter Your Name</label>
          <br />
          <input
            type="text"
            className="border-solid border-2 border-slate-600 w-full p-2 mb-2 rounded-lg"
            name="name"
            id="name"
            placeholder="Write your name"
            required
          />
          <br />
          <AiOutlineMail className="inline text-xl mr-2 mb-2" />
          <label className="font-semibold text-2xl">Enter Your Email</label>
          <br />
          <input
            type="email"
            className="border-solid border-2 border-slate-600 w-full p-2 mb-2 rounded-lg"
            name="email"
            id="email"
            placeholder="Write your email"
            required
          />
          <br />
          <RiLockPasswordFill className="inline text-xl mr-2 mb-2" />
          <label className="font-semibold text-2xl">Enter Your Password</label>
          <br />
          <input
            type="password"
            className="border-solid border-2 border-slate-600 w-full p-2 mb-2 rounded-lg"
            name="password"
            id="password"
            placeholder="Write your password"
            required
          />
          <br />
          <br />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 font-bold btn"
            onClick={validation}
          >
            Sign Up
                  </button>
                  <br />
          <br />
          <Link to='/signIn'> Have an account? Please<button
            type="submit"
            className="w-20 text-blue-600 p-2 font-bold link"
          >
            Login
          </button></Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
