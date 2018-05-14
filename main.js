import React    from 'react';
import ReactDOM from 'react-dom';
const app = document.querySelector('#app');
import b1 from './img/1.png'
import b2 from './img/2.png'
import b3 from './img/3.png'
import b4 from './img/4.png'
import b5 from './img/5.png'
import b6 from './img/6.png'
import b7 from './img/7.png'
import b8 from './img/8.png'
import b9 from './img/9.png'
import b10 from './img/10.png'
import b11 from './img/11.png'
import b12 from './img/12.png'


class Example extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        top: 0,
        y:null,
      };
  }
  componentDidMount() {
    $('.brain img').click(function(){
      $(this).toggleClass('bdown') //.delay(1000).toggleClass('bdown')
      setTimeout( ()=> {
        $(this).toggleClass('bdown')
      }, 400);
    })
    $('.brain img').each(function(){
      let w = this.naturalWidth;
      let h = this.naturalHeight;
      $(this).width(w/980*100+'vw')
    })
  }
  touchstart(e){
    var y = e.targetTouches[0].pageY; //touches数组对象获得屏幕上所有的touch，取第一个touch
    this.setState({y})
  }
  touchmove(e){
    var top = this.state.top - (e.targetTouches[0].pageY-this.state.y)/5
    this.setState({top})

  }

  render() {
    const {top} = this.state;
    return (
      <div className={'warp'} onTouchStart={this.touchstart.bind(this)}  onTouchMove={this.touchmove.bind(this)}>
      {
         <div className={'bg'} />
      }
      <div className={'brain'} style={{top}} >
       <img className={'b1'} src={b1}/>
       <img className={'b2'} src={b2}/>
       <img className={'b3'} src={b3}/>
       <img className={'b4'} src={b4}/>
       <img className={'b5'} src={b5}/>
       <img className={'b6'} src={b6}/>
       <img className={'b7'} src={b7}/>
       <img className={'b8'} src={b8}/>
       <img className={'b9'} src={b9}/>
       <img className={'b10'} src={b10}/>
       <img className={'b11'} src={b11}/>
       <img className={'b12'} src={b12}/>
      </div>

      </div>
    );
  }
}

ReactDOM.render(<Example/>, app);
