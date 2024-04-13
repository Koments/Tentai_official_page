import {ButtonContainer, TeamListContainer, TeamListWrapper, WisperedContainer} from "./TeamListContainer.module";
import React, {Suspense, useState} from "react";
import {Button} from "../../../../atoms/button/Button";
import {TeamListProps} from "../../../../../store/state/lang/type";
import {SecondTypeButton} from "../../../../atoms/second-type-button/SecondTypeButton";

export const TeamList = ({memberList, buttonTitle}: TeamListProps) => {
    const [visibleImages, setVisibleImages] = useState<number>(8); // state in which we indicate how many images we will display

    const LazyLoadedImage = React.lazy(() => import('../team-member-card/TeamMemberCard'));  //wrap the component in lazy for lazy loading

    const loadMoreImages = () => {
        setVisibleImages(prevVisibleImages => prevVisibleImages + 8); //add 10 pictures to the display
    };

    return (
        <TeamListWrapper>
            <TeamListContainer>
                {/* A check that adds bottom shading if not all photos were displayed */}
                {visibleImages < memberList.length ? <WisperedContainer /> : <></>}
                    <Suspense fallback={<div>Loading...</div>}>
                        {memberList.slice(0, visibleImages).map(el => (

                            <LazyLoadedImage key={el.id} firstName={el.firstName} secondName={el.secondName}
                                             position={el.position} source={el.source} id={el.id} openInfo={el.openInfo} info={el.info}/>
                        ))}
                    </Suspense>
            </TeamListContainer>
            <ButtonContainer onClick={loadMoreImages}>
                {/* Displaying the additional photo loading button if there are still unloaded pictures */}
                {visibleImages < memberList.length && (
                    <SecondTypeButton title={buttonTitle}></SecondTypeButton>
                )}
            </ButtonContainer>
        </TeamListWrapper>
    );
};