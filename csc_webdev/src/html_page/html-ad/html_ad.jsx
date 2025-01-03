import "./html_ad.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";




const codeExample_Ad =[
    {
        id:1,
        title:"href",
        code: `<a href="#">Click me</a>`
    }
]

function HtmlAd(){
    const ex1_Ad = codeExample_Ad[0];
    const underlineStyle = {
       color: 'blue'
    }
    return(
    <main>

        <h1 className="topic">HTML ATTRIBUTES</h1>
        <hr></hr>
        <br></br>
        <p><b>HTML attributes</b> provide additional information about HTML elements.</p>

        
         
        
        
        <div className="explain-list">
       
          <ul className="explain-ul">
          <li className="explain-li">All HTML elements can have attributes</li>
          <li className="explain-li">Attributes provide <b>additional information</b> about elements</li>
          <li className="explain-li">Attributes are always specified in the start tag</li>
          <li className="explain-li">Attributes usually come in <b>name/value pairs</b> like: name="value"</li>
          
          
          </ul>
        </div>
        
        
       <br></br>
       <hr></hr>
       <br></br>

    <div className="href_sec">
        <h2>The href Attribute</h2>
       <br></br>
       <div className="explain-with-Smallcode">
        The <SyntaxHighlighter className="code-explain-p">{`<a></a>`}</SyntaxHighlighter>  tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:
       </div>
        <br></br>
       <div className="code_container1">
          <div className="code_Section1">
              <SyntaxHighlighter language="HTML" style={nord} className="codeDemo1">
                {ex1_Ad.code}
              </SyntaxHighlighter>
            </div>
        </div>
    </div>
    
    <br></br>
    <hr></hr>
    <br></br>

    <div className="src_sec">
        <h2>The src Attribute</h2>
       <br></br>
       <div className="explain-with-Smallcode">
        The <SyntaxHighlighter className="code-explain-p">{`<img>`}</SyntaxHighlighter> used to embed the image where
        <SyntaxHighlighter className="code-explain-p">{`src`}</SyntaxHighlighter> tells us the path to the image to display
       </div>
        <br></br>
       <div className="code_container1">
          <div className="code_Section1">
              <SyntaxHighlighter language="HTML" style={nord} className="codeDemo1">
                {`<img src="jungwon.png">`}
              </SyntaxHighlighter>
            </div>
        </div>
        <br></br>
        
        
    </div>   

        </main>
    );
}
export default HtmlAd;