import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Content.css';

class Content extends React.Component {

    render()
    {
        return(
            <div className="container">
                <div className="item">
                    <div className="wrapper">
                        <img src="/img/sofa.jpg" alt="product" />
                        <div className="add-to-cart">
                            <FontAwesomeIcon icon="shopping-cart" />
                            <span>Add To Cart</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                    <span>$10</span>
                </div>
                <div className="item">
                    <div className="wrapper">
                        <img src="/img/sofa.jpg" alt="product" />
                        <div className="add-to-cart">
                            <FontAwesomeIcon icon="shopping-cart" />
                            <span>Add To Cart</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                    <span>$10</span>
                </div>
                <div className="item">
                    <div className="wrapper">
                        <img src="/img/sofa.jpg" alt="product" />
                        <div className="add-to-cart">
                            <FontAwesomeIcon icon="shopping-cart" />
                            <span>Add To Cart</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                    <span>$10</span>
                </div>
            </div>
        );
    }

}

export default Content;