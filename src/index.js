import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import AddProduct from './AddProduct';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/add-product" component={AddProduct} />
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
