import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export default function LoginForm({user, setUser}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  async function signin() {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = "Log in failed"
        console.log(errorMessage)
      })
    console.log(user);
    navigate('/podcasts');
};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    
    return () => {
      // cleanup actions
      unsubscribe();
    }
  }, []);

  return (
    <div className="form-container" >
          <label>Email</label>
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" onClick={signin}>LOG IN</button>
        
    </div>
  );
}