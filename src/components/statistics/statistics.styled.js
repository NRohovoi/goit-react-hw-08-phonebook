import styled from "styled-components";

export const StatSection = styled.section`
max-width: 500px;
background: linear-gradient(135deg, #5fc3e4  -10%, #e55d87 100%);
margin-left: auto;
margin-right:auto;
`;

export const Title = styled.h2`
margin-top: 0;
padding-top: 10px;
text-align: center;
color: white;
font-size: 32px;
`;

export const StatList = styled.ul`
list-style: none;
padding:10px 10px;
margin-top: 0;
margin-bottom: 0;
display:flex;
gap: 15px;
`;

export const StatListItem = styled.li`
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
width: 90px;
height: 90px;
border-radius: 10%;
color: white;
font-size: 20px;
`;

export const StatListContent = styled.span`
display:flex;
justify-content: center;
margin-top: 10px;
color: black;
font-size: 24px;
`;
