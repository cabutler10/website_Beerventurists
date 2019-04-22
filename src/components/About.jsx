import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 90,
      paddingRight: 90,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 45,
      paddingBottom: 90,
      paddingLeft: 170,
      paddingRight: 170,
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: 90,
      paddingBottom: 90,
      paddingLeft: 400,
      paddingRight: 400,
    },
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: 16,
    [theme.breakpoints.up('md')]: {
      fontSize: 36,
    },
  },
  text: {
    paddingTop: 30,
    color: theme.palette.common.black,
    fontSize: 12,
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  },
}))

function About() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root} id="about">
      <Typography className={classes.title} variant="h5">
        {t('about.sectionTitle')}
      </Typography>
      <Typography className={classes.text} variant="body1">
        {t('about.message')}
      </Typography>
    </div>
  )
}

About.propTypes = {
  img: PropTypes.object.isRequired,
  waveImg: PropTypes.object.isRequired,
}

export default About
