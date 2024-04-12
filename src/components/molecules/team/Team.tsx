import {TeamList} from "./components/team-list/TeamList";
import {TeamContainer} from "./Team.module";
import {H2} from "../../atoms/h2/H2";
import {TeamProps} from "./types";

export const Team = ({title, memberList, buttonTitle}:TeamProps) => {
    return (
        <TeamContainer>
            <H2 title={title}></H2>
            <TeamList memberList={memberList} buttonTitle={buttonTitle}/>
        </TeamContainer>
    );
};