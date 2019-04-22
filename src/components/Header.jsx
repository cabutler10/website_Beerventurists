import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import MobileHeaderList from '../components/MobileHeaderList'
import logo from '../assets/logos/logo.png'
import { connect } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu'

const mapStateToProps = ({ lng }) => {
  return { lng }
}

const mapDispatchToProps = dispatch => {
  return { changeLng: () => dispatch({ type: `LANGUAGE` }) }
}

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  appbarDarkTheme: {
    boxShadow: 'none',
    backgroundColor: theme.status.black,
  },
  toolbar: {
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 170,
      paddingRight: 170,
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 400,
      paddingRight: 400,
    },
  },
  containerXS: {
    display: 'flex',
    justifyContent: 'space-between',
    flexBasis: '100%',
  },
  logo: {
    marginTop: 5,
    width: 'auto',
    height: 35,
    color: theme.status.black,
  },
  logoDarkTheme: {
    marginTop: 5,
    width: 'auto',
    height: 35,
    color: theme.status.white,
  },
  button: {
    color: theme.palette.common.black,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 700,
    paddingRight: 30,
    paddingLeft: 30,
    '&:hover': {
      color: theme.palette.primary.main,
      background: 'transparent',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  buttonDarkTheme: {
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 400,
    width: 116,
    paddingLeft: 30,
    paddingRight: 30,
    '&:hover': {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  logoButton: {
    marginRight: 30,
    marginLeft: 30,
  },
  menuIcon: {
    color: theme.palette.common.black,
  },
  icon: {
    color: theme.palette.common.white,
    fontSize: 22,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  mobileButton: {
    flexBasis: '50%',
    background: theme.palette.common.black,
    borderRadius: 0,
    height: 57,
    boxShadow: 'none',
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
}))

function Header({ isHomepage, lng, changeLng }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [isDrawerOpen, setDrawer] = useState(false)

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={isHomepage ? classes.appbar : classes.appbarDarkTheme}
      >
        <Toolbar className={classes.toolbar}>
          <Hidden xsDown>
            <div>
              <Link
                className={
                  isHomepage ? classes.button : classes.buttonDarkTheme
                }
                to="/breweries/"
              >
                {t('header.breweries')}
              </Link>
              <Link
                className={
                  isHomepage ? classes.button : classes.buttonDarkTheme
                }
                to="/bars/"
              >
                {t('header.bars')}
              </Link>
              <Link to="/" className={classes.logoButton} aria-label="home">
                <img
                  src={logo}
                  alt=""
                  className={isHomepage ? classes.logo : classes.logoDarkTheme}
                />
              </Link>
              <Link
                className={
                  isHomepage ? classes.button : classes.buttonDarkTheme
                }
                to="/shops/"
              >
                {t('header.shops')}
              </Link>
              <Link
                className={
                  isHomepage ? classes.button : classes.buttonDarkTheme
                }
                to="/guides/"
              >
                {t('header.guides')}
              </Link>
            </div>
          </Hidden>
          <Hidden smUp>
            <IconButton
              onClick={() => setDrawer(true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon color="primary" />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setDrawer(false)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={() => setDrawer(false)}
                onKeyDown={() => setDrawer(false)}
              >
                <MobileHeaderList
                  linkLabels={[t('header.shop')]}
                  lng={lng}
                  changeLng={changeLng}
                />
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  isHomepage: PropTypes.bool,
  lng: PropTypes.string.isRequired,
  changeLng: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
