import {MemberType} from "../../../store/state/lang/type";

export type TeamProps = {
    title: string;
    memberList: MemberType[];
    buttonTitle: string,
}

export type MemberList = {
    memberList: MemberType[];
    buttonTitle: string
}