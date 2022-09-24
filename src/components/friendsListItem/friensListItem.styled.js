import styled from "styled-components";

export const FriendListItems = styled.li`
display: flex;
align-items: baseline;
justify-content: center;
margin-bottom:25px;
gap:15px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

export const FriendListStatus = styled.span`
width:32px;
height:32px;
background-color: ${p => {
    return p.status ? 'green' : 'red';
}};
border-radius: 50%;
`;

export const FriendListAvatar = styled.img`
width: 120px;
height: 120px;
`;

export const FriendListName = styled.p`
font-size: 24px;
`;
