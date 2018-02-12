/* global google */
import React from 'react'
import PropTypes from 'prop-types'

const {
  Rectangle
} = require('react-google-maps')
const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox')

const fieldHeight = 0.000153
const fieldWidth = 0.000240

const Field = (props) => {

  const x = props.latitude + fieldHeight
  const y = props.latitude
  console.log(props.latitude, props.startLongitude)
  console.log(x, props.startLongitude + fieldWidth)
  return (
    <div>
      <InfoBox
        defaultPosition={new google.maps.LatLng(y, props.startLongitude)}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div id='content'>
          <h1 id='firstHeading' className='firstHeading'>{props.content}</h1>
        </div>
      </InfoBox>
      <Rectangle
        bounds={new google.maps.LatLngBounds(
          new google.maps.LatLng(
            props.latitude,
            props.startLongitude),
          new google.maps.LatLng(
            x,
            props.startLongitude + fieldWidth)
        )}
      />
    </div>
  )
}

Field.propTypes = {
  content: PropTypes.string.isRequired,
  startLongitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired
}

export default Field
