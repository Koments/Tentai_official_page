import {
    FacebookOutlinedIconContainer,
    FooterCopywritingContainer,
    IconsContainer, InstagramIconContainer,
    LimeContainer, TelegramIconContainer,
    Title,
    YouTubeIconContainer
} from "./FooterCopywriting.module";
import {LimeIcon} from "./pics/LimeIcon";
import {FacebookIcon} from "./pics/FacebookIcon";
import {InstagramIcon} from "./pics/InstagramIcon";
import {TelegramIcon} from "./pics/TelegramIcon";
import {YouTubeIcon} from "./pics/YouTubeIcon";

export const FooterCopywriting = () => {
    return (
        <FooterCopywritingContainer>
            <Title>© 2024 Tentai – Find it. Choose. Make life more convenient.</Title>
            <IconsContainer>
                <InstagramIconContainer><InstagramIcon/></InstagramIconContainer>
                <FacebookOutlinedIconContainer><FacebookIcon/></FacebookOutlinedIconContainer>
                <TelegramIconContainer><TelegramIcon/></TelegramIconContainer>
                <YouTubeIconContainer><YouTubeIcon/></YouTubeIconContainer>
                <LimeContainer><LimeIcon/></LimeContainer>
            </IconsContainer>
        </FooterCopywritingContainer>
    );
};