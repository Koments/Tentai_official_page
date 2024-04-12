import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {ButtonElement} from "./Button.module";
import {ButtonProps} from "./Type";

export const Button = ({title}: ButtonProps) => {
    return (
        <ButtonElement>{title}
            <ArrowForwardIcon/>
        </ButtonElement>
    );
};