import './style.css';

const NavBar = ({
  navItems
}) => {
  return (
    <nav className="nav-bar" role="navigation" aria-label="main navigation">
      <ul className="navbar-menu" style={{
        width: '100%'
      }}>
        {navItems.map(item => {
          return (
            <li key={item.id} className='nav-item'>
              <a href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar;