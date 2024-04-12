import React from 'react';
import {Header} from "./components/molecules/header/Header";
import {MainSection} from "./components/organisms/main-section/MainSection";
import {AppContainer} from "./App.module";
import {useSelector} from "react-redux";
import {Lang} from "./store/type";
import {Footer} from "./components/organisms/footer/Footer";

function App() {
    const lang = useSelector((state: Lang) => state.lang.langIso)
    const langInfo = useSelector((state: Lang) => state.lang.lang)
    const selectedLang = lang === 'RUS' ? langInfo.rus : langInfo.eng

    return (
        <AppContainer>
            <Header navBarItems={selectedLang.navBar} lang={lang}/>
            <MainSection aboutUs={selectedLang.mainSection.aboutUs}
                         downloadPlacesLeft={selectedLang.mainSection.downloadPlacesLeft}
                         feedback={selectedLang.mainSection.feedback} missionValues={selectedLang.mainSection.missionValues}
                         team={selectedLang.mainSection.team}/>
            <Footer navListContainer={selectedLang.footer.navListContainer}/>
        </AppContainer>
    );
}

export default App;
