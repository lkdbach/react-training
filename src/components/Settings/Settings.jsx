import React from 'react';
import * as PropTypes from 'prop-types';
import ListErrors from '../Commons/ListErrors';
import SettingsForm from './SettingForm';

const Settings = ({ errors, currentUser, saveSetting, logout, inProgress }) => (
  <div className="settings-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Your Settings</h1>
          <ListErrors errors={errors} />
          <SettingsForm currentUser={currentUser} saveSetting={saveSetting} inProgress={inProgress} />
          <hr />
          <button type="button" className="btn btn-outline-danger" onClick={logout}>
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
);

Settings.propTypes = {
  errors: PropTypes.array,
  currentUser: PropTypes.object, 
  inProgress: PropTypes.bool.isRequired, 
  saveSetting: PropTypes.func.isRequired, 
  logout: PropTypes.func.isRequired
}

Settings.defaultProps = {
  errors: null,
  currentUser: null
}

export default Settings;
