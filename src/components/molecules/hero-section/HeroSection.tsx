import {HeroSectionContainer} from "./HeroSection.module";
import {AboutUsTopLeft} from "./components/about-us-top-left/AboutUsTopLeft";
import {AboutUsTopRight} from "./components/about-us-top-right/AboutUsTopRight";
import {AboutUsBottomRight} from "./components/about-us-bottom-right/AboutUsBottomRight";
import {AboutUsProps} from "./types";

export const HeroSection = (props: AboutUsProps) => {
    return (
        <HeroSectionContainer>
            <AboutUsTopLeft arrowBackText={props.aboutUs.aboutTopLeft.arrowBackText} titleFirst={props.aboutUs.aboutTopLeft.titleFirst} titleSecond={props.aboutUs.aboutTopLeft.titleSecond}/>
            <AboutUsTopRight persons={props.aboutUs.aboutTopRight.persons} titleFirst={props.aboutUs.aboutTopRight.titleFirst}/>
            <div></div>
            <AboutUsBottomRight text={props.aboutUs.aboutBottomRight.text} buttonTitle={props.aboutUs.aboutBottomRight.buttonTitle} />
        </HeroSectionContainer>
    );
};