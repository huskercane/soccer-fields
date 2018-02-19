import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
// import MyFancyComponent from './FieldMap.js'
// import StyledMapWithAnInfoBox from './styledinfobox.js'
import Fields from './styledinfobox'
import Form from './component/form'
import 'typeface-roboto'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { purple, green } from 'material-ui/colors'

// import logo from './logo.svg';
import MenuAppBar from './component/MenuAppBar.js'


class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: purple,
        secondary: green
      },
      status: {
        danger: 'orange'
      }
    })

    return (
      <MuiThemeProvider theme={theme}>
        <MenuAppBar/>
        <Fields/>
        <Form/>
      </MuiThemeProvider>
    )
  }
}

export default App
