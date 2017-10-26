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
            <Link href={`/Products?slug=${'Outdoor_Cameras'}`} as={`/Products/${'Outdoor_Cameras'}`} prefetch><a className="nav-item nav-link">Outdoor Cameras</a></Link>
          </li>
          <li className="nav-item">
            <Link href={`/Products?slug=${'Indoor_Cameras'}`} as={`/Products/${'Indoor_Cameras'}`} prefetch><a className="nav-item nav-link">Indoor Cameras</a></Link>
          </li>
          <li className="nav-item">
            <Link href={`/blog?slug=${'hello-world'}`} as={`/blog/${'hello-world'}`} prefetch><a className="nav-item nav-link">Hello World</a></Link>
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
