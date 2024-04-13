import LanguageIcon from '@mui/icons-material/Language';
import {LanguageContainer} from "./LanguageChanger.module";
import {useDispatch} from "react-redux";
import {changeLang} from "../../../../../store/langListSlice";
import {LanguageChangerProps} from "../../../../../store/state/lang/type";

export const LanguageChanger = ({value}: LanguageChangerProps) => {
    const dispatch = useDispatch()
    const onclickHandler = () => {dispatch(changeLang(value))}

    return (
        <LanguageContainer onClick={() => onclickHandler()}>
            <LanguageIcon/>
            <div>{value}</div>
        </LanguageContainer>
    );
};

