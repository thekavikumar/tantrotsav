import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const TopContent = () => {
  return (
    <div className="hero " id="hero">
      <div className="intro z-50 flex justify-between items-center mt-[-70px] h-full w-full p-[140px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -400 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex-1"
        >
          <h1 className="title-text text-[#0dff00] tracking-[3px] text-[60px] p-3 font-bold">
            Tantrotsav'23
          </h1>
          <h1 className="hero-head text-white text-[20px] p-3">
            A National Techfest organizsed by Amrita Viswha Vidyapeethma Chennai
          </h1>
          <p className="hero-p p-3 text-[16px] mt-[-10px] text-white tracking-wide">
            Welcome to Tantrotsav'23, the National Techfest of Amrita Vishwa
            Vidyapeetham, Chennai. We are glad to announce that Tantrotsav'23
            will be held from 26th to 27th March 2023. We invite you to be a
            part of this event and make it a grand success.
          </p>
          <Link smooth to="#about">
            <button className="border-2 border-[#0dff00] text-white transition duration-500 hover:bg-[#0dff00] text-[16px] hover:text-black hover:font-bold p-2 m-3 rounded-[5px] w-[130px]">
              Explore
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -400 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="svg-sec"
        >
          <img
            className="img-h"
            src="https://tri-nit.com/landing_page_vector.svg"
            alt="pic"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TopContent;
