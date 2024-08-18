import { motion, useAnimationControls } from 'framer-motion';

export default function Animationcontrols() {
  const controls = useAnimationControls();

  function handleOnClick() {
    controls.start("flip");
  }

  return (
    <div className='animation-container'>
      <motion.div
        className='border-2 border-dark-green-grayish w-full p-20 rounded-lg'
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: '360deg',
          },
        }}
        initial="initial"
        animate={controls}
        ></motion.div>
      <motion.button
        onClick={handleOnClick}
        >Flip it!</motion.button>
    </div>
  );
}