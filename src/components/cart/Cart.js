import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Cart extends React.Component {
    
    render()
    {
        return(
            <div className={this.props.v ? 'cart visible' : 'cart'}>
                <div className="cart-header">
                    <span onClick={this.props.closeCart}><FontAwesomeIcon icon="times" /></span>
                </div>
                <div className="cart-body">
                    <div className="cart-item">
                        <img src="img/sofa.jpg" alt="product"/>
                        <span>$10</span>
                        <div className="cart-item-counter">
                            <span><FontAwesomeIcon icon="chevron-up" /></span>
                            <span>1</span>
                            <span><FontAwesomeIcon icon="chevron-down" /></span>
                        </div>
                    </div>
                    <div className="cart-item">
                        <img src="img/sofa.jpg" alt="product"/>
                        <span>$10</span>
                        <div className="cart-item-counter">
                            <span><FontAwesomeIcon icon="chevron-up" /></span>
                            <span>1</span>
                            <span><FontAwesomeIcon icon="chevron-down" /></span>
                        </div>
                    </div>
                </div>
                <div className="cart-footer">
                    <span>Total: $10</span>
                </div>
            </div>
        );
    }

}

export default Cart;