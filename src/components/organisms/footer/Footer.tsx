import * as React from 'react';
import {FooterCopywriting} from "../../molecules/footer-navigation/components/footer-copywriting/FooterCopywriting";
import {FooterNavContainer, FooterWrapper} from "./Footer.module";
import {FooterAppLinks} from "../../molecules/footer-navigation/components/footer-app-links/FooterAppLinks";
import {FooterContacts} from "../../molecules/footer-navigation/components/footer-contacts/FooterContacts";
import {FooterNavigation} from "../../molecules/footer-navigation/FooterNavigation";
import {FooterProps} from "../../../store/state/lang/type";

export const Footer = ({navListContainer}: FooterProps) => {
    return (
        <FooterWrapper >
            <FooterNavContainer>
                <FooterAppLinks />
                <FooterNavigation  navBar={navListContainer.navBar}/>
                <FooterContacts />
            </FooterNavContainer>
            <FooterCopywriting />
        </FooterWrapper>

    );
};