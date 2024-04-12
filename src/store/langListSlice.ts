import {createSlice} from "@reduxjs/toolkit";
import {langListState} from "./state/lang/langList.state";

const langListSlice = createSlice({
    name: 'selectedLang',
    initialState: {
        langIso: 'ENG',
        lang: langListState
    },
    reducers: {
        changeLang(state, action) {
            state.langIso = action.payload === "ENG" ? "RUS" : "ENG"
        }, setCardOpen(state, action) {
            if (state.langIso === "ENG") {
                state.lang.eng.mainSection.team.memberList = state.lang.eng.mainSection.team.memberList.map(el => el.id === action.payload.id ? {...el, openInfo: !el.openInfo} : {...el})
                console.log(state.lang.eng.mainSection.team.memberList)

            } else if (state.langIso === "RUS") {
                state.lang.rus.mainSection.team.memberList = state.lang.rus.mainSection.team.memberList.map(el => el.id === action.payload.id ? {...el, openInfo: !el.openInfo} : {...el})
            }

        }
    }
})

export const {changeLang, setCardOpen} = langListSlice.actions;

export default langListSlice.reducer