import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Register } from '../../components';
import { register } from '../../stores/actions';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators(
    {
      register
    },
    dispatch
  )

});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
