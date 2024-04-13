import {AboutUsIcon} from "../about-us-icon/AboutUsIcon";
import {
    AboutUsTopRightContainer,
    EmployeesCountContainer,
    EmployeesCountTitle,
    ImagesContainer
} from "./AboutUsRightTopContainer.module";
import {AboutUsBottomRightProps} from "../../../../../store/state/lang/type";

export const AboutUsTopRight = ({titleFirst, persons}: AboutUsBottomRightProps) => {
    let offset = -10;
    return (
        <AboutUsTopRightContainer>
            <div>
                <ImagesContainer>
                    {persons.map(el => {
                        offset += 10
                        return <AboutUsIcon key={el.id} src={el.image} alt={el.alt} id={el.id} offset={offset}/>
                    })}

                    <EmployeesCountContainer>
                        <EmployeesCountTitle>20+</EmployeesCountTitle>
                    </EmployeesCountContainer>
                </ImagesContainer>
                <div>
                    <h1>{titleFirst}</h1>
                </div>
            </div>
        </AboutUsTopRightContainer>
    );
};