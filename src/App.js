import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart, faTimes, faChevronUp, faChevronDown, faUser, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Cart from './components/cart/Cart';
import Menu from './components/menu/Menu';
import Curtain from './components/curtain/Curtain';
import { getFromStorage, removeFromStorage } from './modules/Services';
import './App.css';

library.add(faBars, faShoppingCart, faTimes, faChevronUp, faChevronDown, faUser, faPlusSquare);

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      isCartVisible: false,
      isMenuVisible: false,
      isCurtainVisible: false,
      isLoggedIn: (getFromStorage('jwt', 'session')) ? true : false,
      jwt: (getFromStorage('jwt', 'session')) ? getFromStorage('jwt', 'session') : false
    }
  }
  
  showCurtain = () => {
    const { isCurtainVisible } = this.state;
    setTimeout(() => {
      this.setState({ isCurtainVisible: !isCurtainVisible });
    }, 300);
  }
  
  showCart = () => {
    const { isCartVisible } = this.state;
    this.setState({ isCartVisible: !isCartVisible });
    this.showCurtain();
  }

  showMenu = () => {
    const { isMenuVisible } = this.state;
    this.setState({ isMenuVisible: !isMenuVisible });
    this.showCurtain();
  }

  logOut = () => {
    removeFromStorage('jwt', 'session');
    this.setState({
      isMenuVisible: false,
      isCurtainVisible: false,
      isLoggedIn: false,
      jwt: false
    });
  }
  
  render()
  {
    return(
      <div className="App">
        <Header showCart={this.showCart} showMenu={this.showMenu}/>
        <Content />
        <Cart v={this.state.isCartVisible} closeCart={this.showCart}/>
        <Menu v={this.state.isMenuVisible} loggedIn={this.state.isLoggedIn} closeMenu={this.showMenu} logOut={this.logOut} />
        <Curtain v={this.state.isCurtainVisible}/>
      </div>
    );
  }
  
}

export default App;
