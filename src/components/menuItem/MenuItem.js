import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = (props) => {
    const { loggedIn } = props;
    
    if(loggedIn) {
        return(
            <ul>
                <li><Link to="add-product" className="link"><FontAwesomeIcon icon="plus-square" /><span>Dodaj produkt</span></Link></li>
                <li><Link to="logout" className="link"><FontAwesomeIcon icon="user" /><span>Wyloguj się</span></Link></li>
            </ul>
        );
    } else {
        return(
            <ul>
                <li><Link to="/login" className="link"><FontAwesomeIcon icon="user" /><span>Zaloguj się</span></Link></li>
            </ul>
        );
    }
}

export default MenuItem;