import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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


    