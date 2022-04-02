import styled from 'styled-components';
import {StyledIconBase} from '@styled-icons/styled-icon'

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
    text-align: center;

    width: 100%;
    max-width: 920px;
    max-height: 420px;
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

export const IconStyleWrapper = styled.div<{ color: string, backcolor: string }>`
    ${StyledIconBase} {
        stroke-width: 2;
        padding: 10px;
    }

    width: 48%;

    input[type="radio"] {
        position: absolute;
        opacity: 0;
    }

    [type=radio]+ .icon {
        cursor: pointer;
        margin-right: 0.5rem;
    }

    .icon {
        margin: 10px;
        width: 25px;
        color: ${props => props.color};
        background-color: ${props => props.backcolor};
        border-radius: 12px;
        border: solid 3px ${props => props.backcolor};
    }

    input[type="radio"]:checked  + .icon {
        border: solid 3px ${props => props.color};
    }
    

`

export const ContainerInput = styled.div`
    display: flex;
    min-width: 200px;
    justify-content: space-between;
    padding: 20px;

    input{
        height: 35px;
        width: 48%;
        min-width: 100px;
        border-radius: 5px;
        border: solid 2px #c4c4c4;
    }

    input:focus{
        border: solid 3px #00d632;
        outline: none;
    }

    input[type="date"]:focus{
        border: solid 3px #00d632;
        outline: none;
    }
`;


export const Icons = styled.div`
    
`;


export const Content = styled.div`

    display: inline;
    

    button{
        height: 40px;
        width: 50%;
        background-color: #00d632;
        border-radius: 18px;
        border: none;
        color: #fff;
        font-size: 14px;
    }

    button:hover{
        background-color: #00c92f;
        cursor: pointer;
        box-shadow: 0 3px 15px #9bffb2;
    }

`;
