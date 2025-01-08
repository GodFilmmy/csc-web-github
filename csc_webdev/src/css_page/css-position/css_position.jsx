import "./css_position.css";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaLongArrowAltRight } from "react-icons/fa";
const codeExample = [
    {
      id: 1,
      title: "relative exmaple",
      code: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
                .car1 img{
                    position: relative;
                    top: 190px;
                }
                .car2 img{
                    position: relative;
                    left: 40px;
                }
        </style>

      </head>

      <body>
            <img src="cat1.png" class="car1"/>
            <img src="cat2.png" class="car2"/>
      </body>

      </html>
      
      `,
    },
  ];


function Css_position(){
    const rela_code = codeExample[0];
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
            <hr></hr>
            <br></br>

            <div className="staitc-po">
                <h2>Static position</h2>
                <br></br>
                <p>Elements are positioned static by default</p>

                <div className="explain-list">
                <ul className="explain-ul">
                    <li className="explain-li">Does not affected by the top, buttom, left, right</li>
                    <li className="explain-li">positioned to the normal flow of page</li>
                </ul>
                </div>

                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`position: static;`}
              </SyntaxHighlighter>
              <br></br>

            <div className="po-ex-con">
                <div className="po-ex-box">
                <img className="cat1-po" src="https://stickershop.line-scdn.net/stickershop/v1/product/23701012/LINEStorePC/main.png?v=1"/>
                <img className="cat1-po" src="https://stickershop.line-scdn.net/stickershop/v1/product/23701012/LINEStorePC/main.png?v=1"/>
                
                </div>
            </div>
             
               
           </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="relative-po">
                <h2>Relative position</h2>
                <div className="explain-list">
                <ul className="explain-ul">
                    <li className="explain-li">Means an elements stays in its normal spot but can me move using <b>top, bottom, left and right</b></li>
                    <li className="explain-li">It moves from its origin point</li>
                </ul>
                </div>
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`position: relative;`}
              </SyntaxHighlighter>
                <br></br>
                <h3 className="be-af">Before</h3>
                <br></br>
                <div className="po-ex-con">
                    <div className="po-ex-box">
                    <img className="cat2-po-be" width="140px" src="https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/images_without_background/ee0a0817-b4f3-4a38-9342-f2ac228e4519.png"/>
                    <img className="cat3-po-be" width="140px" src="https://stickershop.line-scdn.net/stickershop/v1/product/26513215/LINEStorePC/main.png?v=1"/>
                    
                    </div>
                </div>
            <br></br>
                <div className="code_container">
        <div className="code_text">{rela_code.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {rela_code.code}
          </SyntaxHighlighter>
        </div>
      </div>
                <br></br>
                <h3 className="be-af">After</h3>
                <br></br>
              <div className="po-ex-con">
                <div className="po-ex-box">
                <img className="cat2-po" src="https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/images_without_background/ee0a0817-b4f3-4a38-9342-f2ac228e4519.png"/>
                <img className="cat3-po" src="https://stickershop.line-scdn.net/stickershop/v1/product/26513215/LINEStorePC/main.png?v=1"/>
                
                </div>
            </div>


            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="fixed-po"><h2>Fixed position</h2>
            <br></br>
            <div className="explain-list">
                <ul className="explain-ul">
                    <li className="explain-li">An element is positioned with relative to the viewpoint <b>,means it always in the same place even if the page is scrolled</b></li>
                    <li className="explain-li">We can use <b>top, right, bottom and left</b> to locate it as well</li>
                </ul>
            </div>
            <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`position: fixed;`}
              </SyntaxHighlighter>
            <img className="cat4-fix" width="200px" src="https://media4.giphy.com/media/tR1ZZeJXR9RUDvaFVP/200w.gif?cid=6c09b952ziyr9wpnie0n2zwiyn0obpkh2w4nhujcmqf4yd2z&ep=v1_stickers_search&rid=200w.gif&ct=s"/>
            <br></br>
            <p>You can see that there is one cat following you ⇨</p>
            </div>
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