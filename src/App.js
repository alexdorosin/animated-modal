import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './components/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='save-button'
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>
      // Even if it animates in perfectly, it dissapears // instead of animating
      out, because the modal is // removed from DOM before animation finished,
      and // this is why we need to add AnimatePresence to // keep it visible
      temporarily
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
