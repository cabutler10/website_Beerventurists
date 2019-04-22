import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  root: {
    height: 250,
    marginTop: -74,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      height: 700,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1000,
    },
  },
  container: {
    paddingTop: 100,
    zIndex: -1,
    margin: '0 auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      paddingTop: 100,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 150,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 150,
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: 300,
    },
  },
  img: {
    zIndex: -5,
    left: 0,
    top: 0,
    width: '100%',
    height: 250,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      height: 700,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1000,
    },
  },
  text: {
    letterSpacing: 3,
    color: theme.status.black,
    textShadow: '2px 2px 4px #ccc',
  },
  title: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 600,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      fontSize: 48,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 96,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 122,
    },
  },
  small: {
    fontSize: 35,
    [theme.breakpoints.up('sm')]: {
      fontSize: 48,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 72,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 96,
    },
  },
}))

function Hero({ img }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Img
        fluid={img.node.fluid}
        alt="wave"
        className={classes.img}
        imgStyle={{ objectPosition: 'center top' }}
        style={{ position: 'absolute' }}
      />
      <div className={classes.container}>
        <Hidden xsDown>
          <Typography
            variant="h2"
            gutterBottom
            className={classnames(classes.text, classes.title)}
          >
            B<span className={classes.small}>EER</span>V
            <span className={classes.small}>ENTURISTS</span>
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography
            variant="h2"
            gutterBottom
            className={classnames(classes.text, classes.title)}
          >
            B<span className={classes.small}>EER</span>V
            <span className={classes.small}>ENTURISTS</span>
          </Typography>
        </Hidden>
      </div>
    </div>
  )
}

Hero.propTypes = {
  img: PropTypes.object.isRequired,
}

export default Hero
