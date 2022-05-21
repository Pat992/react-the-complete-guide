//@ts-check
import { Component } from 'react'

// @ts-ignore
import classes from './User.module.css';

// CLASS-BASED COMPONENT
class User extends Component {

  componentWillUnmount() {
    console.log('user will unmount');
  };

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  };
}

export default User;

// FUNCTIONAL COMPONENT
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

