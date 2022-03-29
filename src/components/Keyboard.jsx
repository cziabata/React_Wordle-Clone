import React from "react";
import Key from "./Key.jsx";

const Keyboard = () => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    return(
        <div className="keyboard">
            <div className="line">
                {keys1.map(key=><Key keyVal={key} key={key}/>)}
            </div>
            <div className="line">
                {keys2.map(key=><Key keyVal={key} key={key}/>)}
            </div>
            <div className="line">
                <Key keyVal={"ENTER"} bigKey/>
                {keys3.map(key=><Key keyVal={key} key={key}/>)}
                <Key keyVal={"DELETE"} bigKey/>
            </div>
        </div>
    )
}

export default Keyboard;