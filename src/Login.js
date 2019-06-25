import React from 'react';
import { Redirect } from 'react-router-dom';
import { ajax, setToStorage } from './modules/Services';
import './Login.css';

class Login extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            login: '',
            pass: '',
            isRedirect: false,
        }
    }

    setLogin = (e) => {
        this.setState({login: e.target.value});
    }

    setPass = (e) => {
        this.setState({pass: e.target.value});
    }

    login = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        let url = 'http://localhost/shopapi/user/login';

        formData.append('login', this.state.login);
        formData.append('password', this.state.pass);

        ajax(url, 'POST', formData)
            .then((res) => {
                (res.jwt) ? setToStorage('jwt', res.jwt, 'session') : console.log(res.message);
                this.setState({
                    isRedirect: true
                });
            }).catch(err => console.log(err));
    }
    
    render()
    {
        const { login, pass, isRedirect } = this.state;
        return(
            <div className="login">
                <header>
                    <span>Comphy Ferniture</span>
                </header>
                <div className="form-container">
                    <form className="form" onSubmit={this.login} >
                        <input type="text" name="login" value={login} onChange={this.setLogin} />
                        <input type="password" name="pass" value={pass} onChange={this.setPass} />
                        <input type="submit" value="Zaloguj" />
                    </form>
                </div>
                {(isRedirect === true) ? <Redirect to="/" /> : null}
            </div>
        );
    }

}

export default Login;