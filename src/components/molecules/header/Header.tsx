import React from "react";
import {Logo} from "../../atoms/logo/Logo";
import {NavbarItem} from "./components/navbar-item/NavbarItem";
import {LanguageChanger} from "./components/language-changer/LanguageChanger";
import {HeaderContainer, NavigationContainer} from "./Header.module";
import {CenterContainer} from "../../../App.module";
import {HeaderProps} from "./types";

export const Header = (props: HeaderProps) => {
    return (
        <HeaderContainer>
            <Logo/>

            <NavigationContainer>
                <CenterContainer>
                     {props.navBarItems.map(el => <NavbarItem key={el.id} title={el.title} iconProp={el.iconProp} color={el.color}/>)}
                </CenterContainer>
                <CenterContainer>
                    <LanguageChanger value={props.lang}/>
                </CenterContainer>
            </NavigationContainer>
        </HeaderContainer>
    );
};