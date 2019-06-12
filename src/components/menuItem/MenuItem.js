import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = (props) => {
    const { loggedIn } = props;
    
    if(loggedIn) {
        return(
            <ul>
                <li><FontAwesomeIcon icon="plus-square" /><span>Dodaj produkt</span></li>
                <li><FontAwesomeIcon icon="user" /><span>Wyloguj się</span></li>
            </ul>
        );
    } else {
        return(
            <ul>
                <li><FontAwesomeIcon icon="user" /><span>Zaloguj się</span></li>
            </ul>
        );
    }
}

export default MenuItem;