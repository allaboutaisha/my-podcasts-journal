import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MyEntriesPage from '../MyEntriesPage/MyEntriesPage';
import MyPodcastsPage from '../MyPodcastsPage/MyPodcastsPage';
import NavBar from '../../components/NavBar/NavBar'; 
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import AddPodcastPage from '../AddPodcastPage/AddPodcastPage';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';


export default function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    
    return () => {
      // cleanup actions
      unsubscribe();
    }
  }, []);

  return (
    <main className="App">
      <>
       <NavBar user={user} setUser={setUser} /> 
      </>
        <Routes>
          <Route path="/entries" element={<MyEntriesPage /> } />
          <Route path="/podcasts" element={<MyPodcastsPage /> } />
          <Route path="/podcasts/new" element={<AddPodcastPage /> } />
          <Route path="/home" element={<HomePage /> } />
          <Route path="/profile" element={<ProfilePage user={user} /> } />
          <Route path="/home" element={<HomePage /> } />
          <Route path="/signup" element={<SignUpPage setUser={setUser} /> } />
          <Route path="/login" element={<LogInPage setUser={setUser} /> } />

        </Routes>
    
    </main>
  ); 
} 