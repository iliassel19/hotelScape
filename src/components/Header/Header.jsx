import React from "react";
import HeaderBookingForm from "./HeaderBookingForm";
import { motion } from "framer-motion";
const Header = () => {
  const h1 = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
    },
  };
  const span = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <header className="relative pl-20 py-24 col-start-1 col-end-9 row-start-2 row-end-3">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={h1}
        className="font-Serif w-2/3 text-7xl text-green-very-dark leading-[1.1]"
      >
        <motion.span
          variants={span}
          transition={{
            delay: 0.2,
          }}
          className="text-green-dark font-HandWritten text-9xl leading-[0]"
        >
          Memorable
        </motion.span>
        <br />
        <motion.span
          variants={span}
          transition={{
            delay: 0.4,
          }}
        >
          {" "}
          Hotels for moments{" "}
        </motion.span>
        <motion.span
          variants={span}
          transition={{
            delay: 0.6,
          }}
          className="text-green-dark font-HandWritten text-9xl leading-[0]"
        >
          Rich
        </motion.span>
        <br />{" "}
        <motion.span
          variants={span}
          transition={{
            delay: 0.8,
          }}
        >
          in emotions
        </motion.span>
      </motion.h1>
      <p className="text-xl font-Serif text-[#585855] my-12">
        Book now and get the best prices
      </p>
      <HeaderBookingForm />
    </header>
  );
};

export default Header;
