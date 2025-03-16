import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">About</Link> | 
        <Link to="/profile">Profile</Link> |
        <Link to="/post/1">View Post 1</Link>
      </nav>
    </div>
  );
};

export default Home;
