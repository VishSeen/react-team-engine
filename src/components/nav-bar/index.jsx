import "./style.css";

const NavBar = ({ navItems }) => {
  return (
    <>
      <nav id="nav-bar-main" class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-menu">
          <div class="navbar-start">
            <div className="navbar-item">
              {navItems.map((item) => {
                return (
                  <a href={item.href} className="nav-link">
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
