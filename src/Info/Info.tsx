import React from 'react';
import style from './style.module.css';
import {AnimatePresence, motion} from "framer-motion";

function Info(){
    return(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}>
                <div className={style.container}>
                    <div className={style.info}>
                        <div className={style.pg}>People Get</div>
                        <div className={style.gs}>Good Smartly</div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
export default Info;