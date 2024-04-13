import {LangListType} from "./type";

export const langListState: LangListType = {
    rus: {
        navBar: [
            {
                id: 1,
                title: 'Дарим призы',
                iconProp: 'Gift',
                color: '#ff6600'
            }, {
                id: 2,
                title: 'О проекте',
            }, {
                id: 3,
                title: 'Услуги',
            }, {
                id: 4,
                title: 'Преймущества',
            }, {
                id: 5,
                title: 'Команда',
            }
        ],
        mainSection: {
            aboutUs: {
                aboutTopLeft: {
                    arrowBackText: "Главная страница",
                    titleFirst: "Наша",
                    titleSecond: "Tentai",
                }, aboutTopRight: {
                    titleFirst: "команда",
                    persons: [
                        {
                            id: 1,
                            image: './first-person.jpg',
                            alt: 'first-person'
                        }, {
                            id: 2,
                            image: './second-person.jpg',
                            alt: 'second-person'
                        }, {
                            id: 3,
                            image: './first-person.jpg',
                            alt: 'first-person'
                        }, {
                            id: 4,
                            image: './second-person.jpg',
                            alt: 'second-person'
                        }, {
                            id: 5,
                            image: 'empty'
                        },
                    ],
                }, aboutBottomRight: {
                    text: ["Вместе строим будущее", "онлайн-торговли в Тайланде"],
                    buttonTitle: "Связаться с нами"
                },
            }, missionValues: {
                title: "Миссия и ценности",
                missionData: [
                    {
                        id: 1,
                        title: 'Создать интернацио-нальное сообщество',
                        hiddenTitle: 'НАША МИССИЯ',
                        ImgComponent: "MissionIcon"
                    }, {
                        id: 2,
                        title: 'Ведущая платформа для торговли',
                        hiddenTitle: 'ВИДЕНЬЕ',
                        ImgComponent: "VisionIcon"
                    }, {
                        id: 3,
                        title: 'Доступность для всех пользователей',
                        hiddenTitle: 'ПРЕДНАЗНАЧЕНИЕ',
                        ImgComponent: "AvailAbilityIcon"
                    }
                ],
            },
            team: {
                title: "Наша команда про Tentai",
                buttonTitle: 'Посмотреть всех',
                memberList: [
                    {
                        id: 1,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Основатель и СЕО Tentai',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 2,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Разработчик мобильного приложения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 3,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Full Stack разработчик',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 4,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Архитектор программного обеспечения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 5,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Основатель и СЕО Tentai',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 6,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Разработчик мобильного приложения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 7,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Full Stack разработчик',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 8,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Архитектор программного обеспечения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 9,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Основатель и СЕО Tentai',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 10,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Разработчик мобильного приложения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 11,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Full Stack разработчик',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 12,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Архитектор программного обеспечения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 13,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Основатель и СЕО Tentai',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 14,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Разработчик мобильного приложения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 15,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Full Stack разработчик',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 16,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Архитектор программного обеспечения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 17,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Основатель и СЕО Tentai',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 18,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Разработчик мобильного приложения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 19,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Full Stack разработчик',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 20,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Архитектор программного обеспечения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 21,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Основатель и СЕО Tentai',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 22,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Разработчик мобильного приложения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 23,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Full Stack разработчик',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 24,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Архитектор программного обеспечения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 25,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Основатель и СЕО Tentai',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 26,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Разработчик мобильного приложения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 27,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Full Stack разработчик',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 28,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Архитектор программного обеспечения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 29,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Основатель и СЕО Tentai',
                        source: './first-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                    {
                        id: 30,
                        firstName: 'Имя',
                        secondName: 'Фамилия',
                        position: 'Разработчик мобильного приложения',
                        source: './second-person.jpg',
                        openInfo: false,
                        info: {
                            headerInfo: `Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать`,
                            bottomInfo: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и'
                        }
                    },
                ],
            },
            downloadPlacesLeft: {
                upText: "Присоединяйтесь уже сейчас",
                bottomText: "и открывайте для себя мир возможностей вместе с Tentai!"
            },
            feedback: {
                leftSide: {
                    title: "Станьте частью революции онлайн-торговли в Таиланде",
                    subTitle: "Для дополнительной информации и сотрудничества, пожалуйста, свяжитесь с нами через указанные контактные данные. Мы всегда открыты для ваших вопросов и предложений!"
                }, rightSide: {
                    form: {
                        name: {
                            label: "Имя",
                            placeholder: "Ваше имя"
                        }, email: {
                            label: "Почта",
                        }, message: {
                            label: "Сообщение",
                            placeholder: "Введите ваше сообщение"
                        },
                        button: {
                            title: 'Отправить сообщение'
                        }
                    },
                    formAfterSend: {
                        title: 'Заявка отправлена',
                        sendTitle: 'Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время, чтобы отправить вам все необходимые детали на электронную почту.',
                        subscribeTitle: 'Чтобы ничего не пропустить, загляните на Tentai и подпишитесь на наши соцсети:',
                        cooperationTitle: 'Спасибо за ваш интерес к нашему проекту. С нетерпением ждем нашего сотрудничества!',
                        tentaiTeam: 'Команда Tentai',
                        buttonTitle: 'Вернуться на главную'
                    }
                }
            },
        }, footer: {
            navListContainer: {
                navBar: [{
                    id: 1,
                    categoryName: "Компания",
                    category: [
                        {id: 1, title: 'О проекте', link: ''},
                        {id: 2, title: 'Команда', link: ''},
                        {id: 3, title: 'Инвесторам', link: ''},
                        {id: 4, title: 'Партнерам', link: ''},
                        {id: 5, title: 'Рекламодателям', link: ''},
                    ]
                },
                    {
                        id: 2,
                        categoryName: "Документы",
                        category: [
                            {id: 1, title: 'Политика конфиденциальности', link: ''},
                            {id: 2, title: 'Договор-оферта', link: ''},
                            {id: 3, title: 'Пользовательское Соглашение', link: ''},
                            {id: 4, title: 'Обработка персональных данных', link: ''},
                            {id: 5, title: 'API документация', link: ''},
                        ]
                    }
                ]
            }
        }
    },
    eng: {
        navBar: [
            {
                id: 1,
                title: 'Giveaways',
                iconProp: 'Gift',
                color: '#ff6600'
            }, {
                id: 2,
                title: 'About Us',
            }, {
                id: 3,
                title: 'Services',
            }, {
                id: 4,
                title: 'Advantages',
            }, {
                id: 5,
                title: 'Team',
            }
        ],
        mainSection: {
            aboutUs: {
                aboutTopLeft: {
                    arrowBackText: "Home",
                    titleFirst: "Our",
                    titleSecond: "Tentai",
                }, aboutTopRight: {
                    titleFirst: "Team",
                    persons: [
                        {
                            id: 1,
                            image: './first-person.jpg',
                            alt: 'first-person'
                        }, {
                            id: 2,
                            image: './second-person.jpg',
                            alt: 'second-person'
                        }, {
                            id: 3,
                            image: './first-person.jpg',
                            alt: 'first-person'
                        }, {
                            id: 4,
                            image: './second-person.jpg',
                            alt: 'second-person'
                        }, {
                            id: 5,
                            image: 'empty'
                        },
                    ],
                }, aboutBottomRight: {
                    text: ["Building the future", "of online trading in Thailand together"],
                    buttonTitle: "Contact Us"
                },
            }, missionValues: {
                title: "Mission and Values",
                missionData: [
                    {
                        id: 1,
                        title: 'Building an international community',
                        hiddenTitle: 'OUR MISSION',
                        ImgComponent: "MissionIcon"
                    }, {
                        id: 2,
                        title: 'Leading trading platform',
                        hiddenTitle: 'VISION',
                        ImgComponent: "VisionIcon"
                    }, {
                        id: 3,
                        title: 'Accessibility for all users',
                        hiddenTitle: 'PURPOSE',
                        ImgComponent: "AvailAbilityIcon"
                    }
                ],
            },
            team: {
                title: "Our Tentai team",
                buttonTitle: 'See more',
                memberList: [
                    {
                        id: 1,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Founder and CEO of Tentai',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 2,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Mobile Application Developer',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 3,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Full Stack Developer',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 4,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Software Architect',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 5,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Founder and CEO of Tentai',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 6,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Mobile Application Developer',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 7,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Full Stack Developer',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 8,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Software Architect',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 9,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Founder and CEO of Tentai',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 10,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Mobile Application Developer',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 11,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Full Stack Developer',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 12,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Software Architect',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 13,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Founder and CEO of Tentai',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 14,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Mobile Application Developer',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 15,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Full Stack Developer',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 16,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Software Architect',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 17,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Founder and CEO of Tentai',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 18,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Mobile Application Developer',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 19,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Full Stack Developer',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 20,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Software Architect',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 21,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Founder and CEO of Tentai',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 22,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Mobile Application Developer',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 23,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Full Stack Developer',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 24,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Software Architect',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 25,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Founder and CEO of Tentai',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 26,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Mobile Application Developer',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 27,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Full Stack Developer',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 28,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Software Architect',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 29,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Founder and CEO of Tentai',
                        source: './first-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                    {
                        id: 30,
                        firstName: 'Name',
                        secondName: 'Surname',
                        position: 'Mobile Application Developer',
                        source: './second-person.jpg', openInfo: false,
                        info: {
                            headerInfo: `We started with a dream: to create an online platform where everyone can easily buy and sell.`,
                            bottomInfo: `We aim to transform Thailand's market interaction by providing an intuitive interface for renting accommodations, renting cars, and accessing freelance services. Our goal is to make Tentai synonymous with reliability, efficiency, and`
                        }
                    },
                ],
            },
            downloadPlacesLeft: {
                upText: "Join now",
                bottomText: "and discover a world of opportunities with Tentai!"
            },
            feedback: {
                leftSide: {
                    title: "Become part of the online trading revolution in Thailand",
                    subTitle: "For additional information and collaboration, please contact us using the provided contact details. We are always open to your questions and suggestions!"
                }, rightSide: {
                    form: {
                        name: {
                            label: "Name",
                            placeholder: "Your name"
                        }, email: {
                            label: "Email",
                        }, message: {
                            label: "Message",
                            placeholder: "Enter your message"
                        },
                        button: {
                            title: 'Send Message'
                        }
                    },formAfterSend: {
                        title: 'Application submitted',
                        sendTitle: 'Your application has been successfully submitted. We will contact you shortly to send you all the necessary details to your email.',
                        subscribeTitle: 'To stay updated, visit Tentai and subscribe to our social media:',
                        cooperationTitle: 'Thank you for your interest in our project. We look forward to collaborating with you!',
                        tentaiTeam: 'Tentai Team',
                        buttonTitle: 'Return to homepage'
                    }
                }
            },
        }, footer: {
            navListContainer: {
                navBar: [{
                    id: 1,
                    categoryName: "Company",
                    category: [
                        {id: 1, title: 'About Us', link: ''},
                        {id: 2, title: 'Team', link: ''},
                        {id: 3, title: 'Investors', link: ''},
                        {id: 4, title: 'Partners', link: ''},
                        {id: 5, title: 'Advertisers', link: ''},
                    ]
                },
                    {
                        id: 2,
                        categoryName: "Documents",
                        category: [
                            {id: 1, title: 'Privacy Policy', link: ''},
                            {id: 2, title: 'Terms of Service', link: ''},
                            {id: 3, title: 'User Agreement', link: ''},
                            {id: 4, title: 'Personal Data Processing', link: ''},
                            {id: 5, title: 'API Documentation', link: ''},
                        ]
                    }
                ]
            }
        }
    }
}