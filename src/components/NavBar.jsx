import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import '../styles/NavBar.css';

const links = [
  { path: '/books', text: 'Books' },
  { path: '/categories', text: 'Categories' },
];

const NavBar = () => (
  <header className="navbar-container">
    <nav className="nav-bar">
      <h1 className="logo">Bookstore CMS</h1>
      <ul className="nav-link">
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
        <li>
          <ImUser
            style={{
              color: '#0290ff', backgroundColor: '#fff', border: '1px solid #e8e8e8', borderRadius: '50%', padding: '5px',
            }}
          />
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
