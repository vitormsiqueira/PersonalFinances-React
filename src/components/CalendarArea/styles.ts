
import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    color: #797c8e;
`;

export const MonthArea = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    border: solid 3px #e3e5ed;

    :hover{
        background-color: #fff;
        border: solid 3px #fff;
        box-shadow: 0 3px 15px #e3e5ed;
    }
`;
