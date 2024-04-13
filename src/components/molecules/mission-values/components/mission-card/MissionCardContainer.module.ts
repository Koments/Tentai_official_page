import styled from '@emotion/styled'

export const MissionCardContainer = styled.div`
    width: 100%;
    max-width: 426px;
    height: 320px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: -20px;
    padding: 20px 0;
    background-clip: padding-box;
    background-color: white;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.07);
    border-radius: 15px;
    position: relative;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`
export const HiddenTitle = styled.div`
    font-weight: 700;
    font-size: 31px;
    line-height: 35px;
    Opacity: 0.05;
    color: rgb(3 3 3);
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
    color: rgba(209, 40, 161, 1);

`