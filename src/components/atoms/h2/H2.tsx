import {H2Container} from "./H2.module";
import {H2Props} from "./Type";

export const H2 = ({title}: H2Props) => {
    return (
        <H2Container>{title}</H2Container>
    );
};