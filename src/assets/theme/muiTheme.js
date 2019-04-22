import { createMuiTheme } from '@material-ui/core/styles'
import 'typeface-open-sans'
import 'typeface-permanent-marker'
import './app.css'

const status = {
  white: '#ffffff',
  black: '#040001',
  greyLt: '#F7F5F5',
  greyMed: '#656565',
  grey: '#c5c6c7',
  greyDk: '#404040',
  green: '#00942b',
  yellow: '#fce566',
  red: '#FF0012',
  blue: '#015b99',
  blueLt: '#0172c0',
  blueDk: '#014472',
  orange: '#c56113',
  orangeDk: '#c56113',
  orangeLt: '#ebab2f',
  tan: '#FFFBEF',
}

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: status.blueLt,
      main: status.blue,
      dark: status.blueDk,
    },
    secondary: {
      light: status.orangeLt,
      main: status.orange,
      dark: status.orangeDk,
    },
    error: { main: status.red },
  },
  status,
  typography: {
    useNextVariants: true,
    fontFamily: "'Open Sans', sans-serif",
    h5: {
      letterSpacing: 3,
    },
    h2: {
      fontFamily: "'Permanent Marker', cursive",
    },
    body1: {
      letterSpacing: 1,
      lineHeight: 1.8,
      //TODO is this an error in MUI? not sure why its default is 16 when MUI default is 14
      fontSize: 14,
    },
    body2: {
      letterSpacing: 1,
      fontSize: 14,
    },
    button: {
      letterSpacing: 3,
    },
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: status.black,
      },
      colorSecondary: {
        color: status.orangeLt,
      },
      colorTextSecondary: {
        color: status.white,
      },
    },
    MuiButton: {
      root: {
        padding: '9px 27px',
        borderRadius: 0,
      },
      contained: {
        boxShadow: 'none',
      },
    },
  },
})

export default theme
