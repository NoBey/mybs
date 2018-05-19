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

  }

  render() {
    const ok = this.state.ok
    return (
      <div className={'lampwarp'} {...this.props}>
      {
        ok ? <img className={'lamp '} style={{width: '100vw'}} src={lamp} /> : <img className={'lamp '} style={{width: '24vw',position:'absolute',marginLeft: '38vw'}} src={lamp2} />
      }
      <img className={'down xian'} src={xian} onClick={() => this.setState({ok: !ok}) } />

      </div>
    );
  }
}
