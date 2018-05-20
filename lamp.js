import React    from 'react';
import ReactDOM from 'react-dom';
import './lamp.css'
import lamp from './img/lamp/8.png'
import lamp2 from './img/lamp/2.png'
import xian from './img/lamp/4.png'

export default  class Lamp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        ok: false
      };
  }
  componentDidMount() {
    $('.lamp').css({marginTop: '-20vh'})
    $('.lamp').animate({marginTop: '0'})
    $('.xian').css({marginTop: '-60vh'})
    $('.xian').animate({marginTop: '0'})
  }

  render() {
    const ok = this.state.ok
    return (
      <div className={'lampwarp'} {...this.props} >
      <div className={'lamp'}>
      <img  style={ok ? {width: '100vw', animation: 'lamp 2s infinite' } : {width: '24vw',position:'absolute',marginLeft: '38vw', animation: 'lamp 2s infinite'}} src={ok ? lamp : lamp2} />
      </div>
      <img className={'down xian'} src={xian} onClick={(e) => {
        e.stopPropagation()
        this.setState({ok: !ok})
      } } />

      </div>
    );
  }
}
