import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    super();
    // Initialize State -> State is always an object, called "state"
    this.state = {
      showUsers: true
    };
  };

  toggleUsersHandler() {
    // Change state with setState -> react merges existing and new state internally
    this.setState(snapshot => {
      return { showUsers: !snapshot.showUsers };
    });
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={() => this.toggleUsersHandler()}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  };
}

export default Users;
