import './App.css';
import React from 'react';
import Input from './components/Input';
import Button from './components/Button';

class Forms extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      accept: false,
    }
  }

  handleChange = ({ target }) => {
    // console.log('Mudando o estado no pai');
    const { id, type, value, checked } = target;
    // console.log(type);
    const newValue = type === 'checkbox' ? checked : value; 
    this.setState({
      [id]: newValue,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault(); //para o comportamento padrao do submit/ <form>
    const { name, email, accept } = this.state;
    // console.log(`Nome ${name} cadastrado com sucesso. Email: ${email}`);
    // console.log(this.props);
    this.props.addItem(name); //callback que veio do pai
  }

  render() {
    return (
      <div className="form">
        <h1>Formulário em React</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Dados pessoais</legend>
              <Input 
                type='text' 
                name='Name' 
                id='name' 
                classInput='form-control' 
                classLabel='form-label' 
                value={this.state.name} 
                onChange={this.handleChange} 
              />

              <Input 
                type='text' 
                name='Email' 
                id='email' 
                classInput='form-control' 
                classLabel='form-label' 
                value={this.state.email} 
                onChange={this.handleChange} 
              />

              <Input 
                type='checkbox' 
                name='Accept' 
                id='accept' 
                classInput='form-check-input' 
                classLabel='form-label' 
                value={this.state.accept} 
                onChange={this.handleChange} 
              />
                
              <Button
                type='submit'  
                classButton='btn btn-primary' 
                value='Enviar'
              />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Forms