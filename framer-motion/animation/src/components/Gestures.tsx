import { motion, MotionConfig } from "framer-motion";

export default function Gestures() {
  return (
    <div className="animation-container">
      <MotionConfig
        transition={{ duration: 0.125, ease: 'easeInOut' }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}>
          Click me!
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}>
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}