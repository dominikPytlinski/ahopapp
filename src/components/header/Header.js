import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';

class Header extends React.Component {

    startShopping = () => {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    render()
    {
        return(
            <header className="header">
                <nav>
                    <div onClick={this.props.showMenu}>
                        <span><FontAwesomeIcon icon="bars" /></span>
                    </div>
                    <div>
                        <span>Comphy Ferniture</span>
                    </div>
                    <div onClick={this.props.showCart}>
                        <span><FontAwesomeIcon icon="shopping-cart" /></span>
                        <div>0</div>
                    </div>
                </nav>
                <div className="banner">
                    <span>Comphy Ferniture</span>
                    <button onClick={this.startShopping}>Start shopping</button>
                </div>
            </header>
        );
    }

}

export default Header;