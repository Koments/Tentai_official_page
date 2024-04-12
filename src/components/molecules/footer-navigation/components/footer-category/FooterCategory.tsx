import {FooterCategoryProps} from "./types";
import {Category, CategoryContainer, FooterCategoryContainer, Title} from "./FooterCategory.module";

export const FooterCategory = ({categoryName, categories}:FooterCategoryProps) => {
    return (
        <FooterCategoryContainer>
            <Title>{categoryName}</Title>
            <CategoryContainer>{categories.map((el, index) => <Category key={el.id}>{el.title}</Category>)}</CategoryContainer>
        </FooterCategoryContainer>
    );
};