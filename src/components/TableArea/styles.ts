import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th < { width?: number }> `
    width: ${props => props.width ? `${props.width}` : 'auto'};
    padding: 10px 0px;
    text-align: left;
`;