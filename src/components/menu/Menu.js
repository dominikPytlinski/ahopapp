import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from '../menuItem/MenuItem';
import './Menu.css';

class Menu extends React.Component {
     
    render()
    {
        const { loggedIn } = this.props;
        
        return(
            <div className={this.props.v ? 'menu visible' : 'menu'}>
                <div className="menu-header">
                    <span onClick={this.props.closeMenu}><FontAwesomeIcon icon="times" /></span>
                </div>
                <MenuItem loggedIn={loggedIn} logOut={this.props.logOut}/>
            </div>
        );
    }

}

export default Menu;