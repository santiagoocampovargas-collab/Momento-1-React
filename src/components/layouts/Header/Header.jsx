const Header = () => {
  return (
    <header className="topbar">
      <div className="contenedor topbar-interno">
        <a href="/" className="marca">
          Sazón
        </a>
        <nav className="navegacion">
          <a href="/" className="activo">
            Catálogo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;