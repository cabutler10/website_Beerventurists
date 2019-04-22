import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  container: {
    background: theme.status.white,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
      paddingBottom: 30,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 90,
      paddingRight: 90,
      paddingBottom: 90,
      paddingTop: 30,
    },
  },
  title: {
    paddingBottom: 15,
    textTransform: 'capitalize',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 30,
      paddingTop: 30,
    },
  },
  text: {
    fontSize: 12,
    wordBreak: 'break-word',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 30,
    },
  },
}))

function Legal() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.container} id="legal">
      <Typography variant="h5" className={classes.title}>
        {t('imprint.imprint')}
      </Typography>
      <Typography className={classes.text}>
        Eisbach Riders <br />
        Robin Eisenhardt & Michael Schmidt GbR <br />
        Lothstr. 72 <br />
        80797 München <br />
        Deutschland <br />
      </Typography>

      <Typography className={classes.text}>
        Tel.: 0176/69019542 <br />
        E-Mail: business@eisbach-riders.com
      </Typography>

      <Typography className={classes.text}>
        Vertretungsberechtigte Gesellschafter: Robin Eisenhardt, Michael Schmidt
      </Typography>

      <Typography className={classes.text}>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE
        320071401 Plattform der EU-Kommission zur <br />
        Online-Streitbeilegung:{' '}
        <a href="https://ec.europa.eu/consumers/odr">
          https://ec.europa.eu/consumers/odr
        </a>
        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
      </Typography>

      <Typography className={classes.text}>
        Verantwortliche/r i.S.d. § 55 Abs. 2 RStV: Robin Eisenhardt, Michael
        Schmidt, Lothstr. 72, 80797, München
      </Typography>

      <Typography variant="h6" className={classes.title}>
        {t('imprint.terms')}
      </Typography>

      <Typography variant="subtitle1">{t('imprint.title1')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms1_1')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms1_2')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms1_3')}</Typography>

      <Typography variant="subtitle1">{t('imprint.title2')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms2_1')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms2_2')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms2_3')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms2_4')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms2_5')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms2_6')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms2_7')}</Typography>

      <Typography variant="subtitle1">{t('imprint.title3')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms3_1')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms3_2')}</Typography>

      <Typography variant="subtitle1">{t('imprint.title4')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms4_1')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms4_2')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms4_3')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms4_4')}</Typography>

      <Typography variant="subtitle1">{t('imprint.title5')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms5_1')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms5_2')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms5_3')}</Typography>

      <Typography variant="subtitle1">{t('imprint.title6')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms6_1')}</Typography>

      <Typography variant="subtitle1">{t('imprint.title7')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms7_1')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms7_2')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms7_3')}</Typography>

      <Typography variant="subtitle1">{t('imprint.title8')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms8_1')}</Typography>

      <Typography variant="subtitle1">{t('imprint.title9')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms9_1')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms9_2')}</Typography>

      <Typography variant="h6" className={classes.title}>
        {t('imprint.title10')}
      </Typography>
      <Typography className={classes.text}>{t('imprint.terms10_1')}</Typography>

      <Typography variant="subtitle1">{t('imprint.title11')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms11_1')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms11_2')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms11_3')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms11_4')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms11_5')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms11_6')}</Typography>

      <Typography variant="subtitle1">{t('imprint.title12')}</Typography>
      <Typography className={classes.text}>{t('imprint.terms12_1')}</Typography>

      <Typography className={classes.text}>
        Eisbach Riders <br />
        Robin Eisenhardt & Michael Schmidt GbR <br />
        Lothstr. 72 <br />
        80797 München <br />
        Deutschland <br />
        E-Mail: business@eisbach-riders.com
      </Typography>

      <Typography className={classes.text}>{t('imprint.terms12_2')}</Typography>

      <Typography variant="h5" className={classes.title}>
        {t('imprint.credits')}
      </Typography>

      <a
        style='background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px'
        href="https://unsplash.com/@eberhardgross?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from eberhard grossgasteiger"
      >
        <span style="display:inline-block;padding:2px 3px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
            viewBox="0 0 32 32"
          >
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
          </svg>
        </span>
        <span style="display:inline-block;padding:2px 3px">
          eberhard grossgasteiger
        </span>
      </a>
    </div>
  )
}

export default Legal
