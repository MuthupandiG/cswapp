import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoggedIn, setProfileInfo } from './../../store/slicer.js';
import { isUserLoggedIn, getSessionItem } from "./../../util/utility.js";
import "./style.css";

function UserProfileInfo () {
    const dispatch = useDispatch();
    const profileInfo = useSelector((state) => state.cswapp.profileInfo);

    useEffect(() => {
        // If the user is already logged in, then navigate to home, when refreshing.
        if (isUserLoggedIn()) {
          dispatch(setIsLoggedIn(true));
          dispatch(setProfileInfo(JSON.parse(getSessionItem('profileInfo'))));
        };
      }, []);
    

    return (
        <div className="flex-container justify-content-center align-items-center height-100vh">
            <div className="flex-container flex-direction-column align-items-center">
                <img src={profileInfo.imageUrl} className="profile-image"></img>
                <div className="margin-10px">
                    <span className="bold-text">Name : </span> 
                    <span>{profileInfo.name}</span>
                </div>
                <div>
                    <span className="bold-text">Email : </span> 
                    <span>{profileInfo.email}</span>
                </div>
            </div>
        </div>
    )
};

export default UserProfileInfo;