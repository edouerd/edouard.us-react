import React, { Component } from 'react';
import 'tachyons/css/tachyons.css';
import '../index.css'
import '../images/mm.gif'

class Home extends Component {

  constructor(props) {
    super(props)
    //     this.state = {

    //     }
    this.coolImageHovers = this.coolImageHovers.bind(this)
  }
    //   componentDidMount() {

    //   }
  coolImageHovers(e) {
    console.log(e)
    // Then make it so the hover happens....
  }

  render() {
    return (
        <section>
        <p className="lh-copy pl2">Ed is a <a href="http://ux.edouard.us/" className="black link hover-black-40">physical–digital product designer</a> né <a href="http://id.edouard.us/" className="black link hover-black-40">industrial designer</a>.</p>
        <div className="lh-copy pl2 measure">Interests and Expertise include: <img src="http://24.media.tumblr.com/87a0cd4b41b215c7197afbe19b50089c/tumblr_myhdjqPI6C1r34zhyo10_r1_500.gif" className="inline" alt="product design" onMouseOver={this.coolImageHovers.bind(this)} /> Product Design, <img src="https://d2w9rnfcy7mm78.cloudfront.net/642839/large_d63897eaf1b18ec00b2f7d361ec465b4" className="inline" alt="industrial design"/> Industrial Design, <img src="https://d2w9rnfcy7mm78.cloudfront.net/789090/large_735f5afb2cc7607278f0012652acb4b8.png" className="inline" alt="systems design"/> Systems Design, <img src="https://d2w9rnfcy7mm78.cloudfront.net/593572/large_73135d9edfc3e8903db7f83491313724.jpg" className="inline" alt="organizational design"/> Organizational Design, <img src="https://d2w9rnfcy7mm78.cloudfront.net/846317/original_22fb3748917b1b03088522d4799d6f87.gif" className="inline" alt="mass manufacturing"/> Mass Manufacture, and other <img src="https://d2w9rnfcy7mm78.cloudfront.net/469319/large_21fa9df23ab28bd9eb82d42c7193de81.jpg" className="inline" alt="mars"/> Large and <img src="https://d2w9rnfcy7mm78.cloudfront.net/757479/large_0feb84ecde4bc9b799016fca2e218c79.jpg" className="inline" alt="wicked problems"/> <span className="georgia i">Wicked</span> projects.</div>
        <div className="popover"></div>

        <p className="lh-copy pl2 black-40">Currently ⤵︎</p>
        <ol className="lh-copy pl2">
          <li>Building new modes of communication at <a href="https://www.tumblr.com/" className="black-40 link hover-blue">Tumblr</a></li>
          <li>Open for biz at <a href="http://mornings.co/" className="black-40 link hover-red">Mornings</a></li>
          <li>Cultivating a meta–organization, <a href="http://learning-gardens.co/" className="black-40 link hover-green">Learning Gardens</a></li>
        </ol>

        <p className="lh-copy pl2 black-40">Previously ⤵︎</p>
        <ol start="4" className="lh-copy pl2 measure">
          <li>Built hyper-complex B<span className="athelas">2</span>B software and started a popular intra-net radio station with friends at <a href="http://www.ibm.com/design/" className="black-40 link hover-black">International Business Machines</a></li>
        </ol>
        <p className="lh-copy pl2">If you'd like, <a href="mailto:mail@edouard.us" className="black-40 link hover-black">send a letter</a> and/or <a href="https://twitter.com/edouerd" className="black-40 link hover-black">@ me</a>. Thanks for visiting, stay a while.</p>

        </section>
    );
  }
}

export default Home;
