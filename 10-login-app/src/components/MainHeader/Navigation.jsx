import { useContext } from 'react';
import { AuthContext } from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  // useContext hook
  const context = useContext(AuthContext);

  return (<nav className={classes.nav}>
    <ul>
      {context.isLoggedIn && (
        <li>
          <a href="/">Users</a>
        </li>
      )}
      {context.isLoggedIn && (
        <li>
          <a href="/">Admin</a>
        </li>
      )}
      {context.isLoggedIn && (
        <li>
          <button onClick={context.onLogout}>Logout</button>
        </li>
      )}
    </ul>
  </nav>
  );
};

export default Navigation;

// Context API -> CONSUMER
// const Navigation = (props) => {
//   return (
//     <AuthContext.Consumer>
//       {(context) => {
//         return <nav className={classes.nav}>
//           <ul>
//             {context.isLoggedIn && (
//               <li>
//                 <a href="/">Users</a>
//               </li>
//             )}
//             {context.isLoggedIn && (
//               <li>
//                 <a href="/">Admin</a>
//               </li>
//             )}
//             {context.isLoggedIn && (
//               <li>
//                 <button onClick={props.onLogout}>Logout</button>
//               </li>
//             )}
//           </ul>
//         </nav>
//       }}
//     </AuthContext.Consumer>
//   );
// };
