import {MemberType, MissionType} from "../../../store/state/lang/type";

export type MainSectionProps = {
    aboutUs: AboutUs;
    missionValues: {
        title: string;
        missionData: MissionType[];
    };
    team: {
        title: string;
        memberList: MemberType[];
        buttonTitle:string;
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
                };button: {
                    title: string;
                };
            };
        };
    };
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

type PersonType = {
    id: number;
    image: string;
    alt?: string;
};