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

  _number

  render() {
    const configTwoDifference = 0.000300
    const fieldHeight = 0.000153
    const fieldWidth = 0.000240
    let startLatitude = this.state.latitude

    const fieldNumber = this.state.fieldNumber
    const day = this.state.action.day
    const field = this.state[day] ? this.state[day] : {}

    const fieldSchedule = field[fieldNumber]
    const colors = ['#4885ed', '#db3236', '#f4c20d', '#4885ed', '#3cba54', '#db3236']

    const fileDetail = fieldSchedule ? fieldSchedule[this.state.action.time] : undefined
    const config = fileDetail === undefined ? [] : Array.from(new Array(fileDetail.config), (val, index) => index)

    let z = startLatitude
    return (
      // iterate over all field in config and add to map
      config.map((key) => {
        let x = z + fieldHeight
        const coach = fileDetail[key + 1].coach

        const latLng = new google.maps.LatLng(z, this.state.startLongitude)

        let number = this.state.startLongitude + fieldWidth
        const latLng2 = new google.maps.LatLng(x, number)
        const latLng3 = new google.maps.LatLng(z, number + 0.000100)
        const _number = this.state.startLongitude + 2 * fieldWidth
        const latLng4 = new google.maps.LatLng(x, _number + 0.000100)

        let latLngBounds = new google.maps.LatLngBounds(latLng, latLng2)
        if (key % 2 === 1) {
          latLngBounds = new google.maps.LatLngBounds(latLng3, latLng4)
          z = z + configTwoDifference
          number = _number
        }

        const color = colors[key % 6]
        const newVar = {
          strokeColor: color,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: color,
          fillOpacity: 0.35
        }
        return (
          <div key={key}>
            {<FieldInfoBox latitude={latLng.lat()} longitude={number} content={coach} color={color}/>}
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
