import React, { Component } from 'react'
import UserConsumer from '../context';
import "./style.css"; 
import PropTypes from 'prop-types'


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  ChangeVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  deleteUser = (dispatch, e) => {
    const{id} = this.props;
    console.log(id);
    dispatch({type : "DELETE_USER",payload : id})

  }
  render() {
    const { isVisible } = this.state;
    const { name, age, email } = this.props;
    return (
      <UserConsumer>
        {
          value => {
            const { dispatch } = value;

            return (
              <div>
                <button onClick={this.ChangeVisible} className='name-btn'>{name}
                </button>
                <i onClick={this.deleteUser.bind(this, dispatch)} className="fa-solid fa-trash-can"></i>

                {
                  isVisible ?
                    <ul className='content'>
                      <li>Name: {name} </li>
                      <li>Age: {age} </li>
                      <li>Mail: {email}</li>
                    </ul>
                    : null
                }

              </div>
            )
          }
        }
      </UserConsumer>
    )


  }
}

User.propTypes={
  id : PropTypes.string.isRequired,
  name : PropTypes.number.isRequired,
  age : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
}

User.defaultPropTypes = {
  name : "Unknown",
  age : "Unknown",
  email : "Unknown"
  

}



export default User;