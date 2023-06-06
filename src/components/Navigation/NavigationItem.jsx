import React from "react";
import { motion } from "framer-motion";
const NavigationItem = (props) => {
  const variants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    showed: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.li
      className="text-base font-Sans-serif capitalize relative text-green-very-dark hover:text-green-dark after:w-0 after:h-[1px] after:left-0 after:bottom-0 after:bg-green-dark after:origin-left after:absolute after:transition-[width] hover:after:w-full"
      variants={variants}
      initial="hidden"
      animate="showed"
      transition={{
        delay: props.i * 0.2,
      }}
    >
      <a href="/">{props.text}</a>
    </motion.li>
  );
};

export default NavigationItem;
