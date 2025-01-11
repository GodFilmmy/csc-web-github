import "./css_fournum.css";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeExample = [
    {
      id: 1,
      title: "Padding properties exmaple",
      code: `
        padding: 10px 100px 70px 30px;
        margin: 10px 60px 50px 20px;
      `,
    },
    {
      id: 2,
      title: "Border properties exmaple",
      code: `
        border-radius: 3px 10px 30px 0;
      `,
    },
  ];

function Css_fournum(){
    const codeCssBoxEx1 = codeExample[0];
    const codeCssBoxEx2 = codeExample[1];
    return (
        <main>
            <h1 className="topic">Basic box model</h1>
            <hr></hr>
            <br></br>
            <p>Each box has a content area (e.g., text, an image, etc.) and optional surrounding padding, border, and margin areas; the size of each area is specified by properties defined below. The following diagram shows how these areas relate and the terminology used to refer to pieces of margin, border, and padding:</p>
           <br></br>
           <div className="box-model-con">
            <div className="box-model-pic">
              <img className="box-model-pic1"src="https://www.w3.org/TR/CSS2/images/boxdim.png"/>
            </div>
            </div>   

        <div className="code_container">
        <div className="code_text">{codeCssBoxEx1.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeCssBoxEx1.code}
          </SyntaxHighlighter>
        </div>
      </div>
      <br></br>
      <h3 className="be-af">top-right-bottom-left</h3>
      <h3 className="be-af">CLOCK WISE !!</h3>

      <div className="css-result">
        <div className="css4-re-box">
        <div className="css4-itembox-pad">
          <div className="css4-item-pad">content</div>
        </div>
        </div>
        </div>
        <br></br>

        <div className="code_container">
        <div className="code_text">{codeCssBoxEx2.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeCssBoxEx2.code}
          </SyntaxHighlighter>
        </div>
      </div>
      <h3 className="be-af">top left - top right - bottom right - bottom left</h3>
      <h3 className="be-af">clock wise but start from top left</h3>

      <div className="css-result">
        <div className="css4-re-box">
          
            <div className="border-ex"></div>
         
        </div>
        </div>
        </main>
    )
}
export default Css_fournum;