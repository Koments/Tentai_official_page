import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
    AfterSendContainer,
    AfterSendImg,
    FeedbackRightContainer,
    Info,
    InfoCard, InfoCardContainer, SocialLinksContainer,
    TeamColor,
    Title
} from "./FeedbackRight.module";
import {Button} from "../../../../atoms/button/Button";
import {SocialLinks} from "../../../../atoms/social-links/SocialLinks";
import {RightSideProps} from "../../../../../store/state/lang/type";

export const FeedbackRight = ({form, formAfterSend}: RightSideProps) => {
    const [sended, setSended] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = () => setSended(true);


    return (
        <FeedbackRightContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                {!sended ?
                    <InfoCardContainer>
                        <InfoCard>
                            <label htmlFor='name'>{form.name.label}</label>
                            <input id={"name"} type="text"
                                   placeholder={form.name.placeholder} {...register("Ваше Имя", {
                                required: true,
                                max: 20,
                                min: 0
                            })} />
                        </InfoCard>
                        <InfoCard>
                            <label htmlFor="email">{form.email.label} </label>
                            <input id={"email"} type="email" placeholder="example@email.com" {...register("@email", {
                                required: true,
                                max: 30,
                                min: 5
                            })} />
                        </InfoCard>

                        <InfoCard>
                            <label htmlFor="message">{form.message.label}</label>
                            <input id={"message"} placeholder={form.message.placeholder}
                                   style={{height: "160px"}} {...register("Введите ваше сообщение", {
                                required: true,
                                max: 1000,
                                min: 0,
                                maxLength: 100
                            })} />
                        </InfoCard>

                        <div>
                            <Button title={form.button.title}/>
                        </div>
                    </InfoCardContainer> : <AfterSendContainer>
                        <Title>{formAfterSend.title}</Title>
                        <div>
                            <AfterSendImg src="./imageAfterSend.png" alt="imageAfterSend"/>
                        </div>
                        <Info>
                            <div>{formAfterSend.sendTitle}
                            </div>
                            <div>{formAfterSend.subscribeTitle}</div>
                            <SocialLinksContainer>
                                <SocialLinks />
                            </SocialLinksContainer>
                            <div>{formAfterSend.cooperationTitle}
                            </div>
                            <TeamColor>{formAfterSend.tentaiTeam}</TeamColor>
                        </Info>
                        <Button title={formAfterSend.buttonTitle} />
                    </AfterSendContainer>}
            </form>
        </FeedbackRightContainer>
    );
}