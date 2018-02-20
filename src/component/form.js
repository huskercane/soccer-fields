// src/js/components/Form.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import uuidv1 from "uuid";
import { updateFieldDetail } from '../action/expense'
import Button from 'material-ui/Button'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import Paper from 'material-ui/Paper'
import { FormControl, FormHelperText } from 'material-ui/Form'

const mapDispatchToProps = dispatch => {
  return {
    updateFieldDetail: article => dispatch(updateFieldDetail(article))
  }
}

class ConnectedForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      day: '',
      time: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const day = event.target.elements.day.value
    const time = event.target.elements.time.value
    this.props.updateFieldDetail({ day: day, time: time })
    this.setState({ day: day, time: time })
  }

  render() {
    // const { day, time } = this.state
    const styles = theme => ({
      root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3
      }),
      paper: {
        padding: theme.spacing.unit * 2,
        height: '100%',
        paddingTop: 10, paddingBotom: 10
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1
      },
      formControl: {
        margin: theme.spacing.unit,
        minWidth: 120
      },
      button:
        {
          margin: theme.spacing.unit
        },
      input: {
        display: 'none'
      },
      selectEmpty: {
        marginTop: theme.spacing.unit * 2
      }
    })

    return (
      <Paper className={styles.paper} elevation={4}>
        <form className={styles.form} autoComplete='off' onSubmit={this.handleSubmit}>
          <FormControl className={styles.formControl}>
            <Select
              value={this.state.day}
              onChange={this.handleChange}
              inputProps={{
                name: 'day',
                id: 'day-simple'
              }}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Monday</MenuItem>
              <MenuItem value={2}>Tuesday</MenuItem>
              <MenuItem value={3}>Wednesday</MenuItem>
              <MenuItem value={4}>Thursday</MenuItem>
              <MenuItem value={5}>Friday</MenuItem>
              <MenuItem value={6}>Saturday</MenuItem>
              <MenuItem value={7}>Sunday</MenuItem>
            </Select>
            <FormHelperText>Day of Practice</FormHelperText>
          </FormControl>
          <FormControl className={styles.formControl}>
            <Select
              value={this.state.time}
              onChange={this.handleChange}
              inputProps={{
                name: 'time',
                id: 'time-simple'
              }}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>5:45-6:4</MenuItem>
              <MenuItem value={2}>6:45-7:45</MenuItem>
              <MenuItem value={3}>7:45-8:45</MenuItem>
            </Select>
            <FormHelperText>Time of Practice</FormHelperText>
          </FormControl>
          <FormControl className={styles.formControl}>
            <Button type='submit' variant='raised' className={styles.button}>
              Update Fields
            </Button>
          </FormControl>
        </form>
      </Paper>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)
export default Form
