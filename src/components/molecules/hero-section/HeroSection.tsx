import {HeroSectionContainer} from "./HeroSection.module";
import {AboutUsTopLeft} from "./components/about-us-top-left/AboutUsTopLeft";
import {AboutUsTopRight} from "./components/about-us-top-right/AboutUsTopRight";
import {AboutUsBottomRight} from "./components/about-us-bottom-right/AboutUsBottomRight";
import {AboutUsProps} from "../../../store/state/lang/type";
import {SpotData} from "../../atoms/picture-icon/data";
import {Spot} from "../../atoms/picture-icon/Spot";

export const HeroSection = ({aboutTopLeft, aboutTopRight, aboutBottomRight}: AboutUsProps) => {
    return (
        <HeroSectionContainer>
            {SpotData.map((el, index) => <Spot key={index} left={el.left} top={el.top} transform={el.transform}/>)}
            <AboutUsTopLeft arrowBackText={aboutTopLeft.arrowBackText} titleFirst={aboutTopLeft.titleFirst} titleSecond={aboutTopLeft.titleSecond}/>
            <AboutUsTopRight persons={aboutTopRight.persons} titleFirst={aboutTopRight.titleFirst}/>
            <div></div>
            <AboutUsBottomRight text={aboutBottomRight.text} buttonTitle={aboutBottomRight.buttonTitle} />
        </HeroSectionContainer>
    );
};