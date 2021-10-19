import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import { newspaper, flip, dropIn, badSuspension } from '../../animations';

const Modal = ({ handleClose, text, animation }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        // prevent clicks on modal from bubbling to backdrop
        onClick={(e) => e.stopPropagation()}
        className='modal orange-gradient'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
