export type FooterProps = {
    navListContainer: NavBarProps
};

export type NavBarProps = { navBar: Categories[] }

type Categories = {
    id: number;
    categoryName: string;
    category: Category[];
}

type Category = {
    id: number;
    title: string;
    link: string;
}