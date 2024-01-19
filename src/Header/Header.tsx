import React from "react";
import style from './style.module.css';
import logo from '../resources/logo.png';
import buy from '../resources/buy.png';
import menu from '../resources/menu.png';

function Header(){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={logo}/>
                    <a>people</a>
                </div>
                <div className={style.menu}>
                    <div className={style.categories}>
                        <div className={style.main}>HOME</div>
                        <div className={style.main}>PRODUCTS</div>
                        <div className={style.main}>ABOUT</div>
                        <div className={style.main}>SUPPORT</div>
                    </div>
                    <div className={style.twoEl}>
                        <div className={style.buy}><img src={buy}/></div>
                        <div className={style.menuBar}><img src={menu}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;