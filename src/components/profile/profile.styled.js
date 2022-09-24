import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 480px;
background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
margin-left: auto;
margin-right:auto;
border:10px solid black;
border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 5s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d3561' /%3E%3Cstop offset='25%25' stop-color='%23c05c7e' /%3E%3Cstop offset='50%25' stop-color='%23f3826f' /%3E%3Cstop offset='100%25' stop-color='%23ffb961' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E") 1;
`;

export const UserWrapper = styled.div`
padding-left: 20px;
padding-right: 20px;
padding-top: 15px;
flex-wrap: wrap;
display: flex;
align-items: center;
justify-content: center;
gap: 15px;

`;

export const UserAvatar = styled.img`
width: 440px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

export const AboutUser = styled.p`
font-size: 20px;
padding: 3px;
color: #084808;
border: 3px solid black;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
border-radius: 25% 10%;
`;

export const UserStatsList = styled.ul`
list-style: none;
width: 300px;
text-align: center;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
padding: 15px 30px;
margin-left: auto;
margin-right:auto;
`;

export const UserStatsListItem = styled.li`
color: white;
font-size: 20px;
padding: 5px;
font-weight: bolder;
`;

export const UserStat = styled.span`
color: black;
font-size: 24px;
`;
