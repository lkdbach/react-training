import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Login } from '../../components';
import { login } from '../../stores/actions';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators(
    {
      login
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
