import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { onAppLoad, onRedirect, autoLogin, getUserInfo } from './stores/actions';
import { Routes } from './routes';
import Header from './components/Header';
import { setToken } from './stores/middlewares/api';

class App extends React.Component {
  componentDidMount() {
    const { onAppLoad, getUserInfo } = this.props;
    const token = window.localStorage.getItem('jwt');
    if (token) {
      setToken(token);
      getUserInfo();
    }
    onAppLoad();
  }

  componentDidUpdate(prevProps) {
    const { redirectTo, onRedirect, dispatch } = this.props;
    if (prevProps.redirectTo !== redirectTo && redirectTo) {
      dispatch(push(redirectTo));
      onRedirect();
    }
  }

  render() {
    const { appLoaded, appName, currentUser } = this.props;
    if (appLoaded) {
      return (
        <div>
          <Header appName={appName} currentUser={currentUser} />
          <Routes />
        </div>
      );
    }
    return (
      <div>
        <Header appName={appName} currentUser={currentUser} />
      </div>
    );
  }
}

App.propTypes = {
  redirectTo: PropTypes.string,
  appName: PropTypes.string.isRequired,
  appLoaded: PropTypes.bool,
  onRedirect: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  onAppLoad: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  currentUser: PropTypes.object
};

App.defaultProps = {
  redirectTo: null,
  appLoaded: false,
  currentUser: {}
};

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators(
    {
      onAppLoad,
      onRedirect,
      autoLogin,
      getUserInfo
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
