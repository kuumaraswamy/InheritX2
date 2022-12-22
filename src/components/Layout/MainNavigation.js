
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { authActions } from '../../store/authentication/auth-reducer';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const history = useHistory()
 const dispatch = useDispatch()
  

  const logoutHandler = () => {
    dispatch(authActions.logout())
    history.replace('/auth')
    // optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>InheritX</div>
      </Link>
      <nav>
        <ul>
          {/* {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn && ( */}
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
      
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
