import "./style.css";

const NavBar = ({ navItems }) => {
  return (
    <>
      <nav id="nav-bar-main" className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              {navItems.map((item) => {
                return (
                  <a href={item.href} key={item.id} className="nav-link">
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
