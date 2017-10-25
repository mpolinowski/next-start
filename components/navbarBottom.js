import Link from 'next/link'

const NavBarBottom = () => (
  <div>
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/"><a className="nav-item nav-link">Go Home</a></Link>
        </li>
      </ul>
    </nav>
  </div>
)


export default NavBarBottom
