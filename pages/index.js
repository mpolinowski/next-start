import styles, { hipsterum, imagefloat } from './styles/hipsterum'

export default () =>
  <div>

    <h1>Welcome to next.js!</h1>
    <h3>The awesome World of Server-side Rendering</h3>
    <h5>let's see what this is all about</h5>
    <img src="/static/test.png" className="imagefloat"/>
    <p className="hipsterum">
      Craft beer coloring book art party, chia synth before they sold out 3 wolf moon air plant single-origin coffee dreamcatcher fashion axe farm-to-table tumeric occupy. Deep v heirloom fixie enamel pin air plant salvia single-origin coffee, locavore kitsch. Chillwave enamel pin irony, kale chips lomo kogi chicharrones four loko. Tofu af lyft sriracha helvetica glossier ramps mustache prism. Vinyl deep v craft beer, kickstarter flexitarian bitters kinfolk. Master cleanse asymmetrical quinoa, adaptogen kickstarter gluten-free vaporware coloring book williamsburg. Prism williamsburg cardigan pop-up, four loko waistcoat truffaut 8-bit skateboard pickled quinoa. Small batch drinking vinegar biodiesel cornhole sartorial portland farm-to-table vexillologist YOLO readymade. PBR&B vexillologist small batch offal woke pour-over brunch chartreuse flexitarian subway tile kogi food truck. Hashtag keffiyeh la croix craft beer. Try-hard VHS DIY tofu, slow-carb typewriter chicharrones food truck keytar hexagon hammock subway tile tumblr kombucha pour-over. Synth roof party unicorn mustache 90's cray raclette. Kinfolk vinyl photo booth shaman, you probably haven't heard of them seitan taxidermy. Celiac before they sold out heirloom farm-to-table, hammock tote bag slow-carb polaroid typewriter.<br/><br/>
      Oh. You need a little dummy text for your mockup? How quaint.<br/><br/>
      I bet you’re still using Bootstrap too…
    </p>

    <style jsx>{`
      h1, h5 {
        color: white;
      }
      @media (max-width: 600px) {
        h1, h5 {
          color: black;
        }
      }
    `}</style>

    <style global jsx>{`
      body {
        background: black;
      }
      @media (max-width: 600px) {
        body {
          background-image: url("/static/test.png");
        }
      }
    `}</style>

    <style jsx>{styles}</style>
    <style jsx>{imagefloat}</style>
    <style jsx>{hipsterum}</style>

  </div>
