import React from "react";
import * as Validator from 'validatorjs';


const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label>{label}:</label>
            <br/>
             <input type={type} name={name} onChange={a => onChange(a.target.value)}/>
        <br/>
        </div>
    )
}

const ShowErrors = ({errors}) => {
 return (
    <ul style={{color: 'red', marginLeft: '-20.5px'}}>
        {
            errors.map((error, i)=> <li key={i}>{error}</li>)
        }
    </ul>
 )
}

class Validation extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state
        console.log(email,password)

        let data = {email, password};
          
          let rules = {
            email: 'required|email',
            password: 'min:8|required'
          };

          let validation = new Validator(data, rules);
          validation.passes();
          console.log(validation.errors.get('password'))
          this.setState({
            errors: [
                ...validation.errors.get('email'),
                ...validation.errors.get('password')
            ]
          })
    }
    render(){
        const style = {
            width: '176px',
            margin: '50px auto 0',
            border: '0.5px solid grey',
            padding: '5px'
        }

        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h2>Masuk</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="email" label="Email" 
                    onChange={value => this.setState({email: value})}/>
                    <Input type="password" name="password" label="PW" 
                    onChange={value => this.setState({password: value})}/>
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Validation;