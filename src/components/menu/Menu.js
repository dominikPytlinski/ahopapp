import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends React.Component {

    render()
    {
        return(
            <div className={this.props.v ? 'menu visible' : 'menu'}>
                <div className="menu-header">
                    <span onClick={this.props.closeMenu}><FontAwesomeIcon icon="times" /></span>
                </div>
                <ul>
                    <li><FontAwesomeIcon icon="user" /><span>Zaloguj się</span></li>
                </ul>
            </div>
        );
    }

}

export default Menu;