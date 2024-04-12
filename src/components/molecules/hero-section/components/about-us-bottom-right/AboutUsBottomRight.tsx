import {Button} from "../../../../atoms/button/Button";
import {AboutUsBottomRightContainer} from "./AboutUsRightBottomContainer.module";
import {AboutBottomRight} from "./types";

export const AboutUsBottomRight = ({text, buttonTitle}: AboutBottomRight) => {
    return (
        <AboutUsBottomRightContainer>
            <div>{text}</div>

            <Button title={buttonTitle}/>
        </AboutUsBottomRightContainer>
    );
};