import React from 'react';
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const validation = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if (email && password) {
          alert("Signin Successfully");
          toast.success("SignIn Successfully");
          return false;
        } else {
          alert("Signin Failed");
          toast.success("SignIn Failed");
        }
    };
    
    return (
        <div>
            <div className="w-1/2 mx-auto bg-emerald-200 p-5 mt-14">
        <h1 className="text-4xl text-center font-bold">Sign Up</h1>
        <form action="">
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
            Login
                    </button>
                    <br />
          <br />
                    <Link to='/'> Not a member? Please<button
            type="submit"
            className="w-20 text-blue-600 p-2 font-bold link"
          >
            Sign Up
          </button></Link>
        </form>
      </div>
        </div>
    );
};

export default SignIn;