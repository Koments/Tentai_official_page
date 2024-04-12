import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import {
    Email,
    FeedbackContainerLeftContainer,
    MailContainer,
    Paragraph,
    Phone,
    PhoneContainer,
} from "./FeedbackLeft.module";
import {H2} from "../../../../atoms/h2/H2";
import { LeftSideProps} from "./types";

export const FeedbackLeft = ({title, subTitle}:LeftSideProps) => {
    return (
        <FeedbackContainerLeftContainer>
            <H2 title={title}/>
            <Paragraph>{subTitle}</Paragraph>
            <div>
                <MailContainer>
                    <MailOutlineIcon/>
                    <Email>info@tentai.pro</Email>
                </MailContainer>
                <PhoneContainer>
                    <PhoneOutlinedIcon/>
                    <Phone>+66123456789</Phone>
                </PhoneContainer>
            </div>

        </FeedbackContainerLeftContainer>
    );
};