import Profile from './profile/profile';
import Statistiks from './statistics/statistics';
import FriendsList from './friendsList/friendsList';
import TransactionHistory from './transactionHistory/transactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from "../data/transactions.json"

 export function App () {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistiks
        title="Upload stats" 
        stats={data}
      />
      <FriendsList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </div>
  );
};

export default App;