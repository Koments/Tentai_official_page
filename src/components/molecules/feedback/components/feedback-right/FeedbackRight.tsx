import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
    AfterSendContainer,
    AfterSendImg,
    FeedbackRightContainer,
    Info,
    InfoCard,
    TeamColor,
    Title
} from "./FeedbackRight.module";
import {Button} from "../../../../atoms/button/Button";
import {RightSideProps} from "./types";

export const FeedbackRight = ({form}: RightSideProps) => {
    const [sended, setSended] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = () => setSended(true);


    return (
        <FeedbackRightContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                {!sended ?
                    <div>
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
                    </div> : <AfterSendContainer>
                        <Title>Заявка отправлена</Title>
                        <div>
                            <AfterSendImg src="/imageAfterSend.png" alt=""/>
                        </div>
                        <Info>
                            <div>Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время, чтобы отправить
                                вам все необходимые детали на электронную почту.
                            </div>
                            <div>Чтобы ничего не пропустить, загляните на Tentai и подпишитесь на наши соцсети:</div>
                            <div>Спасибо за ваш интерес к нашему проекту. С нетерпением ждем нашего сотрудничества!
                            </div>
                            <TeamColor>Команда Tentai</TeamColor>
                        </Info>
                        <Button title={"Вернуться на главную"}></Button>
                    </AfterSendContainer>}
            </form>
        </FeedbackRightContainer>
    );
}