import { useSelector } from 'react-redux'; 

import classes from './UserProfile.module.css';

const UserProfile = () => {

  const isVisible = useSelector(state => state.auth.isAuthenticated);

  return (
    <main hidden={!isVisible} className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
