import {ButtonElement} from "./SecondTypeButton.module";
import {ButtonProps} from "./Type";

export const SecondTypeButton = ({title}: ButtonProps) => {
    return (
        <ButtonElement>{title}
        </ButtonElement>
    );
};