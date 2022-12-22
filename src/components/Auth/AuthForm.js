import {  useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authActions } from '../../store/authentication/auth-reducer';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();
  const items = useSelector(state => state.items.items)
  const dispatch = useDispatch() 
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const  uNameInputRef = useRef();

  console.log(items)

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredPassword = passwordInputRef.current.value;
    const branchId = emailInputRef.current.value
    const userName = uNameInputRef.current.value;
    console.log(userName.trim().toLowerCase() , enteredPassword, branchId)
    for(let item of items)
    {
      console.log(item.branchId, item.userName, item.password)
      if(item.branchId == branchId && item.userName == userName.trim().toLowerCase() && item.password == enteredPassword){
        const obj = {
          branchId: item.branchId, userName: item.userName
        }
        dispatch(authActions.login(obj))
        history.push('/')
      }else{
        alert("please enter Correct Details")
      }
    }
  }

  

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='bID'>Your Email</label>
          <input type='number' id='bID' required ref={emailInputRef} placeholder="Branch Id"/>
        </div>
        <div className={classes.control}>
          <label htmlFor='uName'>Your Password</label>
          <input
            type='text'
            id='uName'
            placeholder='User name'
            required
            ref={uNameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            placeholder='Password'
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          
            <button>Login</button>
        
          
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
/*
const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

 

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
*/