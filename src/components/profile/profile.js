import PropTypes from 'prop-types';
import { Wrapper, UserWrapper, UserAvatar, AboutUser, UserStatsList, UserStatsListItem, UserStat } from "./profile.styled"

const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
    return (
     <Wrapper>
      <UserWrapper>
        <UserAvatar
          src={avatar}
          alt='user avatar'
        />
        <AboutUser>{username}</AboutUser>
        <AboutUser>@{tag}</AboutUser>
        <AboutUser>{location}</AboutUser>
      </UserWrapper>
      <UserStatsList>
        <UserStatsListItem>
          <span>Followers:</span>
          <UserStat> {followers}</UserStat>
        </UserStatsListItem>
        <UserStatsListItem>
          <span>Views:</span>
          <UserStat> {views}</UserStat>
        </UserStatsListItem>
        <UserStatsListItem>
          <span>Likes:</span>
          <UserStat> {likes}</UserStat>
        </UserStatsListItem>
      </UserStatsList>
    </Wrapper>
    )
}

Profile.зropTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};
export default Profile;