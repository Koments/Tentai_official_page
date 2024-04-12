import styled from '@emotion/styled'

export const FeedbackRightContainer = styled.div`
    width: 538px;
    height: 492px;
    left: 730px;
    background-color: white;
    border-radius: 26px;
    filter: drop-shadow(0px 4px 41px rgba(0, 0, 0, 0.1));
    padding: 24px;
    
    div{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
 
    label{
        font-size: 16px;
        font-weight: 500;
        line-height: 17px;
        text-align: left;
        color: rgba(255, 102, 0, 1);

    }
`
export const AfterSendContainer = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h3`
    background: linear-gradient(147.26deg, rgb(255, 102, 0) 25%, rgb(209, 40, 161) 76%) text;
    color: transparent;
`
export const AfterSendImg = styled.img`
    width: 180px;
    height: 180px;
`
export const Info = styled.div``
export const TeamColor = styled.div`
    background: linear-gradient(147.26deg, #FF6600 25.72%, #D128A1 75.91%) text;
    color: transparent;
`


export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;

    label{
        margin-bottom: 5px;
    }
    
    input{
        box-sizing: border-box;
        padding: 11px 10px 12px;
        height: 40px;
        background: white;
        border: 1px solid #9DA6AA;
        border-radius: 8px;
    }
`

