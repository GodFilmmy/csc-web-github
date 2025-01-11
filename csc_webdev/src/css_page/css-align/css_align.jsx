import "./css_align.css";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeExample = [
    {
      id: 1,
      title: "Align-self -> CSS",
      code: `
              .container {
                    display: flex;
                    justify-content: center;
                    align-items:flex-start;
                 }

              .item-1 {

                 }

              .item-2 {
                    align-self: flex-end;
                 }   
     `,
    },
    {
      id: 2,
      title: "Align-self -> HTML",
      code: `
            <div class="container">
                <div class="item-1"></div>
                <div class="item-2"></div>
            </div>
     `,
    },
  ];

function Css_align(){
    const codeCssalEx1_css = codeExample[0];
    const codeCssalEx1_html = codeExample[1];
    return (
        <main>
            <h1 className="topic">Align items</h1>
            <hr></hr>
            <br></br>
            <p>Flex box provide several properties to control alignment and spacing with <b>align-item</b> and <b>justify-content</b> for centering the elements</p>
            <ul className="explain-ul">
                    <li className="explain-li"><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`align-items`}</SyntaxHighlighter> is for the <b>cross axis or (y) axis </b></li>
                    <li className="explain-li"><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`justify-content`}</SyntaxHighlighter> is for the <b> main axis or (x) axis </b></li>
              </ul>
              <div className="align-pic1-box">
                <img className="align-pic1" src="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container/align1.png"/>
              </div>
        <br></br>
       
      <h3 className="be-af">Before</h3>
      <div className="css-result">
        <div className="cssali-re">
        <div className="re-ali-box-be">
          <div className="re-ali-item-be">
            <img width="200px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
        </div>
        </div>
      </div>

      <h3 className="be-af">After</h3>
      <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`justify-content: center;`}
              </SyntaxHighlighter>

      <div className="css-result">
        <div className="cssali-re">
        <div className="re-ali-box-af1">
          <div className="re-ali-item-af1">
            <img width="200px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
        </div>
        </div>
      </div>

      <h3 className="be-af">After</h3>
      <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`align-items: center;`}
              </SyntaxHighlighter>

      <div className="css-result">
        <div className="cssali-re">
        <div className="re-ali-box-af2">
          <div className="re-ali-item-af2">
            <img width="200px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
        </div>
        </div>
      </div>
      <br></br>

      <h3>Others properties for controlling alignment in flexbox</h3>
      <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li"><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`align-self`}</SyntaxHighlighter> control the alignment of an individual flex item on the cross axis,  It <b>overrides</b> the align-items property for that specific item.</li>
                <li className="explain-li"><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`align-content`}</SyntaxHighlighter> control the space between flex line and cross axis , similar with justify-content but in <b>(y) axis</b> </li>
                
          
            </ul>
        </div>

        <div className="css-result">
        <div className="cssali-re">
        <div className="re-ali-box-self-af1">
          <div className="re-ali-item-self-af1">
            <img width="100px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
          <div className="re-ali-item-self-af2">
            <img width="100px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
        </div>
        </div>
      </div>    

      <div className="code_container">
        <div className="code_text">{codeCssalEx1_css.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeCssalEx1_css.code}
          </SyntaxHighlighter>
        </div>
      </div>
      
      <div className="code_container">
        <div className="code_text">{codeCssalEx1_html.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeCssalEx1_html.code}
          </SyntaxHighlighter>
        </div>
      </div>



      <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li"><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`space-between`}</SyntaxHighlighter> Items are evely distributed acros the container , <b>no space at the beginning and end of the container</b></li>
                <li className="explain-li"><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`space-around `}</SyntaxHighlighter> Items are also evenly distributed but <b>each item get equal space</b> on both sides, compared to the space at the edges</li>
                <li className="explain-li"><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`space-evenly `}</SyntaxHighlighter> Distribute every item <b>euqal space and also the edges of the container</b></li>
                
          
            </ul>
        </div>

        <h3 className="be-af">space-between</h3>
        <div className="css-result">
        <div className="cssali-re">
        <div className="re-ali-box-sb-af1">
          <div className="re-ali-item-sb-af1">
            <img width="100px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
          <div className="re-ali-item-sb-af2">
            <img width="100px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
        </div>
        </div>
      </div>  


        <h3 className="be-af">space-around</h3>
        <div className="css-result">
        <div className="cssali-re">
        <div className="re-ali-box-sa-af1">
          <div className="re-ali-item-sa-af1">
            <img width="100px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
          <div className="re-ali-item-sa-af2">
            <img width="100px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
        </div>
        </div>
      </div>


        <h3 className="be-af">space-evenly</h3>
        <div className="css-result">
        <div className="cssali-re">
        <div className="re-ali-box-se-af1">
          <div className="re-ali-item-se-af1">
            <img width="100px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
          <div className="re-ali-item-se-af2">
            <img width="100px" src="https://media.tenor.com/1KSuQJCaddIAAAAM/monkeycat.gif"/>
          </div>
        </div>
        </div>
      </div>
        </main>
    )
}
export default Css_align;