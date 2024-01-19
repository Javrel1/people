import React from "react";
import style from './style.module.css';

function Figures(){
    return(
        <div className={style.container}>
            <div className={style.figures}>
                <div className={style.first}></div>
                <div className={style.second}></div>
                <div className={style.third}></div>
            </div>
        </div>
    )
}
export default Figures;