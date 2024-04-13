import {FooterCategory} from "./components/footer-category/FooterCategory";
import {FooterNavigationContainer} from "./FooterNavigation.module";
import {NavBarProps} from "../../../store/state/lang/type";

export const FooterNavigation = ({navBar}:NavBarProps) => {
    return (
        <FooterNavigationContainer>
            {navBar.map(el =>
                <FooterCategory key={el.id} categoryName={el.categoryName} categories={el.category}/>)
            }
        </FooterNavigationContainer>
    );
};