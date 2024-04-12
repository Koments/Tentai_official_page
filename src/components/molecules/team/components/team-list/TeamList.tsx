import {ButtonContainer, TeamListContainer, TeamListWrapper, WisperedContainer} from "./TeamListContainer.module";
import React, {Suspense, useState} from "react";
import {MemberList} from "../../types";
import {Button} from "../../../../atoms/button/Button";

export const TeamList = ({memberList, buttonTitle}: MemberList) => {
    const [visibleImages, setVisibleImages] = useState<number>(10);
    const LazyLoadedImage = React.lazy(() => import('../team-member-card/TeamMemberCard')); // ваш компонент, отображающий изображение

    const loadMoreImages = () => {
        console.log('1')
        setVisibleImages(prevVisibleImages => prevVisibleImages + 10);
    };

    return (
        <TeamListWrapper>
            <TeamListContainer>
                {visibleImages < memberList.length ? <WisperedContainer /> : <></>}
                    <Suspense fallback={<div>Loading...</div>}>
                        {memberList.slice(0, visibleImages).map(el => (

                            <LazyLoadedImage key={el.id} firstName={el.firstName} secondName={el.secondName}
                                             position={el.position} source={el.source} id={el.id} openInfo={el.openInfo} info={el.info}/>
                        ))}
                    </Suspense>
            </TeamListContainer>
            <ButtonContainer onClick={loadMoreImages}>
                {visibleImages < memberList.length && (
                    <Button title={buttonTitle}></Button>
                )}
            </ButtonContainer>
        </TeamListWrapper>
    );
};