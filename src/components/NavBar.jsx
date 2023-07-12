import { Link } from 'react-router-dom';

const links = [
  { path: '/books', text: 'Books' },
  { path: '/categories', text: 'Categories' },
];

const NavBar = () => (
  <header className="navbar-container">
    <nav className="nav-bar">
      <h1 className="logo"><Link to="/">Bookstore</Link></h1>
      <ul className="nav-link">
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default NavBar;
