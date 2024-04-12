import {FeedbackContainer, FeedbackWrapper} from "./Feedback.module";
import {FeedbackLeft} from "./components/feedback-left/FeedbackLeft";
import {FeedbackRight} from "./components/feedback-right/FeedbackRight";
import {FeedbackProps} from "./types";

export const Feedback = ({leftSide, rightSide}:FeedbackProps) => {
    return (
        <FeedbackWrapper>
            <FeedbackContainer>
                <FeedbackLeft title={leftSide.title} subTitle={leftSide.subTitle}/>
                <FeedbackRight form={rightSide.form}/>
            </FeedbackContainer>
        </FeedbackWrapper>
    );
};