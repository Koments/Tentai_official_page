export type LangListType = {
    rus: {
        navBar: NavBarItem[];
        mainSection: {
            aboutUs: AboutUs;
            missionValues: {
                title: string;
                missionData: MissionType[];
            };
            team: {
                title: string;
                memberList: MemberType[];
                buttonTitle: string,
            };
            downloadPlacesLeft: {
                upText: string;
                bottomText: string;
            };
            feedback: {
                leftSide: {
                    title: string;
                    subTitle: string;
                };
                rightSide: {
                    form: {
                        name: {
                            label: string;
                            placeholder: string;
                        };
                        email: {
                            label: string;
                        };
                        message: {
                            label: string;
                            placeholder: string;
                        };
                        button: {
                            title: string
                        };
                    };
                };
            };
        };
        footer: {
            navListContainer: {
                navBar: Categories[]
            };
        }
    },eng: {
        navBar: NavBarItem[];
        mainSection: {
            aboutUs: AboutUs;
            missionValues: {
                title: string;
                missionData: MissionType[];
            };
            team: {
                title: string;
                memberList: MemberType[];
                buttonTitle: string
            };
            downloadPlacesLeft: {
                upText: string;
                bottomText: string;
            };
            feedback: {
                leftSide: {
                    title: string;
                    subTitle: string;
                };
                rightSide: {
                    form: {
                        name: {
                            label: string;
                            placeholder: string;
                        };
                        email: {
                            label: string;
                        };
                        message: {
                            label: string;
                            placeholder: string;
                        };
                        button: {
                            title: string
                        };
                    };
                };
            };
        };
        footer: {
            navListContainer: {
                navBar: Categories[]
            };
        }
    };
};

type Categories = {
    id:number,
    categoryName: string;
    category: Category[];
}

type Category = {
    id: number;
    title: string;
    link: string;
}

type AboutUs = {
    aboutTopLeft: {
        arrowBackText: string;
        titleFirst: string;
        titleSecond: string;
    };
    aboutTopRight: {
        titleFirst: string;
        persons: PersonType[];
    };
    aboutBottomRight: {
        text: string;
        buttonTitle: string;
    };
}

type NavBarItem = {
    id: number;
    title: string;
    iconProp?:  string;
    color?: string;
};

type PersonType = {
    id: number;
    image: string;
    alt?: string;
};

export type MemberType = {
    id: number;
    firstName: string;
    secondName: string;
    position: string;
    source: string;
    openInfo: boolean,
    info: {
        headerInfo: string,
        bottomInfo: string
    }
};


export type MissionType = {
    id?: number;
    title: string;
    hiddenTitle: string;
    ImgComponent: string;
}