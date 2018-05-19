import React    from 'react';
import ReactDOM from 'react-dom';
import './music.css'
import wrapimg from './img/music/1.png'
import img2 from './img/music/2.png'
import img3 from './img/music/3.png'

import m1 from './img/music/4.png'
import m2 from './img/music/5.png'
import m3 from './img/music/6.png'
import m4 from './img/music/7.png'

let imglist = [m1, m2, m3, m4]

export default  class Music extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        ok: false
      };
  }
  componentDidMount() {

  }

  cc(){
    let l = []

    for (var i = 0; i < 10; i++) {
      let time = 4000 + Math.ceil(Math.random()*1000) * 5
      let p = Math.ceil(Math.random()*4)-1
      console.log(p)
      l.push(
        <img key={'music' + i} className={'mm'} src={imglist[p]} style={{animation: `mm ${time}ms infinite`}} />
      )
    }
    return l
  }

  render() {
    const ok = this.state.ok
    return (
      <div className={'musicwarp'} {...this.props}>
       <img className={'music1'} src={wrapimg} />
       <img className={'music2'} src={img2} />
       <img className={'music3'} src={img3} />
       <img className={'mm'} src={m1} />
       {
         this.cc()
       }
      </div>
    );
  }
}
