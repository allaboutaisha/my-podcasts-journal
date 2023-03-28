import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import MyEntriesPage from '../MyEntriesPage/MyEntriesPage';
import LogInPage from '../LogInPage/LogInPage';
import MyPodcastsPage from '../MyPodcastsPage/MyPodcastsPage';
import NavBar from '../../components/NavBar/NavBar'; 
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import AddPodcastPage from '../AddPodcastPage/AddPodcastPage';
import SignUpPage from '../SignUpPage/SignUpPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  // const navigate = useNavigate();
  return (
    <main className="App">
      <>
       <NavBar user={user} setUser={setUser}/> 
      </>
      { user ? 
        <Routes>
          <Route path="/entries" element={<MyEntriesPage /> } />
          <Route path="/podcasts" element={<MyPodcastsPage /> } />
          <Route path="/podcasts/new" element={<AddPodcastPage /> } />
          <Route path="/home" element={<HomePage /> } />
          <Route path="/profile" element={<ProfilePage /> } />
        </Routes> 
      : 
      <>
        <Routes>
          <Route path="/login" element={<LogInPage user={user} setUser={setUser} /> } /> 
          <Route path="/signup" element={<SignUpPage setUser={setUser} /> } />
          <Route path="/home" element={<HomePage /> } />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </>
      }
    </main>
  ); 
} 