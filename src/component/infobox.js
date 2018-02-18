/* global google */
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox')

class FieldInfoBox extends Component {
  /**
   * constructor
   * @param {Map} props default props
   */
  constructor(props) {
    super(props)
    this.state = {
      // fieldDetail: {},
      // action: {
      //   time: 0
      // }
    }
  }

  render() {
    return (
      <InfoBox
        defaultPosition={new google.maps.LatLng(this.props.latitude, this.props.longitude)}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div id='content'>
          <h1 id='firstHeading' className='firstHeading'>{this.state.content}</h1>
        </div>
      </InfoBox>
    )
  }
}

FieldInfoBox.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
}

// const mapStateToProps = state => {
//   let fd = state[state.action.day]
//   if (!fd) {
//     fd = {}
//   }
//   return {
//     fieldDetail: fd,
//     action: state.action
//   }
// }
//
// const FieldInfoBox = connect(mapStateToProps)(AFieldInfoBox)

export default FieldInfoBox
