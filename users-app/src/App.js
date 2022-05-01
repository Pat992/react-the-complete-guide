import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList(prevSnapshot => [...prevSnapshot, { id: Math.random().toString(), name: name, age: age }])
  }

  return (
    <div>
      <AddUser addUserHandler={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
