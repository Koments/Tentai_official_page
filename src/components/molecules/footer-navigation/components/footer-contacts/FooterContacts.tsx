import {Category, CategoryContainer, FooterContactsContainer, IconInfo, Title} from "./FooterContacts.module";
import {MainIcon} from "../../../../atoms/picture-icon/MainIcon";
import {PhoneIcon} from "../../../../atoms/picture-icon/PhoneIcon";

export const FooterContacts = () => {
    return (
        <FooterContactsContainer>
            <Title>Contacts</Title>
            <CategoryContainer>
                <Category>
                    <span>
                        <MainIcon />
                    </span>
                    <IconInfo>info@tentai.pro</IconInfo>
                </Category>
                <Category>
                    <span>
                        <PhoneIcon />
                    </span>
                    <IconInfo>+66123456789</IconInfo>
                </Category>
            </CategoryContainer>
        </FooterContactsContainer>
    );
};