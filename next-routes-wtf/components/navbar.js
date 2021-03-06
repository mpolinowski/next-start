import Link from 'next/link'

const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top mb">
      <Link href="/"><a className="nav-item nav-link"><img src="/static/logo.svg" alt="INSTAR Wiki" /></a></Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#TopNavbar" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="TopNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/products/outdoor-cameras"><a className="nav-item nav-link">Outdoor Cameras</a></Link>
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

    <style jsx>{`
        img {
          height: 50px;
          width: 160px;
        }
        `}</style>

    </div>
)


export default NavBar




// img {
//   height: 40px;
//   width: 128px;
// }
