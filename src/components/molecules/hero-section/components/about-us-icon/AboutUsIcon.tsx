import {AboutUsIconProps} from "./types";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import {AboutUsIconContainer, IconContainer, IconImage, PeopleAltContainer} from "./AboutUsIcon.module.css";

export const AboutUsIcon = ({src, alt, id, offset}: AboutUsIconProps) => {
    return (
        <AboutUsIconContainer>
            <IconContainer>
                {src !== 'empty' ?
                    <IconImage style={{right: offset}} src={src} alt={alt}/> :
                    <PeopleAltContainer style={{right: offset}}>
                        <PeopleAltOutlinedIcon/>
                    </PeopleAltContainer>
                }
            </IconContainer>
        </AboutUsIconContainer>
    );
};