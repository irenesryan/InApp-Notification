import React, { Component } from 'react';
import "./Navbar.css"
import notificationIcon from '../navbar/images/notification.svg'
import messageIcon from '../navbar/images/message.svg'
import settingsIcon from '../navbar/images/settings.svg'

class Navbar extends Component {
    render() { 
        // let url = 'src/img/notification-alert.svg';
        return (
            <div className='navbar'>
                <span className='logo'>Irenes Notifications</span>
                <div className='icons'>
                    <div className='icon'>
                        <img src={notificationIcon} className='iconImage' alt='' />
                        <div className='counter'>2</div>
                    </div>
                    <div className='icon'>
                        <img src={messageIcon} className='iconImage' alt='' />
                        <div className='counter'>2</div>
                    </div>
                    <div className='icon'>
                        <img src={settingsIcon} className='iconImage' alt='' />
                        <div className='counter'>2</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar