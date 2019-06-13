import React from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            login: '',
            pass: '',
            rd: false
        }
    }

    setLogin = (e) => {
        this.setState({login: e.target.value});
    }

    setPass = (e) => {
        this.setState({pass: e.target.value});
    }

    login = (e) => {
        e.preventDefault();
        this.setState({rd: true})
    }
    
    render()
    {
        const { login, pass, rd } = this.state;
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
                {(rd === true) ? <Redirect to="/" /> : null}
            </div>
        );
    }

}

export default Login;