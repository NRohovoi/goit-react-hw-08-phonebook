import { FriendListItems, FriendListStatus, FriendListAvatar, FriendListName } from './friensListItem.styled';

const FriendsListItem = ({ avatar,  name, isOnline }) => {
    return(
        <FriendListItems>
            <FriendListStatus status={isOnline}>{isOnline}</FriendListStatus>
            <FriendListAvatar
                src={avatar}
                alt='Friends avatar'
            />
            <FriendListName>{name}</FriendListName>
        </FriendListItems>
    )
};

export default FriendsListItem;
