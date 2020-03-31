import Component from './component'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../../actions'
import { connect } from 'react-redux'

Component.propTypes = {
  initData: PropTypes.object,
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

const mapStateToProps = state => {
  return {
    initData: state.dashboardReducer,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)