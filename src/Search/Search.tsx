import React from "react";
import style from './style.module.css';
import microphone from '../resources/microphone.png';
import options from '../resources/options.png';

function Search(){
    return(
        <div className={style.container}>
            <div className={style.search}>
                <a>Search</a>
                <div className={style.xz}>
                    <img src={microphone}/>
                    <img src={options}/>
                </div>
            </div>
        </div>
    )
}
export default Search;