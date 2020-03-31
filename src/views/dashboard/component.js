import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { styles } from './styles'
import clsx from 'clsx'
import Link from '@material-ui/core/Link'
import { withStyles} from '@material-ui/core/styles'
import Deaths from '../world/deaths'
import Confirmed from '../world/confirmed'
import Recovered from '../world/recovered'
import Idconfirmed from '../indonesia/idconfirmed'
import Iddeaths from '../indonesia/iddeaths'
import Idactive from '../indonesia/idactive'
import Idrecovered from '../indonesia/idrecovered'
//import NumberFormat from 'react-number-format'
//import moment from 'moment'

class Component extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: null,
      newcase: null,
      idnewcase: null,
      total: null,
      indonesia: null
    }
  }

  componentDidMount(){
    let { getAllReports } =  this.props
//    getDeaths()
    getAllReports()
//    getRecovered()
  }

  componentWillReceiveProps(nextProps) {
    let { type, result } = nextProps.initData

    if( type === 'ALLREPORTS_FETCHED_SUCCESS') {
      this.setState({total: result.total, indonesia: result.indonesia})
    }

/*    if( type === 'CONFIRMED_SUCCESS') {
      console.log(result)
      this.setState({
        date:moment(result.date).format('MMMM DD, YYYY'), 
        newcase: result.newcase,
        idnewcase: result.indonesia.newcase
      })
    }*/
  }

  render() {
    let { classes } = this.props
    let { total, indonesia } = this.state

    return (
      <div className={classes.root}>
        <AppBar elevation={0} color="transparent" className={classes.appBar}>
          <Toolbar>
            <Container component="main" className={classes.main} maxWidth='sm'>
              <Typography className={classes.h5} gutterBottom>
                COVID-19 Dashboard
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
        <Container component="main" className={classes.main} maxWidth='sm'>
          <Typography className={classes.h2} gutterBottom>
            Ringkasan
          </Typography>
          <Typography className={classes.body2} color="textSecondary" gutterBottom>
            {'Melacak total kasus coronavirus, kematian dan kasus baru'}
          </Typography>
          <main className={classes.content}>
            <Typography className={classes.h6}>Dunia.</Typography>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Confirmed />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Deaths />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Recovered />
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth='sm' className={classes.midcontainer}>
              {/*<Typography color="textSecondary" className={ clsx(classes.caption, classes.txtcenter)}>PEMBARUAN PADA <span className={classes.bold}>{date !== null && date}</span> ( +PERUBAHAN DARI 5 HARI LALU)</Typography>*/}
              { total !== null &&
                <Typography className={ clsx(classes.caption, classes.txtcenter)} color="textSecondary"><span className={classes.bold}>{total.NewCases}</span> kasus Coronavirus baru dan meninggal <span className={classes.bold}>{total.NewDeaths}</span> di seluruh dunia.</Typography>
              }
              { indonesia !== null &&
                <Typography className={ clsx(classes.caption, classes.txtcenter)} color="textSecondary">Terdapat <span className={classes.bold}>{indonesia.NewCases}</span> kasus baru Indonesia dan <span className={classes.bold}>{indonesia.NewDeaths}</span> meninggal.</Typography>
              }
            </Container>
          </main>
          <div className={classes.appBarSpacer} />
          <div className={classes.titlebox}>
            <Typography className={classes.h6}>Indonesia.</Typography>
          </div>
          <Container maxWidth="lg">
              <Grid container spacing={0}>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Idconfirmed />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Iddeaths />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Idactive />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Idrecovered />
                </Grid>
              </Grid>
            </Container>
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography color="textSecondary" className={classes.body1}>Oleh dhemitus.</Typography>
            <Typography color="textSecondary" className={classes.caption}>
              {'Sumber: '}
              <Link color="inherit" href="https://www.worldometers.info/coronavirus/">
              www.worldometers.info
              </Link>{' '}
              {/*<Link color="inherit" href="https://github.com/CSSEGISandData/COVID-19">
              Repositori GitHub
              </Link>*/}
              {'.'}
            </Typography>
          </Container>
        </footer>
      </div>
    )
  }

}
export default withStyles(styles)(Component)