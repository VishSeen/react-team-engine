import './style.css';

const NavBar = ({
  navItems
}) => {
  return (
    <div className="nav-bar">
      <ul style={{
        width: '100%'
      }}>
        {navItems.map(item => {
          return (
            <li key={item.id}>
              <a href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavBar;