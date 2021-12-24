import { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setIsLoggedIn, setProfileInfo } from '../../store/slicer.js';
import "./style.css";

import Header from '../../components/header/Header.js'
import { APP_CONFIG } from '../../config/app.config.js';
import { isUserLoggedIn, addSessionItem, getSessionItem } from "../../util/utility.js";

function Login() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // If the user is already logged in, then navigate to home, when refreshing.
    if (isUserLoggedIn()) {
      dispatch(setIsLoggedIn(true));
      dispatch(setProfileInfo(JSON.parse(getSessionItem('profileInfo'))));
      navigation('/home');
    };
  }, []);

  const onSignInSuccess = (response) => {
    // This will be called when successfully logged in thru Google API.
    const profileObject = response.profileObj;

    // TODO: Encrypt if possible.
    addSessionItem('isLoggedIn', true);
    addSessionItem('profileInfo', JSON.stringify(profileObject));
    dispatch(setProfileInfo(profileObject));
    navigation('/home');
  }

  const onSignInFailure = (error) => {
    // This will be called when log-in is failed thru Google API.
    console.log('Error in login', error);
  }

  return (
    <div>
      <Header>
        <div className="container font-size18 height-inherit">
          Welcome To CSW App
        </div>
      </Header>
      <div className="container height-100vh">
        <GoogleLogin
          clientId={APP_CONFIG.GAPI_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={onSignInSuccess}
          onFailure={onSignInFailure} >
          </GoogleLogin>
      </div>
    </div>
  );
}

export default Login;
