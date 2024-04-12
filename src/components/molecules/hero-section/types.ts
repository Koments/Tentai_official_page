export type AboutUsProps = {
    aboutUs: {
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
}

type PersonType = {
    id: number;
    image: string;
    alt?: string;
};
