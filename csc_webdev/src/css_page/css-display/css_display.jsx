import "./css_display.css";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeExample = [
    {
      id: 1,
      title: "CSS exmaple",
      code: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
                    body {
                        background-color: blue;
                    }

                    h1 {
                        color: white;
                        text-align:center;
                    }

                    p {
                        color: white;
                        font-family:verdana;
                        font-size:20px;
                        font-style:italic;
                    } 
        </style>

      </head>

      <body>
            <h1>Hello</h1>
            <p>bbbbbb</p>
      </body>

      </html>
      
      `,
    },
  ];

function Css_display(){
    const codeCssintroEx1 = codeExample[0];
    return (
        <main>
            <h1 className="topic">Display</h1>
            <hr></hr>
            
            <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">It controls the flow and layout of elements.</li>
                <li className="explain-li">It determines whether an element acts as a block, inline, flex container, grid container, or other display types</li>
              
           </ul>
        </div>  
        


         <hr></hr>
         <br></br>
         <h3 className="be-af">-Please decrease the window size to see how it works-</h3>
         <br></br>
         <h2>Block</h2>
         <br></br>
         <p>It starts on a new line and takes up the full width available by default.</p>
        <br></br>
         <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`display: block;`}
              </SyntaxHighlighter>
              <br></br>      
          <div className="display-box-ex">
            HAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <div className="block-ex">
              Blockkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            </div>
            HAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <h2>inline</h2>
          <div className="display-sitcker">
            <img className="display-sitcker1" src="https://i.pinimg.com/736x/e9/d5/da/e9d5da217d71d69d209ea94e1ce121df.jpg"/>
          </div>
          <br></br>
          <p>It starts on a new line and takes up the full width available by default.</p>
          <br></br>
          <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`display: inline;`}
              </SyntaxHighlighter>
              
              <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">Displayed inline elements</li>
                <li className="explain-li">Does not start the new line and only takes up as much as necessary</li>
              
           </ul>
        </div>  

        <div className="display-box-ex">
            HAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <div className="inline-ex">
              <b>inline</b>
            </div>
            HAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <h2>inline-block</h2>
          <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">Combine <b>block</b> and <b>inline</b></li>
                <li className="explain-li">It behaves like an inline element but allows setting width and height like a block element.</li>
              
           </ul>
        </div>

        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`display: inline-block;`}
              </SyntaxHighlighter>
<br></br>
        <div className="display-box-ex">
            HAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <div className="inline-block-ex">
              <b>inline</b>
            </div>
            HAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
        </main>
    )
}
export default Css_display;