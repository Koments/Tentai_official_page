import styled from '@emotion/styled'

export const TeamListWrapper = styled.div``

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center`

export const TeamListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: relative;

    h2 {
        display: flex;
        justify-content: center;
    }
`

export const WisperedContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 7.1%, #FFFFFF 68.2%);
    padding: 200px;
    z-index: 5;
`

