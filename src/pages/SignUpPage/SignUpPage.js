import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function SignUpPage({user, setUser}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
        
        return () => {
          // cleanup actions
          unsubscribe();
        }
      }, []);

    async function signup() {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/podcasts');
    };
        
    return (
        <div>
            <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder="Password.."
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signup}>Sign Up</button>
        </div>
    );
  };


    