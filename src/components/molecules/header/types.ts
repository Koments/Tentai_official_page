import {ReactJSXElementType} from "@emotion/react/types/jsx-namespace";

export type HeaderProps = {
    navBarItems: NavBarItem[]
    lang: "RUS" | "ENG"
}
type NavBarItem = {
    id: number;
    title: string;
    iconProp?: string;
    color?: string;
}