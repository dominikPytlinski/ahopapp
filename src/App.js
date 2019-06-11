import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart, faTimes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Cart from './components/cart/Cart';
import './App.css';

library.add(faBars, faShoppingCart, faTimes, faChevronUp, faChevronDown);

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      isCartVisible: false
    }
  }
  
  showCart = () => {
    const { isCartVisible } = this.state;
    this.setState({isCartVisible: !isCartVisible});
  }
  
  render()
  {
    return(
      <div className="App">
        <Header showCart={this.showCart}/>
        <Content />
        <Cart v={this.state.isCartVisible} closeCart={this.showCart}/>
      </div>
    );
  }
  
}

export default App;
