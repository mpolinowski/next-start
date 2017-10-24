import Link from 'next/link'

const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb">
      <Link href="/"><a className="nav-item nav-link"><img src="/static/rr4_s.png" alt="INSTAR Wiki" /></a></Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#TopNavbar" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="TopNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/page-1"><a className="nav-item nav-link">Page 1</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/page-2"><a className="nav-item nav-link">Page 2</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/nested-routes"><a className="nav-item nav-link">Nested Routes</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default NavBar
