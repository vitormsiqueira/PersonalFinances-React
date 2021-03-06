import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon'

export const Container = styled.div`
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
`;

export const CardContainer = styled.div`
    position: relative;
    padding: 20px;
    margin: 20px;
    text-align: center;

    width: 100%;
    max-width: 940px;
    background-color: #ffff;
    align-self: center;
    border-radius: 14px;
`;


export const Header = styled.div`
    
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    h2{
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

    text-align: center;

    input[type="radio"] {
        position: absolute;
        display: none;
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

    .icon:hover {
        border: solid 3px ${props => props.color};
        opacity: 0.6;
    }

    input[type="radio"]:checked  + .icon {
        border: solid 3px ${props => props.color};
    }
    

`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;

    flex-wrap: wrap;
    
    > label{
        flex: 1;
        text-align: left;
        min-width: 300px;
        padding: 10px;

        h3{
            padding: 5px 0;
            margin: 0;
        }
    }
    

    label > input{
        display: flex;
        width: 98%;
    }

    input{
        height: 35px;
        min-width: 100px;
        border-radius: 5px;
        border: solid 2px #c4c4c4;
    }

    input:focus{
        border: solid 2px #00d632;
        outline: none;
    }

    input[type="date"]:focus{
        border: solid 2px #00d632;
        outline: none;
    }
`;


export const Icons = styled.div`
    
`;


export const Content = styled.div`

    display: inline;
    

    button{
        margin-top: 30px;
        height: 40px;
        width: 50%;
        background-color: #00d632;
        border-radius: 18px;
        border: none;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
    }

    button:hover{
        background-color: #00c92f;
        cursor: pointer;
        box-shadow: 0 3px 15px #9bffb2;
    }

`;
