import Home1 from "../HOME/home1";
import Home2 from "../HOME2/home2";
import Home3 from "../HOME3/home3";
import NavBar from "../NAVBAR/navbar_math";
import DivSlider from "./DIV_SLIDER/DicSlide";
import LienHe from "./LienHe";


export default function LienHeContainer() {
    return (
        <div>
            <NavBar />
            <Home1 />
            <DivSlider />
            <Home2 />
            <Home3 />
            <LienHe />
        </div>
    );
}