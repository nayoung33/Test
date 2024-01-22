import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 200px;
`
export const LeftBox = styled.div`
    flex: 1;
`

export const RightBox = styled.div`
    flex: 1;
    background-color: blue;
`

export const LeftMiniBox = styled.div`
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin-right: 15px;
    cursor: pointer;
    padding: 10px;
    white-space: nowrap;

    &:hover {
       font-size: 20px;
    }

    &:active {
        background-color: aqua;
    }
`
export const LeftTop = styled.div`
    border: 1px solid;
    display: flex;
`
export const LeftBottom = styled.div`
    height: 150px;
`