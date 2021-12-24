import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';
import { useSelector } from 'react-redux';
import { Popover, Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { APP_CONFIG } from '../../config/app.config.js';
import logo from './../../logo.svg';
import Header from '../../components/header/Header.js';
import IdlePopup from '../../components/idlePopup/idle-popup.js';
import "./style.css";

import { removeSessionItem } from "../../util/utility.js";

export default function Home() {
    const navigation = useNavigate();
    const profileInfo = useSelector(state => state.cswapp.profileInfo);

    const goHome = () => {
        navigation('/');
    };

    const logout = () => {
        removeSessionItem('isLoggedIn');
        removeSessionItem('profileInfo');
        navigation('/');
    };

    const popover = (
        <Popover >
          <Popover.Body className="flex-container flex-direction-column align-items-center">
            <Button onClick={goHome} variant="light" className="width-100px">Profile</Button> <br />
            <GoogleLogout
                clientId={APP_CONFIG.GAPI_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={logout}
                ></GoogleLogout>
          </Popover.Body>
        </Popover>
    );

    return (
        <div>
            <Header>
                <div className="flex-container flex-direction-row align-items-center justify-content-sb">
                    <div className="flex-container flex-direction-row align-items-center">
                        <img src={logo} className="logo-image" alt="logo" onClick={goHome}/>
                        {/* TODO: Highlight active menu.*/}
                        <NavLink to="/home/staticdata" className="app-header-menu">Static Data</NavLink> |{" "}
                        <NavLink to="/home/dynamicdata" className="app-header-menu">Dynamic Data</NavLink>
                    </div>
                    <div style={{ cursor: 'pointer' }}>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
                            <span>{profileInfo?.name}</span>
                        </OverlayTrigger>
                    </div>
                </div>
                <IdlePopup />
            </Header>
            <Outlet />
        </div>
    );
  }