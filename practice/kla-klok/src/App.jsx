import Game from "./Game"
import { motion } from "framer-motion"

function App() {

  return (
    <motion.div 
      className="flex items-center justify-center min-h-screen"
      transition={{ duration: 0.6, ease: 'easeInOut' }}>
      <Game />
    </motion.div>
  )
}

export default App
