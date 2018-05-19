import React    from 'react';
import ReactDOM from 'react-dom';
import './eat.css'

export default  class Eat extends React.Component {
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
      <div className={'eatwarp'} {...this.props} >

      </div>
    );
  }
}
