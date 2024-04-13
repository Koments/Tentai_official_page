import {AboutUsBottomRightContainer} from "./AboutUsRightBottomContainer.module";
import {Button} from "../../../../atoms/button/Button";
import {aboutBottomRightProps} from "../../../../../store/state/lang/type";

export const AboutUsBottomRight = ({text, buttonTitle}: aboutBottomRightProps) => {
    return (
        <AboutUsBottomRightContainer>
            <div>{text}</div>
            <Button title={buttonTitle}/>
        </AboutUsBottomRightContainer>
    );
};