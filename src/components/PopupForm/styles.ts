import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    justify-content: center;
    align-itens: center;
    background-color: rgba(0, 0, 0, 0.2);

`;

export const CardContainer = styled.div`
    position: relative;
    padding: 20px;
    margin: 10px;

    width: 100%;
    max-width: 640px;
    max-height: 320px;
    background-color: #ffff;
    align-self: center;
    border-radius: 14px;
    
`;


export const Header = styled.div`
    
    display: flex;
    justify-content: space-between;

    h3{
        align-self:center;
    }

    button{
        border: none;
        background-color: transparent;
        padding: 0;
    }

    button img{
        width: 20px;
        padding: 15px;
        border-radius: 50px;
        background-color: rgba(0, 0, 0, 0.05)
    }

    button img:hover{
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.2)
    }
`;


export const Content = styled.div``;
