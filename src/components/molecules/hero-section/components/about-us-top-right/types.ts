export type aboutTopRightProps = {
    titleFirst: string;
    persons: PersonType[];
};

type PersonType = {
    id: number;
    image: string;
    alt?: string;
};