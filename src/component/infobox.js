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
      ...props
      // fieldDetail: {},
      // action: {
      //   time: 0
      // }
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
        ...props
      }
    )
  }

  render() {
    const color = this.state.color
    return (
      <InfoBox
        defaultPosition={new google.maps.LatLng(this.state.latitude, this.state.longitude)}
        options={
          {
            closeBoxURL: ``,
            enableEventPropagation: true,
            pane: 'overlayLayer',
            pixelOffset: new google.maps.Size(-50, 30),
            alignBottom: true,
            boxStyle: {
              // boxShadow: `3px 3px 10px rgba(0,0,0,0.6)`
              boxShadow: `3px 3px 10px ${color}`
            }
          }
        }
      >
        <div id='content' className={'google_map_infobox'}>
          {this.state.content}
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
