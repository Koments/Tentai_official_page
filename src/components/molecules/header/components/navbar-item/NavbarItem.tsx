import * as React from 'react';
import {NavBarProps} from "./Types";
import {NavbarElement} from "./NavbarItem.module";
import {CenterContainer} from "../../../../../App.module";
import {Gift} from "../../helped/Gift";

export const NavbarItem = ({title, iconProp, color}: NavBarProps) => {
    return (
        <CenterContainer style={{color: color}}>
            {iconProp ? <Gift /> : ''}
            <NavbarElement>{title}</NavbarElement>
        </CenterContainer>
    );
};