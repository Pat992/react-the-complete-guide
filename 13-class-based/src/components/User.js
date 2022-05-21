//@ts-check
import { Component } from 'react'

// @ts-ignore
import classes from './User.module.css';

// CLASS-BASED COMPONENT
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  };
}

export default User;

// FUNCTIONAL COMPONENT
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

