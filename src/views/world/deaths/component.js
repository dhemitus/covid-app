import React from 'react'
//import NumberFormat from 'react-number-format'
import Typography from '@material-ui/core/Typography'
import { withStyles} from '@material-ui/core/styles'
import { styles } from './styles'
import clsx from 'clsx'

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sum: null,
      newcase: null,
      total: null
    }
  }

  componentWillReceiveProps(nextProps) {
    let { type, result } = nextProps.initData

    if( type === 'ALLREPORTS_FETCHED_SUCCESS') {
      this.setState({total: result.total, indonesia: result.indonesia})
    }

    /*if( type === 'CONFIRMED_SUCCESS') {
      this.setState({sum: result.sum, newcase: result.newcase})
    }*/
  }

  render() {
    let { classes } = this.props
    let { total } = this.state

    return (
      <div>
        {total !== null &&
          <>
            <Typography color="textSecondary" className={clsx(classes.body2, classes.title)}>Meninggal</Typography>
            <Typography className={clsx(classes.h4, classes.bold)}>{total.TotalDeaths}</Typography>
            <Typography className={clsx(classes.overline, classes.newcase)}>(+{total.NewDeaths})</Typography>
          </>
        }
        {/* sum !== null &&
          <NumberFormat value={sum} displayType={'text'} thousandSeparator={true} renderText={value => <Typography className={clsx(classes.h4, classes.bold)}>{value}</Typography>} />
        }
        { newcase !== null &&
          <NumberFormat value={newcase} displayType={'text'} thousandSeparator={true} renderText={value => <Typography className={clsx(classes.overline, classes.newcase)}>(+{value})</Typography>} />
        */}
      </div>
    )
  }
}
export default withStyles(styles)(Component)