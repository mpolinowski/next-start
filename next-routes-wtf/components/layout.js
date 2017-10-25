import Link from 'next/link'
import Head from 'next/head'
import NavBar from './navbar'
import NavBarBottom from './navbarBottom'


export default ({ children, title = 'Next.js Default Title' }) => (
  <div>

    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
    </Head>

    <header>
      <NavBar />
    </header>

    <div className="container-fluid">
      <div className="row">
        <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="/">Overview <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Reports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Analytics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Export</a>
            </li>
          </ul>

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/">Nav item</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Nav item again</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">One more nav</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Another nav item</a>
            </li>
          </ul>

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/">Nav item again</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">One more nav</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Another nav item</a>
            </li>
          </ul>
        </nav>

        <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">

        { children }

        </main>
      </div>
    </div>

    <footer>

      <NavBarBottom />

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossOrigin="anonymous" />
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossOrigin="anonymous" />

    </footer>

    <style jsx>{`
          .sidebar .nav-link {
            border-radius: 0;
            margin: 0 -15px 0 -15px;
          }
        `}</style>

  </div>

)
