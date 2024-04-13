export type LangListType = {
    rus: {
        navBar: NavBarItemProp[];
        mainSection: mainSectionProps;
        footer: FooterProps
    }, eng: {
        navBar: NavBarItemProp[];
        mainSection: mainSectionProps;
        footer: FooterProps;
    };
};

export type FooterProps = {
    navListContainer: NavBarProps
};

export type NavBarProps = { navBar: Categories[] }

export type mainSectionProps = {
    aboutUs: AboutUsProps;
    missionValues: MissionValueProps;
    team: TeamProps;
    downloadPlacesLeft: downloadPlacesLeftProps;
    feedback: FeedbackProps;
}

export type MissionValueProps = {
    title: string;
    missionData: MissionType[];
}

export type TeamProps = {
    title: string;
    memberList: MemberType[];
    buttonTitle: string,
}

export type TeamListProps = {
    memberList: MemberType[];
    buttonTitle: string,
}

export type MissionValuesProps = {
    title: string;
    missionData: MissionType[];
}

export type FeedbackProps = {
    leftSide: LeftSideProps;
    rightSide: RightSideProps
};

export type RightSideProps = {
    form: Form;
    formAfterSend: FormAfterSendProps;
};

export type LeftSideProps = {
    title: string;
    subTitle: string;
}

export type downloadPlacesLeftProps = {
    upText: string;
    bottomText: string;
}

export type FormAfterSendProps = {
    title: string,
    sendTitle: string,
    subscribeTitle: string,
    cooperationTitle: string,
    tentaiTeam: string,
    buttonTitle: string
};

export type Form = {
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
    }; button: {
        title: string;
    };
}

type Categories = {
    id: number,
    categoryName: string;
    category: CategoryProp[];
}

export type CategoryProp = {
    id: number;
    title: string;
    link: string;
}

export type AboutUsProps = {
    aboutTopLeft: AboutTopLeftProps;
    aboutTopRight: AboutUsBottomRightProps;
    aboutBottomRight: aboutBottomRightProps
}

export type AboutTopLeftProps = {
    arrowBackText: string;
    titleFirst: string;
    titleSecond: string;
}

export  type aboutBottomRightProps = {
    text: string[];
    buttonTitle: string;
};

export type AboutUsBottomRightProps = {
    titleFirst: string;
    persons: PersonType[];
}

export type NavBarItemProp = {
    id: number;
    title: string;
    iconProp?: string;
    color?: string;
};

export type PersonType = {
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

export type LanguageChangerProps = {
    value: string
}
