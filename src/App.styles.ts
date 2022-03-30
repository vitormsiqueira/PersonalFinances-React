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
    margin-bottom: 50px;
    padding: 20px;
`;


