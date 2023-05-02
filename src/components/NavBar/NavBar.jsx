import { login, logout } from '../../firebase';
import { Link } from 'react-router-dom';


export default function NavBar(props) {

// const token = props.user.getIdToken();
// console.log(token);

  return (
    <nav className="navBar">
      <Link to="/home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/podcasts">My Podcasts</Link>
      &nbsp; | &nbsp;
      <Link to="/entries">My Journal Entries</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">My Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/signup">Signup</Link>
      &nbsp; | &nbsp;
      <Link to="/login">Login</Link>
      &nbsp; | &nbsp;

      <ul>
        {props.user ?

        <li>
          <button onClick={logout}>Logout</button>
        </li>
        :
        <li>
          <button onClick={login}>Google Login</button>
        </li>
      }
      </ul>
    </nav>
  );
}