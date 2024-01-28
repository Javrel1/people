import React from "react";
import style from './style.module.css';
import Header from "../Header/Header";
import Figures from "../Figures/Figures";
import Info from "../Info/Info";
import Search from "../Search/Search";
import Humans from "../Humans/Humans";
import Navigation from "../Navigation/Navigation";
import Also from "../Also/Also";
import {AnimatePresence, motion} from "framer-motion";

function Main(){
    return(
        <div className={"main"}>
            <Header/>
            <Figures/>
            <Info/>
            <Search/>
            <Humans/>
            <div className={style.two}>
                <Navigation/>
                <Also/>
            </div>
        </div>
    )
}
export default Main;