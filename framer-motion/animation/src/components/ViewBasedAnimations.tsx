import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div>
      <motion.div className="h-[150vh]"></motion.div>
      <motion.div 
        className="animation-container p-20"
        initial={{ scale: 1 }}
        whileInView={{ scale: 2 }}
        transition={{ duration: 0.5, ease: 'backInOut' }}
        ></motion.div>
      <motion.div
        ref={ref}
        className={`h-[100vh] border-2 border-dark-green-grayish ${isInView ? 'bg-dark-green-grayish' : 'bg-white'}`}
        transition={{ duration: 1 }}
        ></motion.div>
    </div>
  );
}