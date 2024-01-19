import React from "react";
import style from './style.module.css';


function Humans(){
    return(
        <div className={style.container}>
            <div className={style.side}>
                <div className={style.all}>⇒ All</div>
                <div className={style.man}>Man</div>
                <div className={style.woman}>Woman</div>
                <div className={style.kids}>Kids</div>
            </div>
        </div>
    )
}
export default Humans;