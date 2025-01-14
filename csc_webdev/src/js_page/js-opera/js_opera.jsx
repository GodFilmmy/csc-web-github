import "./js_opera.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";

function Js_opera(){
    const [result,setResult] = useState("");

    return(
        <main>
        <h1 className="topic">Operators</h1>
        <hr></hr>
        <br></br>
        <p>I'm to lazy ahhh =_= </p>
        <div className="oper_img-box">
            <img className="oper-sun" src="https://i.pinimg.com/736x/70/74/d6/7074d67458853a21d4fff98635917cfc.jpg"/>
        </div>
        <p>Bye.</p>
        
        </main>
    );
}   
export default Js_opera;