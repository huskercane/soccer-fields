// src/js/components/Form.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import uuidv1 from "uuid";
import { updateFieldDetail } from '../action/expense'

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
    // TODO: set these in the state
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    // const title = this.state
    const day = event.target.elements.day.value
    const time = event.target.elements.time.value
    this.props.updateFieldDetail({ day: day, time: time })
    this.setState({ title: '', day: day, time: time })
  }

  render() {
    const { day, time } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='day'>Day</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={day + '-' + time}
            onChange={this.handleChange}
          />
        </div>
        <select id='day' name='day'>
          <option value='' />
          <option value='1'>Monday</option>
          <option value='2'>Tuesday</option>
          <option value='3'>Wednesday</option>
          <option value='4'>Thursday</option>
          <option value='5'>Friday</option>
        </select>
        <label htmlFor='time'>time</label>
        <select id='time' name='time'>
          <option value='' />
          <option value='1'>5:45-6:45</option>
          <option value='2'>6:45-7:45</option>
          <option value='3'>7:45-8:45</option>
        </select>
        <button type='submit' className='btn btn-success btn-lg'>
          SAVE
        </button>
      </form>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)
export default Form
