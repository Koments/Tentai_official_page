import {
    CardImage,
    CardInfoContainer,
    CardName,
    CardPosition, CardWithText, CardWithTextBottom, CardWithTextHeader,
    TeamMemberCardContainer
} from "./TeamMemberCardContainer.module";
import {MemberType} from "../../../../../store/state/lang/type";
import {useDispatch} from "react-redux";
import {setCardOpen} from "../../../../../store/langListSlice";

const TeamMemberCard = ({firstName, secondName, position, source, openInfo, info, id}: MemberType) => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(setCardOpen({id, openInfo}));
    };

    return (
        <TeamMemberCardContainer onClick={() => onClickHandler()}>
            {!openInfo ? (
                <CardImage src={source} alt={position}/>
            ) : (
                <CardWithText>
                    <CardWithTextHeader>"{info.headerInfo}"</CardWithTextHeader>
                    <CardWithTextBottom>{info.bottomInfo}</CardWithTextBottom>
                </CardWithText>
            )}
            <CardInfoContainer>
                <CardName>{firstName} {secondName}</CardName>
                <CardPosition>{position}</CardPosition>
            </CardInfoContainer>
        </TeamMemberCardContainer>
    );
};

export default TeamMemberCard;
