import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "./assets/logo.png";
import football_player from "./assets/football_player.jpg"

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex h-screen w-screen bg-black text-white">
      {/* Left Section with Image */}
      <div className="hidden md:flex w-1/2 relative items-center justify-center">
        <img
          src={football_player}
          alt="Football player"
          className="h-full w-full object-cover"
        />
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center max-w-md">
            <h2 className="text-xl font-bold mb-2">
              One platform for all things football
            </h2>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet consectetur. Eget suscipit nulla dolor nunc mauris lacus non id viverra.
            </p>
          </div>
      </div>

      {/* Right Section with Form */}
      <div className="flex w-full md:w-1/2 bg-gradient-to-b from-neutral-900 to-black p-10 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <img
          src={logo}
          alt="logo"
          className="h-16 w-auto object-contain"
        />
          <h1 className="text-2xl font-bold mb-2">HEY, WELCOME BACK!</h1>
          <p className="text-gray-400 mb-6">
            New here? <span className="text-lime-400 cursor-pointer">Sign up</span> for free.
          </p>

          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-black border border-gray-600 mb-4 focus:outline-none focus:border-lime-400"
          />

          <button className="w-full bg-lime-400 text-black font-bold py-3 rounded-md mb-4">
            SIGN IN
          </button>
{/* 
          <button className="w-full mb-4 px-8 py-3 border-2 border-lime-400 text-lime-400 font-extrabold tracking-wide text-center">
            SIGN IN
          </button> */}

          <p className="text-gray-400 text-sm mb-6 cursor-pointer">Forgot password?</p>

          <div className="flex items-center mb-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-2 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center border border-gray-600 rounded-md py-3 hover:bg-gray-800">
              <FaGoogle className="mr-2" /> Continue with Google
            </button>
            <button className="w-full flex items-center justify-center border border-gray-600 rounded-md py-3 hover:bg-gray-800">
              <FaTwitter className="mr-2" /> Continue with Twitter
            </button>
            <button className="w-full flex items-center justify-center border border-gray-600 rounded-md py-3 hover:bg-gray-800">
              <FaFacebookF className="mr-2" /> Continue with Facebook
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
