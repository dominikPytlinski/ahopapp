import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Header from './components/header/Header';
import Content from './components/content/Content';
import './App.css';

library.add(faBars, faShoppingCart);

class App extends React.Component {
  render()
  {
    return(
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
