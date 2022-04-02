import styled from 'styled-components';


export const Container = styled.div`
    display: flex;

    button{
        border: solid 3px #e3e5ed;
        color: #797c8e;
        font-weight: 500;
        font-size: 16px;
        width: 200px;
        text-align: center;
        background-color: transparent;
        border-radius: 8px;
    }

    button:hover{
        background-color: #00d632;
        color: #fff;
        font-weight: 500;
        border: solid 3px #00d632;
        cursor: pointer;
        box-shadow: 3px 3px 5px rgb(0, 0, 0, 0.2);
    }
`; 

