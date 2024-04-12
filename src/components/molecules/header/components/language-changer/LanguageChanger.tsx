import LanguageIcon from '@mui/icons-material/Language';
import {LanguageChangerProps} from "./Types";
import {LanguageContainer} from "./LanguageChanger.module";
import {useDispatch} from "react-redux";
import {changeLang} from "../../../../../store/langListSlice";

export const LanguageChanger = ({value}: LanguageChangerProps) => {
    const dispatch = useDispatch()
    const onclickHandler = () => {dispatch(changeLang(value))}

    return (
        <LanguageContainer>
            <LanguageIcon/>
            <div onClick={() => onclickHandler()}>{value}</div>
        </LanguageContainer>
    );
};

