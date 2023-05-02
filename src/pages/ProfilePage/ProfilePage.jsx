import { useEffect, useRef } from "react";

export default function ProfilePage(props) {

    // prevent function from executing code if no user 
    // if(!props.user) return; 

    const URL = 'http://localhost:3000/profile/'

    const getUserRef = useRef(null);

    const getUser = async () => {
        const token = await props.user.getIdToken();
        console.log(token)
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer' + token
            }
        });
    }

    useEffect(() => {
        getUserRef.current = getUser;
    });

    useEffect(() => {
        getUserRef.current();
    }, []);

 
    return(<h1>My Profile</h1>)
}