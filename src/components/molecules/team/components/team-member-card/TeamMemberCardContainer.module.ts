import styled from '@emotion/styled'

export const TeamMemberCardContainer = styled.div`
    width: 315px;
    height: 430px;
    gap: 16px;
    z-index: 3;
    cursor: pointer;
`

export const CardImage = styled.img`
    width: 315px;
    height: 372px;
    border-radius: 20px;
    object-fit: cover;
`

export const CardWithText = styled.div`
    width: 315px;
    height: 372px;
    border-radius: 20px;
    object-fit: cover;
    overflow-x: auto;
    overflow-y: auto;
`

export const CardWithTextHeader = styled.div`
    font-size: 23px;
    font-weight: 500;
    line-height: 21px;
    color: rgba(209, 40, 161, 1);
`
export const CardWithTextBottom = styled.div`
    font-size: 21px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
`

export const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardName = styled.div`
    background: linear-gradient(147.26deg, rgb(255, 102, 0) 25%, rgb(209, 40, 161) 76%) text;
    color: transparent;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
`

export const CardPosition = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;

`
