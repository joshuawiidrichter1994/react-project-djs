import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <h1>Header1</h1>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;
