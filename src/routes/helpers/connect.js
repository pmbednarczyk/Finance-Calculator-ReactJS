import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/actionCreators';
import App from '../../containers/App';

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Connect = connect(mapStateToProps, mapDispachToProps)(App);

export default Connect;
