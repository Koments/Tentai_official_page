import {BackgroundWrapper, FeedbackContainer, FeedbackWrapper} from "./Feedback.module";
import {FeedbackLeft} from "./components/feedback-left/FeedbackLeft";
import {FeedbackRight} from "./components/feedback-right/FeedbackRight";
import {BackBackground} from "./pics/BackBackground";
import React from "react";
import {FeedbackProps} from "../../../store/state/lang/type";

export const Feedback = ({leftSide, rightSide}:FeedbackProps) => {
    return (
        <FeedbackWrapper>
            <BackgroundWrapper>
                <BackBackground/>
            </BackgroundWrapper>
            <FeedbackContainer>
                <FeedbackLeft title={leftSide.title} subTitle={leftSide.subTitle}/>
                <FeedbackRight form={rightSide.form} formAfterSend={rightSide.formAfterSend}/>
            </FeedbackContainer>
        </FeedbackWrapper>
    );
};