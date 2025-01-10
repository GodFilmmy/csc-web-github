import "./css_fournum.css";
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

function Css_fournum(){
    const codeCssintroEx1 = codeExample[0];
    return (
        <main>
            <h1 className="topic">CSS INTRODUCTION ddd</h1>
            <hr></hr>
            <br></br>
            <p><b>CSS stands for Cascading Style Sheets</b> ,it use to describes how HTML elements are to be displayed on screen, paper, or in other media</p>


        <div className="code_container">
        <div className="code_text">{codeCssintroEx1.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeCssintroEx1.code}
          </SyntaxHighlighter>
        </div>
      </div>
      <br></br>
      
      <div className="css-result">
        <div className="cssre-topic">
            RESULT
        </div>
        <div className="cssintrore-re">
        <h1>Hello</h1>
        <p>bbbbbb</p>
        </div>
      </div>
        </main>
    )
}
export default Css_fournum;