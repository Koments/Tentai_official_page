import * as React from 'react';
import {MissionCard} from "./components/mission-card/MissionCard";
import {H2} from "../../atoms/h2/H2";
import {MissionImagesContainer, MissionValuesContainer} from "./Mission.module";
import {MissionValueProps} from "../../../store/state/lang/type";

export const MissionValues = ({title, missionData}: MissionValueProps) => {
    return (
        <MissionValuesContainer>
            <H2 title={title} />
            <MissionImagesContainer>
                {missionData.map(el => <MissionCard key={el.id} title={el.title} hiddenTitle={el.hiddenTitle} ImgComponent={el.ImgComponent} />)}
            </MissionImagesContainer>
        </MissionValuesContainer>
    );
};