import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">La Brigade</div>
      <div className="links">
        {/* NavLink ajoute automatiquement la classe "active" si l'URL correspond */}
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/plates">Menu</NavLink>
        <NavLink to="/profile">Mon Profil</NavLink>
        <NavLink to="/login">Connexion</NavLink>
      </div>
    </nav>
  );
}