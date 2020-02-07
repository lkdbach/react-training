import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { useInput } from '../../hooks';

const SettingsForm = ({ currentUser, inProgress, saveSetting }) => {
  const { value: image, setValue: setImage, bind: bindImage } = useInput('');
  const { value: username, setValue: setUsername, bind: bindUsername } = useInput('');
  const { value: bio, setValue: setBio, bind: bindBio } = useInput('');
  const { value: email, setValue: setEmail, bind: bindEmail } = useInput('');
  const { value: password, bind: bindPassword } = useInput('');

  useEffect(() => {
    if (currentUser) {
      setImage(currentUser.image || '');
      setUsername(currentUser.username);
      setBio(currentUser.bio || '');
      setEmail(currentUser.email);
    }
  }, [currentUser, setBio, setEmail, setImage, setUsername]);

  const submitForm = ev => {
    ev.preventDefault();
    const user = { image, username, bio, email, password };
    if (!user.password) {
      delete user.password;
    }
    saveSetting(user);
  };

  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <fieldset className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="URL of profile picture"
            {...bindImage}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Username"
            {...bindUsername}
          />
        </fieldset>

        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            rows="8"
            placeholder="Short bio about you"
            {...bindBio}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="email"
            placeholder="Email"
            {...bindEmail}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="New Password"
            {...bindPassword}
          />
        </fieldset>

        <button
          className="btn btn-lg btn-primary pull-xs-right"
          type="submit"
          disabled={inProgress}
        >
          Update Settings
        </button>
      </fieldset>
    </form>
  );
};

SettingsForm.propTypes = {
  currentUser: PropTypes.object,
  inProgress: PropTypes.bool.isRequired,
  saveSetting: PropTypes.func.isRequired
};

SettingsForm.defaultProps = {
  currentUser: null
};

export default SettingsForm;
