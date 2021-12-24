import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import { useIdleTimer } from 'react-idle-timer'
import { removeSessionItem } from "./../../util/utility.js";

export default function IdlePopup() {
    const navigation = useNavigate();
    const [showIdlePopup, setShowIdlePopup] = useState(false);
    const timeoutRef = useRef(null);
  
    const handleOnIdle = event => {
      console.log('Triggered handleOnIdle:', event)
      setShowIdlePopup(true);
    }

    useEffect(() => {
      if (showIdlePopup) {
        timeoutRef.current = setTimeout(()=> {
          logout();
        }, 1000);
      }
    },[showIdlePopup]);

    const onContinue = () => {
      setShowIdlePopup(false);
      clearTimeout(timeoutRef.current);
    }
  
    const handleOnActive =(event) => {
      console.log('Triggered handleOnActive:', event)
    }
  
    const handleOnAction = (event) => {
      console.log('Triggered handleOnAction:', event)
    }
  
    const { getRemainingTime } = useIdleTimer({
      timeout: 1000 * 59,
      onIdle: handleOnIdle,
      onActive: handleOnActive,
      onAction: handleOnAction,
      // debounce: 500
    });

    const logout = () => {
      removeSessionItem('isLoggedIn');
      removeSessionItem('profileInfo');
      navigation('/');
    };


    return (
        <div>
            { showIdlePopup &&
                <div style={{position:'absolute', left: '0', top: '0', margin: 'auto', width: '100vw', height:'100vh' }}>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title style={{ color: '#000000'}}>Confirm</Modal.Title>
                        </Modal.Header>
                    
                        <Modal.Body>
                            <p style={{ color: '#000000'}}>Do you want to continue?</p>
                        </Modal.Body>
                    
                        <Modal.Footer>
                        <Button variant="primary" onClick={onContinue}>Continue</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            }
        </div>
    );
  }