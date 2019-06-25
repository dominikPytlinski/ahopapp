import React from 'react';
import { Redirect } from 'react-router-dom';
import { getFromSessionStorage } from './modules/Services';
import './AddProduct.css';

class AddProduct extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            isLogged: false,
            description: '',
            price: '',
            data: ''
        }
    }

    componentWillMount()
    {
        this.setState({isLogged: (getFromSessionStorage('jwt')) ? true : false});
    }

    setDescription = (e) => {
        this.setState({ description: e.target.value });
    }

    setPrice = (e) => {
        this.setState({ price: e.target.value });
    }
    
    render()
    {
        const { description, price, isLogged } = this.state;

        return(
            <div className="add-product">
                {(isLogged === true) ? null : <Redirect to="/login" /> }
                <header>
                    <span>Comphy Ferniture</span>
                </header>
                <div className="form-container">
                    <form className="form">
                       <label>
                            Opis:<input type="text" value={description} onChange={this.setDescription} />   
                        </label>
                        <label>
                            Cena:<input type="number" value={price} onChange={this.setPrice} />   
                        </label>
                        <label>
                            Dodaj zdjęcie:<input type="file" />   
                        </label>
                        <input type="submit" value="Zapisz" />
                    </form>
                </div>
            </div>
        );
    }

}

export default AddProduct;
