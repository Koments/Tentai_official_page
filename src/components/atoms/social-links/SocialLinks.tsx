// @flow
import * as React from 'react';
import {

} from "../../molecules/footer-navigation/components/footer-copywriting/FooterCopywriting.module";
import {InstagramIcon} from "../../molecules/footer-navigation/components/footer-copywriting/pics/InstagramIcon";
import {FacebookIcon} from "../../molecules/footer-navigation/components/footer-copywriting/pics/FacebookIcon";
import {TelegramIcon} from "../../molecules/footer-navigation/components/footer-copywriting/pics/TelegramIcon";
import {YouTubeIcon} from "../../molecules/footer-navigation/components/footer-copywriting/pics/YouTubeIcon";
import {LimeIcon} from "../../molecules/footer-navigation/components/footer-copywriting/pics/LimeIcon";
import {
    FacebookOutlinedIconContainer, IconsContainer,
    InstagramIconContainer, LimeContainer,
    TelegramIconContainer,
    YouTubeIconContainer
} from "./SocialLinks.module";

export const SocialLinks = () => {
    return (
        <IconsContainer>
            <InstagramIconContainer><InstagramIcon/></InstagramIconContainer>
            <FacebookOutlinedIconContainer><FacebookIcon/></FacebookOutlinedIconContainer>
            <TelegramIconContainer><TelegramIcon/></TelegramIconContainer>
            <YouTubeIconContainer><YouTubeIcon/></YouTubeIconContainer>
            <LimeContainer><LimeIcon/></LimeContainer>
        </IconsContainer>
    );
};