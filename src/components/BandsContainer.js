import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands delete={this.props.deleteBand} bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch({ type: "ADD_BAND", name}),
    deleteBand: id => dispatch({ type: "DELETE_BAND", id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)