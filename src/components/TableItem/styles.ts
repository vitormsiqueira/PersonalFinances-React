import styled from 'styled-components';



export const Container = styled.div`
    box-shadow: 3px 3px 5px rgb(0, 0, 0, 0.1);
    border-radius: 12px;
    background-color: #fff;
    padding: 10px;
    margin: 20px 0px;
    flex: 1;
`;

export const TableLine = styled.tr`
    padding: 20px 0;
    display: flex;
`;

export const TableColumn = styled.td`
    padding: 10px 10px;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color};
`;


export const Bills = styled.div`
    display: block;
    flex: 1;
    padding-left: 10px;
`;

export const BillTitle = styled.tr`
    padding: 10px 0;
    font-size: 22px;
    font-weight: 500;
`;

export const BillDate = styled.tr`
    padding: 10px 0;
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
`;

export const Value = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: 700
`;