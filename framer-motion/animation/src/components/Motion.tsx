import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Motion() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div className="animation-container">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div 
            initial={{
              rotate: '0deg',
              scale: 1,
            }}
            animate={{
              rotate: '180deg',
              scale: 1.1,
              y: [0, 150, -150, -150, 0]
            }}
            exit={{
              rotate: '0deg',
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="flex border-2 border-cool-gray bg-white p-20 border-dark-olive-green rounded-lg">
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button 
        layout
        type="button" 
        onClick={() => setIsVisible(prevState => !prevState)}>
        Show/Hide
      </motion.button>
    </div>
  )
}