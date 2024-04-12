import * as React from 'react';
import {Logo} from "../../../../atoms/logo/Logo";
import {HuaweiIcon} from "../../../../atoms/picture-icon/HuaweiIcon";
import {
    AppleIconContainer,
    FooterAppLinksContainer,
    FooterAppLinksFooter,
    FooterAppLinksHeader,
    GooglePlayIconContainer,
    HuaweiIconContainer
} from "./FooterAppLinks.module";
import {GooglePlayIcon} from "./pics/GooglePlayIcon";
import {AppleIcon} from "./pics/AppleIcon";

export const FooterAppLinks = () => {
    return (
        <FooterAppLinksContainer>
            <FooterAppLinksHeader>
                <Logo/>
            </FooterAppLinksHeader>
            <FooterAppLinksFooter>
                <AppleIconContainer>
                    <AppleIcon/>
                </AppleIconContainer>
                <GooglePlayIconContainer>
                    <GooglePlayIcon/>
                </GooglePlayIconContainer>
                <HuaweiIconContainer>
                    <HuaweiIcon/>
                </HuaweiIconContainer>
            </FooterAppLinksFooter>
        </FooterAppLinksContainer>
    );
};