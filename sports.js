import React    from 'react';
import ReactDOM from 'react-dom';
import './sports.css'

import sp1 from './img/sports/1.png'
import sp2 from './img/sports/2.png'
import sp3 from './img/sports/3.png'
import sp4 from './img/sports/4.png'


export default  class Sports extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        ok: false
      };
  }
  componentDidMount() {
  }
  down(e){
    e.stopPropagation()
    $('.stop').removeClass('stop').addClass('run')
  }
  up(e){
    e.stopPropagation()

    $('.run').removeClass('run').addClass('stop')
  }
  stopPropagation(e){
    e.stopPropagation()
    e.preventDefault()
  }
  render() {
    const ok = this.state.ok
    return (
      <div className={'sportswarp'} {...this.props}>
      <img className={'sp1'} src={sp1} />
      <img className={'sp2 stop'} src={sp2} />
      <img className={'sp3 stop'} src={sp3} />
      <img className={'sp4 stop'} onClick={this.stopPropagation.bind(this)} onTouchStart={this.down.bind(this)}  onTouchEnd={this.up.bind(this)} onTouchMove={this.up.bind(this)} src={sp4} />
      <img className={'sp5 stop'} onClick={this.stopPropagation.bind(this)} onTouchStart={this.down.bind(this)} onTouchEnd={this.up.bind(this)} onTouchMove={this.up.bind(this)} src={sp4} />
      </div>
    );
  }
}
