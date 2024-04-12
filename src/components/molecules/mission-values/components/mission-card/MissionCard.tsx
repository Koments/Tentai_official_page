import {HiddenTitle, MissionCardContainer, Title} from "./MissionCardContainer.module";
import {AvailAbilityIcon} from "../../pictures/AvailAbilityIcon";
import {VisionIcon} from "../../pictures/VisionIcon";
import {MissionIcon} from "../../pictures/MissionIcon";
import {MissionType} from "../../../../../store/state/lang/type";

export const MissionCard = ({title, hiddenTitle, ImgComponent}: MissionType) => {
    const Icon = ImgComponent === "MissionIcon" ? MissionIcon : ImgComponent === "VisionIcon" ? VisionIcon : AvailAbilityIcon

    return (
        <MissionCardContainer>
            <Icon/>
            <HiddenTitle>{hiddenTitle}</HiddenTitle>
            <Title>{title}</Title>
        </MissionCardContainer>
    );
};