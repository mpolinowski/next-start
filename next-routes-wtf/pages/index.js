import Layout from '../components/layout'
import { Link, Router } from '../routes'

export default () =>
    <Layout>
      <div>

        <section className="container">
          <h1>Welcome to next.js!</h1>
          <h3>The awesome World of Server-side Rendering</h3>
          <h5>let's see what this is all about</h5>
          <br/><br/>
        </section>

        <section className="container">
          <ul>
            <li><Link route='products' params={{ slug: 'indoor-cameras' }}><a>Indoor Cameras</a></Link></li>
            <li><Link route='products' params={{ slug: 'outdoor-cameras' }}><a>Outdoor Cameras</a></Link></li>
            <li><Link route='products' params={{ slug: 'index' }}><a>Products</a></Link></li>
            <li><button onClick={() => Router.pushRoute('about', { foo: 'bar' })} className="btn btn-primary">About foo bar</button></li>
            <li><button onClick={() => Router.pushRoute('about', { foo: 'baz' })} className="btn btn-primary">About foo baz</button></li>
          </ul>
        </section>

        <section className="row text-center placeholders">
          <div className="col-6 col-sm-3 placeholder">
            <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
            <h4>Blue</h4>
            <span className="text-muted">Something else</span>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
            <h4>Green</h4>
            <span className="text-muted">Something else</span>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
            <h4>Blue</h4>
            <span className="text-muted">Something else</span>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
            <h4>Green</h4>
            <span className="text-muted">Something else</span>
          </div>
        </section>

        <section className="container">
          <br/><br/>
          <p className="text-justify">
            Craft beer coloring book art party, chia synth before they sold out 3 wolf moon air plant single-origin coffee dreamcatcher fashion axe farm-to-table tumeric occupy. Deep v heirloom fixie enamel pin air plant salvia single-origin coffee, locavore kitsch. Chillwave enamel pin irony, kale chips lomo kogi chicharrones four loko. Tofu af lyft sriracha helvetica glossier ramps mustache prism. Vinyl deep v craft beer, kickstarter flexitarian bitters kinfolk. Master cleanse asymmetrical quinoa, adaptogen kickstarter gluten-free vaporware coloring book williamsburg. Prism williamsburg cardigan pop-up, four loko waistcoat truffaut 8-bit skateboard pickled quinoa. Small batch drinking vinegar biodiesel cornhole sartorial portland farm-to-table vexillologist YOLO readymade. PBR&B vexillologist small batch offal woke pour-over brunch chartreuse flexitarian subway tile kogi food truck. Hashtag keffiyeh la croix craft beer. Try-hard VHS DIY tofu, slow-carb typewriter chicharrones food truck keytar hexagon hammock subway tile tumblr kombucha pour-over. Synth roof party unicorn mustache 90's cray raclette. Kinfolk vinyl photo booth shaman, you probably haven't heard of them seitan taxidermy. Celiac before they sold out heirloom farm-to-table, hammock tote bag slow-carb polaroid typewriter.<br/><br/>
            Oh. You need a little dummy text for your mockup? How quaint.<br/><br/>
            I bet you’re still using Bootstrap too…
          </p>
          <br/><br/>
        </section>

        <section className="container">
          <br/><br/>
            <h2>Ipsum Table</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>amet</td>
                    <td>consectetur</td>
                    <td>adipiscing</td>
                    <td>elit</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>Integer</td>
                    <td>nec</td>
                    <td>odio</td>
                    <td>Praesent</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>libero</td>
                    <td>Sed</td>
                    <td>cursus</td>
                    <td>ante</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>dapibus</td>
                    <td>diam</td>
                    <td>Sed</td>
                    <td>nisi</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>Nulla</td>
                    <td>quis</td>
                    <td>sem</td>
                    <td>at</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>nibh</td>
                    <td>elementum</td>
                    <td>imperdiet</td>
                    <td>Duis</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>sagittis</td>
                    <td>ipsum</td>
                    <td>Praesent</td>
                    <td>mauris</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>Fusce</td>
                    <td>nec</td>
                    <td>tellus</td>
                    <td>sed</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>augue</td>
                    <td>semper</td>
                    <td>porta</td>
                    <td>Mauris</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>massa</td>
                    <td>Vestibulum</td>
                    <td>lacinia</td>
                    <td>arcu</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>eget</td>
                    <td>nulla</td>
                    <td>Class</td>
                    <td>aptent</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>taciti</td>
                    <td>sociosqu</td>
                    <td>ad</td>
                    <td>litora</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>torquent</td>
                    <td>per</td>
                    <td>conubia</td>
                    <td>nostra</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>per</td>
                    <td>inceptos</td>
                    <td>himenaeos</td>
                    <td>Curabitur</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>sodales</td>
                    <td>ligula</td>
                    <td>in</td>
                    <td>libero</td>
                  </tr>
                </tbody>
              </table>
            </div>
          <br/><br/><br/><br/>
        </section>

      </div>
    </Layout>
