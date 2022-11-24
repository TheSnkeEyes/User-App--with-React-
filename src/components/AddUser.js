import React, { Component } from 'react'
import UserConsumer from '../context';

var uniqid = require('uniqid');

class AddUser extends Component {
  state={
    formVisible : false,
    id : uniqid(),
    name : "",
    age : "",
    email : "",
  }

  changeVisible = ( ) => {
    this.setState(
      {
        formVisible : !this.state.formVisible
      }
    )
  }

  onChangeName = (e) => {
    this.setState({
      name : e.target.value
    })
  }

  onChangeAge = (e) => {
    this.setState({
      age : e.target.value
    })
  }
  onChangeEmail = (e) => {
    this.setState({
      email : e.target.value
    })
  }

  AddUser = (dispatch,e) => {
    e.preventDefault();
    const { id,name, age,email} = this.state;
    const newUser = {
        id : id,
        name: name,
        age : age,
        email: email
    }
    dispatch({type: 'ADD_USER', payload : newUser})
  }


  render() {
    const {name, age, email} = this.state;
    const {formVisible} = this.state;

    return <UserConsumer>  
      {
        value => {
          const{dispatch} = value;
          return (
      <div className='add-form'>
        <h2 onClick={this.changeVisible} className='add_title'>{formVisible ? "ADD USER" : "REGISTER USER"}</h2>
        
          {
          formVisible ? <form onSubmit={this.AddUser.bind(this,dispatch)} className='user-form'>
          <div className='form-gropu'>
            <label htmlFor='name'>Name</label>
            <input 
            type="text"
            name='name'
            value={name}
            id='id'
            placeholder='Enter Name'
            className='form-control'
            onChange={this.onChangeName}
            >
            </input>
            <label htmlFor='name'>Age</label>
            <input  
            type="text"
            name='age'
            value= {age}
            id='id'
            placeholder='Enter Name'
            className='form-control'
            onChange={this.onChangeAge}>
            </input>
            <label htmlFor='name'>E-mail</label>
            <input 
            type="email"
            name='email'
            value= {email}
            id='id'
            placeholder='Enter Name'
            className='form-control'
            onChange={this.onChangeEmail}>
            </input>
          </div>
          <button className='register-user'>REGISTER</button>
        </form>:null
        }
       
        
        
      </div>
    )
        }
      }

    </UserConsumer>


    
  }
}

export default AddUser;
