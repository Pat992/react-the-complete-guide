import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  return (
    <div>
      <AddUser />
      <UsersList users={[{ name: 'GAGAMAN', age: 115 }]} />
    </div>
  );
}

export default App;
