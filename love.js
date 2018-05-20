import React    from 'react';
import ReactDOM from 'react-dom';
import './love.css'
import imgl from './img/love/l.png';
import imgr from './img/love/r.png';



export default  class Love extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        ok: false
      };
  }
  componentDidMount() {
    $('.love').css({top: '120vh'}).animate({top: '30vh'}, 1300)
  }
  ok(e){
    e.stopPropagation()
    $('.love1').addClass('lovel')
    $('.love2').addClass('lover')
    setTimeout( ()=> {
      this.props.onClick()
    }, 3000);
  }

  render() {
    const ok = this.state.ok
    return (
      <div className={'lovewarp'} {...this.props} >
       <div className={'love'} onClick={this.ok.bind(this)}>
         <img className={'love1'} src={imgl} />
         <img className={'love2'} src={imgr} />
       </div>
      </div>
    );
  }
}
