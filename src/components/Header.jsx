import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LOGIN, REGISTER, EDITOR, SETTINGS } from '../routes/route.constants';

const LoggedOutView = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to={LOGIN} className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to={REGISTER} className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

LoggedOutView.propTypes = {
  currentUser: PropTypes.object
};

LoggedOutView.defaultProps = {
  currentUser: null
};

const LoggedInView = ({ currentUser }) => {
  if (currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to={EDITOR} className="nav-link">
            <i className="ion-compose" />
            &nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to={SETTINGS} className="nav-link">
            <i className="ion-gear-a" />
            &nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`/@${currentUser.username}`} className="nav-link">
            <img src={currentUser.image} className="user-pic" alt={currentUser.username} />
            {currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

LoggedInView.propTypes = {
  currentUser: PropTypes.object
};

LoggedInView.defaultProps = {
  currentUser: null
};

const Header = props => {
  const { appName, currentUser } = props;
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {appName.toLowerCase()}
        </Link>

        <LoggedOutView currentUser={currentUser} />

        <LoggedInView currentUser={currentUser} />
      </div>
    </nav>
  );
};

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  currentUser: PropTypes.object
};

Header.defaultProps = {
  currentUser: null
};

export default Header;
