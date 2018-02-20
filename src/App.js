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
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'


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
    const styles = theme => ({
      grid: {
        flexGrow: 1,
        marginTop: 10,
        marginBottom: 20
      },
      root: {
        width: '100%'
      }
    })

    return (
      <MuiThemeProvider theme={theme}>
        <MenuAppBar/>
        <Grid container className={styles.grid}>
          <Grid item sm={12} lg={12} xl={12}>
              <Fields/>
          </Grid>
          <Grid item sm={12} lg={12} xl={12}>
            <Grid container alignItems={'center'} direction={'row'} justify={'center'}>
              <Form/>
            </Grid>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

export default App
