import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  async function signin() {
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/podcasts');
};

  return (
    <div className="form-container" >
        <form autoComplete="off" >
          <label>Email</label>
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" onClick={signin}>LOG IN</button>
        </form>
    </div>
  );
}