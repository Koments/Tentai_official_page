import {Team} from "../../molecules/team/Team";
import {Feedback} from "../../molecules/feedback/Feedback";
import {HeroSection} from "../../molecules/hero-section/HeroSection";
import {MissionValues} from "../../molecules/mission-values/Mission";
import {DownloadPlaces} from "../../molecules/download-places/DownloaPlaces";
import {DealsContainer, MainSectionContainer} from "./MainSection.module.js";
import {MainSectionProps} from "./types";


export const MainSection = (props: MainSectionProps) => {
    return (
        <MainSectionContainer>
            <HeroSection aboutUs={props.aboutUs}/>
            <DealsContainer>
                <MissionValues title={props.missionValues.title} missionData={props.missionValues.missionData}/>
                <Team title={props.team.title} buttonTitle={props.team.buttonTitle} memberList={props.team.memberList}/>
                <DownloadPlaces upText={props.downloadPlacesLeft.upText} bottomText={props.downloadPlacesLeft.bottomText} />
                <Feedback leftSide={props.feedback.leftSide} rightSide={props.feedback.rightSide}/>
            </DealsContainer>
        </MainSectionContainer>
    );
};