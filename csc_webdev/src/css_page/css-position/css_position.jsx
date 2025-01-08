import "./css_position.css";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";


function Css_position(){
    return(
        <main>
            <h1 className="topic">CSS POSITION</h1>
            <hr></hr>
            <br></br>
            <p>The position property specifies the type of positioning method used for an element.</p>
            <br></br>
            <p>There are <b>5</b> types of position</p>
        <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">static</li>
                <li className="explain-li">relative</li>
                <li className="explain-li">fixed</li>
                <li className="explain-li">absolute</li>
                <li className="explain-li">sticky</li>
            </ul>
        </div>
        <p>Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.</p>
       
            
            
            <br></br>
            <div className="staitc-po"><h2>Static position</h2></div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="relative-po"><h2>Relative position</h2></div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="fixed-po"><h2>Fixed position</h2></div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="absolute-po"><h2>Absolute position</h2></div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="sticky-po"><h2>Sticky position</h2></div>

        </main>
    )
}
export default Css_position;