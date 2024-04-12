import "@fontsource/montserrat";
import "@fontsource/montserrat-alternates";
import styled from '@emotion/styled'

export const AppContainer = styled.div`
    width: 1440px;
    background-color: black;

    font-family: 'Montserrat';

    h1 {
        font-size: 72px;
    }

    h2 {
        font-size: 36px;
    }

    h3 {
        font-size: 24px;
    }

    h1 h2 h3 {
        font-family: 'Montserrat Alternates';
        color: #4F4F4F
    }
`
export const CenterContainer = styled.div`
    display: flex;
    align-items: center;
`
