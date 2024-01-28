import React from 'react';
import Main from "./Main/Main";
import {AnimatePresence, motion} from "framer-motion";

function App() {
  return (
    <div className="App">
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                <Main/>
            </motion.div>
        </AnimatePresence>
    </div>
  );
}

export default App;
