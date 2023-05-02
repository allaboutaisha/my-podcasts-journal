import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LogInPage.css';

export default function LogInPage({ setUser }) {
  return (
    <main className="loginPage">
      <h1>Logo</h1>
      {/* Logo will be clickable to go to HomePage */}
      {/* NavBar will be removed */}
      <LoginForm className="loginForm"/>
      <Link to="/signup" className="signUpButton">Sign Up</Link>
      <img src="https://i.imgur.com/lcDxjtd.png" alt="podcast collage" className="podcastCollage"/>
    </main>
  );
}
