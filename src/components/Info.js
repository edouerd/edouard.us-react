import React, { Component } from 'react'
import { Link } from 'react-router'
import 'tachyons/css/tachyons.css'

class Info extends Component {
  render() {
    return (
      <section>

        <p className="lh-copy black-40 ph2">More ⤵︎</p>

        <ol className="lh-copy ph2">
          <li>No-brainer social networking: <a className="black-40 link hover-black" href="https://www.facebook.com/edouerd">Facebook</a>, <a className="black-40 link hover-black" href="https://twitter.com/edouerd">Twitter</a>, and <a className="black-40 link hover-black" href="https://www.instagram.com/edouerd">Instagram</a>.</li>
          <li>Open sourcing projects on <a className="black-40 link hover-black" href="https://github.com/edouerd">Github</a>.</li>
          <li>Hyperlinking and researching on <a className="black-40 link hover-black" href="https://www.are.na/edouard-u">Arena</a>, documenting and sketching on <a className="black-40 link hover-black" href="http://ed.tumblr.com/">Tumblr</a>.</li>
        </ol>

        <p className="lh-copy black-40 ph2">Context ⤵︎</p>
        <p className="lh-copy ph2">
          I was born in Tucson, Arizona. It is a <a className="black-40 link hover-black" href="https://en.wikipedia.org/wiki/Davis%E2%80%93Monthan_Air_Force_Base">military</a> town, a <a className=" black-40 link hover-black" href="https://en.wikipedia.org/wiki/University_of_Arizona">university</a> town, an <a className=" black-40 link hover-black" href="https://en.wikipedia.org/wiki/Optics_Valley">optics</a> town, an <a className="black-40 link hover-black" href="http://warehouseartsdistrict.com/">art</a> town, and a <a className=" black-40 link hover-black" href="https://en.wikipedia.org/wiki/Sonoran_Desert">desert</a> town. Each of these respective facets of the city <em>have</em> had a huge influence on my design practice, and <em>will</em> for the foreseeable future.
        </p>
        <p className="lh-copy ph2">I can build any system, large or small.</p>
        <p className="lh-copy ph2">In my extra time, I think about curatorial practice, Mars, and death culture(s).</p>
        <p className="lh-copy ph2">
          <Link to='/pgp' className="red link">PGP</Link>
        </p>

      </section>
    );
  }
}

export default Info;
