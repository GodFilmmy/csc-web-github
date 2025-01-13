import "./js_intro.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";

function Js_intro(){
    const [result,setResult] = useState("");

    return(
        <main>
        <h1 className="topic">Javascript Introduction</h1>
        <hr></hr>
        <br></br>
        <p><b>Javascript</b> is the programming language for the Website</p>
        <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li"><b>Prototpye-based language</b> which means that it uses prototypes to inherit properties and methods from one object to another. In JavaScript, objects can be linked to other objects</li>
                <li className="explain-li">It can also use in server site for example Node.js which use of Backend</li>
            </ul>
        </div>
        <div className="js_jungbox">
            <img className="js_jungintropic" src="https://i.pinimg.com/736x/df/b5/ae/dfb5aea2c3003747cc149bd33031433e.jpg"/>
        </div>
        </main>
    );
}   
export default Js_intro;