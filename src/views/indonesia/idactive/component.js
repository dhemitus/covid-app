import React from 'react'
//import NumberFormat from 'react-number-format'
import Typography from '@material-ui/core/Typography'
import { withStyles} from '@material-ui/core/styles'
import { styles } from './styles'
import clsx from 'clsx'
//import Grid from '@material-ui/core/Grid'
//import Box from '@material-ui/core/Box'

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sum: null,
      newcase: null,
      indonesia: null
    }
  }

  componentWillReceiveProps(nextProps) {
    let { type, result } = nextProps.initData

    if( type === 'ALLREPORTS_FETCHED_SUCCESS') {
      this.setState({indonesia: result.indonesia})
    }

    /*if( type === 'RECOVERED_SUCCESS') {
      this.setState({sum: result.indonesia.sum, newcase: result.indonesia.newcase})
    }*/
  }

  render() {
    let { classes } = this.props
    let { indonesia } = this.state

    return (
      <div>
        {indonesia !== null &&
          <>
            <Typography color="textSecondary" className={clsx(classes.body2, classes.title)}>Dirawat</Typography>
            <Typography className={clsx(classes.h2, classes.bold)}>{indonesia.ActiveCases}</Typography>
          </>
        }
        {/* sum !== null &&
          <NumberFormat value={sum} displayType={'text'} thousandSeparator={true} renderText={value => <Typography className={clsx(classes.h2, classes.bold)}>{value}</Typography>} />
        }
        { newcase !== null &&
          <NumberFormat value={newcase} displayType={'text'} thousandSeparator={true} renderText={value => <Typography className={clsx(classes.overline, classes.newcase)}>(+{value})</Typography>} />
        */}
      </div>
    )
  }
}
export default withStyles(styles)(Component)