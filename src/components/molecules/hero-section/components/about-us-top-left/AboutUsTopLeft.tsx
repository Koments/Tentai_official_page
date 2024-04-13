import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {AboutUsLeftTopContainerModule, ArrowBackContainer, ArrowBackText} from "./AboutUsLeftTopContainer.module";
import {AboutTopLeftProps} from "../../../../../store/state/lang/type";

export const AboutUsTopLeft = ({arrowBackText, titleFirst, titleSecond}: AboutTopLeftProps) => {
    return (
        <AboutUsLeftTopContainerModule>
            <ArrowBackContainer>
                <ArrowBackIosIcon/>
                <ArrowBackText>{arrowBackText}</ArrowBackText>
            </ArrowBackContainer>
            <div>
                <h1>{titleFirst}</h1>
                <h1 style={{
                    background: 'linear-gradient(147.26deg, #FF6600 25%, #D128A1 76%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>{titleSecond}</h1>
            </div>
        </AboutUsLeftTopContainerModule>
    );
};