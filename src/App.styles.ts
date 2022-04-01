import styled from 'styled-components';

export const Container = styled.div`
    background-color: #F2F3F8;
    min-height: 100vh;
`;

export const Header = styled.div`
    height:120px;
    text-align: center;
    max-width: 980px;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 0 20px ;

    img{
        width: 40px;
    }
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 10px 20px;
    color: #000;
    padding-top: 10px;
    font-size: 20px;
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 85px;
    padding: 20px;
`;

export const FooterContainer = styled.div`
    color: rgb(0, 0, 0, .2);
    font-size: 14px;
    font-style: italic;
    text-align: center;

    h3{
        font-weight:400;
    }
    a{
        color: rgb(0, 0, 0, .2);
    }
`;

export const Controller = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        border: solid 3px #e3e5ed;
        color: #797c8e;
        font-weight: 500;
        font-size: 16px;
        width: 200px;
        text-align: center;
        background-color: transparent;
        border-radius: 10px;
    }

    button:hover{
        background-color: #00d632;
        color: #fff;
        font-weight: 500;
        border: solid 3px #00d632;
        cursor: pointer;
    }
`;

