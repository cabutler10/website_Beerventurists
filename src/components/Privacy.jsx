import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 30,
      paddingTop: 30,
    },
  },
  text: {
    fontSize: 12,
    textTransform: 'capitalize',
    wordBreak: 'break-word',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 30,
    },
  },
  listItem: {
    padding: 0,
  },
  link: {
    paddingLeft: 60,
    fontSize: 12,
  },
}))

function Privacy() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.container} id="privacy">
      <Typography variant="h6" className={classes.title}>
        {t('privacy.privacy')}
      </Typography>
      <Typography variant="subtitle1">{t('privacy.title1')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms1_1')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms1_2')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms1_3')}</Typography>
      <Typography variant="subtitle1">{t('privacy.title2')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms2_1')}</Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms2_list1')}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms2_list2')}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms2_list3')}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms2_list4')}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms2_list5')}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms2_list6')}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms2_list7')}
          />
        </ListItem>
      </List>
      <Typography className={classes.text}>{t('privacy.terms2_2')}</Typography>
      <Typography variant="subtitle1">{t('privacy.title3')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms3_1')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms3_2')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms3_3')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms3_4')}</Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Internet Explorer: https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Firefox: https://www.mozilla.org/en-US/privacy/websites/#cookies
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Chrome: https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=en
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Safari: https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Opera: https://help.opera.com/en/latest/web-preferences/#cookies
            "
          />
        </ListItem>
      </List>
      <Typography className={classes.text}>{t('privacy.terms3_5')}</Typography>
      <Typography variant="subtitle1">{t('privacy.title4')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms4_1')}</Typography>
      <Typography variant="subtitle1">{t('privacy.title5')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms5_1')}</Typography>
      <Typography variant="subtitle1">{t('privacy.title6')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms6_1')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms6_2')}</Typography>
      <Typography variant="subtitle1">{t('privacy.title7')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms7_1')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms7_2')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms7_3')}</Typography>
      <Typography variant="subtitle1">{t('privacy.title8')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms8_1')}</Typography>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={classes.link}
        onClick={() => alert(`${t('privacy.terms8_2')}`)}
        //eslint-disable-next-line
        href="javascript:gaOptout()"
      >
        {t('privacy.terms8_3')}
      </a>
      <Typography className={classes.text}>{t('privacy.terms8_4')}</Typography>
      <Typography variant="subtitle1">{t('privacy.title9')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms9_1')}</Typography>
      <Typography variant="subtitle1">{t('privacy.title10')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms10_1')}</Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms10_list1')}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms10_list2')}
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms10_list3')}
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms10_list4')}
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms10_list5')}
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms10_list6')}
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms10_list7')}
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('privacy.terms10_list8')}
          />{' '}
        </ListItem>
      </List>
      <Typography variant="subtitle1">{t('privacy.title10_2')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms10_2')}</Typography>
      <Typography variant="subtitle1">{t('privacy.title11')}</Typography>
      <Typography className={classes.text}>{t('privacy.terms11_1')}</Typography>
    </div>
  )
}

export default Privacy
