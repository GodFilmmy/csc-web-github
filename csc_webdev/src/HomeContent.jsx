import "./HomeContent.css"
import {useNavigate} from "react-router-dom";
function HomeContent(){
    return(
        <main>
            <h1 className="Homepage-topic">Web Application Development notes</h1>
            <Section
            id="html"
            title="HTML"
            description="HyperText Markup Language, use to describe the structure of a Web page"
            imgSrc="https://d3ftabzjnxfdg6.cloudfront.net/app/uploads/2021/02/18-04-08_5537-VS-copy-web-1024x549.jpg"
            link="/html">
            </Section>
            <Section
            id="css"
            title="CSS"
            description="Cascading Style Sheets, a style sheet language used for specifying the presentation and styling of a document written in a markup language"
            imgSrc="https://i0.wp.com/www.nextsteptv.com/wp-content/uploads/2017/11/Chinchilla-6.jpg?fit=650%2C325"
            link="/css">
            </Section>
            <Section
            id="javascript"
            title="JAVASCRIPT"
            description="Scripting Language, enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."
            imgSrc="https://m.media-amazon.com/images/I/51V+1wd2dFL.jpg"
            link="/js">
            </Section>
        </main>
    )
}
function Section({id,title,description,imgSrc,link}){
    const navigate = useNavigate();
    const windowNavigate = (link) =>{
        window.scrollTo(0,0);
        navigate(link);
    }
    return(
        <section id={id}>
            <div className="sectionFlexBox">
                <div className="sec-flex-left">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button onClick={()=>windowNavigate(link)} >Let's GOOO</button>
                </div>
                <div className="sec-flex-right">
                    <img src={imgSrc} alt={title}/>
                </div>
            </div>
        </section>
    )
}
export default HomeContent;