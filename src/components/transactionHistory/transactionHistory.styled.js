import styled from "styled-components";

export const TransactionTable = styled.table`
width: 500px;
background: linear-gradient(135deg, #5fc3e4  0%, #e55d87 100%);
margin-left: auto;
margin-right:auto;
padding: 20px 20px;
text-align: center;
`;

export const TransactionTableHead = styled.thead`
font-size: 32px;
color: white;

`;

export const TransactionTableHeadLine = styled.tr`
height: 60px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

export const TransactionTableLine = styled.tr`
font-size: 24px;
height:40px;
`;

export const TransactionTableCell = styled.td`
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;
