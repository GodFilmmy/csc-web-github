import "./Next-btn.css"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate ,useLocation } from "react-router-dom";
function NextBtn() {
    const navigate = useNavigate();
    const location = useLocation();
    const routes = ["/","/html","/html/Ad"];
    const currentIndex = routes.indexOf(location.pathname);
    const goToNextPage = () =>{
        if(currentIndex < routes.length-1){
            navigate(routes[currentIndex+1]);
            window.scrollTo({top:0});
        }
    };
    const gotoPreviousPage = () =>{
        if(currentIndex>0){
            navigate(routes[currentIndex-1]);
            window.scrollTo({top:0});
        }
    };
    return (
        <div className="nextBtn1">
            {currentIndex>0 &&(
                <button 
                className="btn-previous"
                onClick={gotoPreviousPage}
                
            >
                <IoIosArrowBack /> Previous
            </button>
            )}
            
            <button 
                className="btn-next "
                onClick={goToNextPage}
                disabled={currentIndex===routes.length-1}
            >
                Next <IoIosArrowForward />
            </button>
        </div>
        
    );
}

export default NextBtn;
