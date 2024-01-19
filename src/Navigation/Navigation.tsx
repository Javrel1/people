import React from "react";
import style from './style.module.css';
import right from '../resources/right.png';
import left from '../resources/left.png';


function Navigation(){
    return(
        <div className={style.container}>
            <div className={style.showAll}>Show All</div>
            <div className={style.buttons}>
                <div className={style.left}><img src={left}/></div>
                <div className={style.right}><img src={right}/></div>
            </div>
        </div>
    )
}
export default Navigation;