import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
  return (
    <div className="loader-container h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <motion.div
        className="neumorphic-loader bg-white p-6 rounded-full shadow-neumorphic flex items-center justify-center"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'linear',
        }}
      >
        <motion.div
          className="inner-circle bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'easeInOut',
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default Loader;
