import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Post from "./components/Post";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />}>
          </Route>
        </Route>

        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
