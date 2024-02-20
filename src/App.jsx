import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import SignUpPage from './Front/Authentification/Pages/SignUpPage'
import HomePage from './Front/Home/Page/HomePage';
import Dashboard from './Front/Dashboard/Page/Dashboard';
import UserProfile from './Front/User/Page/UserProfile';
import UserProfileInterface from './Front/User/Components/UserProfileInterface';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="dash" element={<Dashboard />} >
            <Route path="profile" element={<UserProfileInterface />} />
          </Route>
          <Route path="home" element={<HomePage />} />
          <Route path="sign" element={<SignUpPage />} />
        </Routes>
      </Router>
      <Outlet />
    </>
  );
}

export default App;
