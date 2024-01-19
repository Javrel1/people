import React from 'react';
import style from './style.module.css';

function Info(){
    return(
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.pg}>People Get</div>
                <div className={style.gs}>Good Smartly</div>
            </div>
        </div>
    )
}
export default Info;