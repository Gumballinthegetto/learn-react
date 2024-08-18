import { motion, AnimatePresence } from "framer-motion";

export default function Practice() {
  const list = {
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { 
      opacity: 1, 
      x: 0 
    },
    hidden: { 
      opacity: 0, 
      x: -100 
    },
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="border-2 border-dark-green-grayish p-8 bg-white rounded-lg grid grid-cols-3 gap-10"
        variants={list}
        initial="hidden"
        animate="visible">
        <motion.div className="p-14 border-2 border-dark-green-grayish rounded-lg" variants={item}></motion.div>
        <motion.div className="p-14 border-2 border-dark-green-grayish rounded-lg" variants={item}></motion.div>
        <motion.div className="p-14 border-2 border-dark-green-grayish rounded-lg" variants={item}></motion.div>
        <motion.div className="p-14 border-2 border-dark-green-grayish rounded-lg" variants={item}></motion.div>
        <motion.div className="p-14 border-2 border-dark-green-grayish rounded-lg" variants={item}></motion.div>
        <motion.div className="p-14 border-2 border-dark-green-grayish rounded-lg" variants={item}></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}