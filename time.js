import React    from 'react';
import ReactDOM from 'react-dom';
import './time.css'
import moom from './img/time/1.png'
import sum from './img/time/2.png'

export default  class Time extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        ok: false
      };
  }
  componentDidMount() {

  }
  moom(e){
    e.stopPropagation()
    $('.moom').animate({'top': '-50vh'})
    $('.sum').css({top: '120vh'}).animate({'top': '10vh'})
  }
  sum(e){
    e.stopPropagation()
    
    $('.sum').animate({'top': '-50vh'})
    $('.moom').css({top: '120vh'}).animate({'top': '10vh'})
  }
  render() {
    const ok = this.state.ok
    return (
      <div className={'timewarp'} {...this.props} >


    <img onClick={this.moom.bind(this)} className={'moom'} src={moom} />
    <img onClick={this.sum.bind(this)}  className={'sum'} src={sum} />


      </div>
    );
  }
}
