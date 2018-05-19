import React    from 'react';
import ReactDOM from 'react-dom';
import './sports.css'

import sp1 from './img/sports/1.png'
import sp2 from './img/sports/2.png'
import sp3 from './img/sports/3.png'


export default  class Sports extends React.Component {
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
      <div className={'sportswarp'} {...this.props}>
      <img className={'sp1'} src={sp1}/>
      <img className={'sp2'} src={sp2}/>
      <img className={'sp3'} src={sp3}/>
      </div>
    );
  }
}
