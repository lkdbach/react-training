import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout, saveSetting, settingPageUnloaded } from '../../stores/actions';
import { Settings } from '../../components';

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators(
    {
      logout,
      saveSetting,
      settingPageUnloaded
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
