import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as IndexActions from './store/index.action'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { num ,Addnum} = this.props
     
    return (
      <div>
        <p>
          <button >减少</button>
          <span>
            {num}
          </span>
          <button onClick={Addnum}>增加</button>
        </p>
      </div>
    );
  }
}
const mapState = state => ({ ...state })
  const getProps = (dispatch) => bindActionCreators(IndexActions,dispatch)
export default connect(mapState,getProps)(App);