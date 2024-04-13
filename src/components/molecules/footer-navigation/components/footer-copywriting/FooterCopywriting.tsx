import {FooterCopywritingContainer, Title} from "./FooterCopywriting.module";
import {SocialLinks} from "../../../../atoms/social-links/SocialLinks";

export const FooterCopywriting = () => {
    return (
        <FooterCopywritingContainer>
            <Title>© 2024 Tentai – Find it. Choose. Make life more convenient.</Title>
            <SocialLinks />
        </FooterCopywritingContainer>
    );
};