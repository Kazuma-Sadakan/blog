import NavBar from './layouts/NavBar';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
// import SinglePage from './pages/SinglePage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      {/* NavBar  */}
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="posts" element={<PostsPage/>} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
