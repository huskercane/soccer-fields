/* global google */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FieldInfoBox from './infobox'

const {
  Rectangle
} = require('react-google-maps')


class AField extends Component {
  /**
   * constructor
   * @param {Map} props default props
   */
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
        ...props
      }
    )
  }

  render() {
    const configTwoDifference = 0.000600
    const fieldHeight = 0.000153
    const fieldWidth = 0.000240
    let startLatitude = this.props.latitude
    const x = startLatitude + fieldHeight

    const fieldNumber = this.props.fieldNumber
    const day = this.state.action.day
    const field = this.state[day] ? this.state[day] : {}

    const fieldSchedule = field[fieldNumber]
    const colors = ['#4885ed', '#db3236', 'f4c20d', '3cba54']

    const fileDetail = fieldSchedule ? fieldSchedule[this.state.action.time] : 0
    const config = fileDetail === 0 ? [] : Array.from(new Array(fileDetail.config), (val, index) => index)
    return (
      // iterate over all field in config and add to map
      config.map((key) => {
        const coach = fileDetail[key + 1].coach

        const latLng = new google.maps.LatLng(startLatitude, this.props.startLongitude)
        const latLng2 = new google.maps.LatLng(x, this.props.startLongitude + fieldWidth)
        const latLng3 = new google.maps.LatLng(startLatitude, this.props.startLongitude + fieldWidth + 0.000100)
        const latLng4 = new google.maps.LatLng(x, this.props.startLongitude + 2 * fieldWidth + 0.000100)

        let latLngBounds = new google.maps.LatLngBounds(latLng, latLng2)
        if (key % 2 === 0) {
          latLngBounds = new google.maps.LatLngBounds(latLng3, latLng4)
          startLatitude = startLatitude + configTwoDifference
        }

        const color = colors[key % 4]
        const newVar = {
          strokeColor: color,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: color,
          fillOpacity: 0.35
        }
        return (
          <div key={key}>
            {<FieldInfoBox latitude={startLatitude} longitude={this.props.startLongitude} content={coach}/>}
            <Rectangle bounds={latLngBounds} options={newVar}/>
          </div>
        )
      })
    )
  }
}

AField.propTypes = {
  fieldNumber: PropTypes.number.isRequired,
  startLongitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  // let fd = state[state.action.day]
  // if (!fd) {
  //   fd = {}
  // }
  // return {
  //   fieldDetail: fd,
  //   action: state.action
  // }
  // console.debug(state)
  return state
}

const Field = connect(mapStateToProps)(AField)

export default Field
