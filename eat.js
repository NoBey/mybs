import React    from 'react';
import ReactDOM from 'react-dom';
import './eat.css'
import f1 from './img/eat/1.png';
import f2 from './img/eat/2.png';
import f3 from './img/eat/3.png';
import f4 from './img/eat/4.png';
import f5 from './img/eat/5.png';
import f6 from './img/eat/6.png';
import f7 from './img/eat/7.png';
import f8 from './img/eat/8.png';
import f9 from './img/eat/9.png';
import f10 from './img/eat/10.png';
const imglist = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]

const Food = () => <div className={'food'}><img className={'fooditem'} src={f1} /></div>

export default  class Eat extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        ok: false
      };
  }
  componentDidMount() {
    let time = 100
    for (var i = 0; i < 10; i++) {
      setTimeout( ()=> {
        this.cc()
      }, time);
      time = time + 400
    }
  }
  cc(){
    const that = this
    let left = Math.ceil(Math.random()*80)
    let i = Math.ceil(Math.random()*10)-1
    $('.eatwarp').append($(`<div style=' left: ${left}vw;' class='food'><img class='fooditem' src='${imglist[i]}' /></div>`).click(function(e){
      e.stopPropagation()
      $(this).remove()
      that.cc()
    }))
  }

  render() {
    const ok = this.state.ok
    return (
      <div className={'eatwarp'} {...this.props} >

      </div>
    );
  }
}
