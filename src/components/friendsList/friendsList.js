import PropTypes from 'prop-types';
import FriendsListItem from 'components/friendsListItem/friendsListIem';

import { FriendsLists } from './friendsList.styled';

const FriendsList = ({ friends }) => {
    return (
        <FriendsLists>
            {friends.map(( friend) => (
                <FriendsListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </FriendsLists>
    )
};

FriendsList.зropTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number.isRequired,
        }))
};

export default FriendsList;