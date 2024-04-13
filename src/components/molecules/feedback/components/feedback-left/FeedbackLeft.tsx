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
import {LeftSideProps} from "../../../../../store/state/lang/type";

export const FeedbackLeft = ({title, subTitle}:LeftSideProps) => {
    return (
        <FeedbackContainerLeftContainer>
            <h2 >{title}</h2>
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