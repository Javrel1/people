import React from "react";
import style from './style.module.css';
import right from '../resources/right-arrow.png';

function Also(){
    return(
        <div className={style.container}>
            <div className={style.recent}>
                Recent
            </div>
            <div className={style.xz}>
                <a className={style.popular}>Popular</a>
                <a className={style.items}>Items</a>
                <div className={style.arrow}>
                    <div className={style.xzImg}>
                        <img src={right}/>
                    </div>
                </div>
            </div>
            <div className={style.xz2}>
                <a className={style.popular}>Special</a>
                <a className={style.items}>Offers For You</a>
                <div className={style.arrow}>
                    <div className={style.xzImg}>
                        <img src={right}/>
                    </div>
                </div>
            </div>
            <div className={style.xz3}>
                <a className={style.popular}>Show All</a>
                <div className={style.arrow}>
                    <div className={style.xzImg}>
                        <img src={right}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Also