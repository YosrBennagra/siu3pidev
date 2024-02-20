import './App.css';
import SignUpPage from './Front/Authentification/Pages/SignUpPage';
import HomePage from './Front/Home/Page/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
