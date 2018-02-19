/* global google */
import React from 'react'
import Field from './component/rectangle'
import Paper from 'material-ui/Paper'

const { compose, withProps } = require('recompose')
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} = require('react-google-maps')

const fieldLatitude = 26.107023

const fieldOneLongitudeStart = -80.424711
const fieldOneLongitudeEnd = -80.424114

const fieldTwoLongitudeStart = -80.423917
const fieldTwoLongitudeEnd = -80.423321

const fieldThreeLongitudeStart = -80.423096
const fieldThreeLongitudeEnd = -80.422531

const fieldFourLongitudeStart = -80.422329
const fieldFourLongitudeEnd = -80.421741

const fieldFiveLongitudeStart = -80.421528
const fieldFiveLongitudeEnd = -80.420947

const fieldSixLongitudeStart = -80.420718
const fieldSixLongitudeEnd = -80.420153

const fieldSevenLongitudeStart = -80.419952
const fieldSevenLongitudeEnd = -80.419347

const fieldList = [
  [fieldOneLongitudeStart, fieldOneLongitudeEnd],
  [fieldTwoLongitudeStart, fieldTwoLongitudeEnd],
  [fieldThreeLongitudeStart, fieldThreeLongitudeEnd],
  [fieldFourLongitudeStart, fieldFourLongitudeEnd],
  [fieldFiveLongitudeStart, fieldFiveLongitudeEnd],
  [fieldSixLongitudeStart, fieldSixLongitudeEnd],
  [fieldSevenLongitudeStart, fieldSevenLongitudeEnd]
]
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})
const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }}/>,
    containerElement: <div style={{ height: `400px` }}/>,
    mapElement: <div style={{ height: `100%` }}/>,
    center: { lat: 26.107, lng: -80.421 }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <div>
    <Paper className={styles.root} elevation={4}>
      (<GoogleMap
      mapTypeId={google.maps.MapTypeId.SATELLITE}
      defaultZoom={18}
      defaultCenter={props.center}
    >
      {

        fieldList.map((field, index) => {
          return (
            <Field key={index} fieldNumber={index + 1} startLongitude={field[0]} latitude={fieldLatitude}/>
          )
        })
      }

    </GoogleMap>
    </Paper>
  </div>

)

export default StyledMapWithAnInfoBox
