import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';

class Header extends React.Component {

    render()
    {
        return(
            <header className="header">
                <nav>
                    <div>
                        <span><FontAwesomeIcon icon="bars" /></span>
                    </div>
                    <div>
                        <span>Comphy Ferniture</span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon="shopping-cart" /></span>
                        <div>0</div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;