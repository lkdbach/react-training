import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListErrors from '../Commons/ListErrors';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    };
  }

  submitForm = ({ username, email, password }) => ev => {
    const { register } = this.props;
    ev.preventDefault();
    register({ user: { email, password, username } });
  };

  render() {
    const { email, password, username } = this.state;
    const { errors, inProgress } = this.props;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">Have an account?</Link>
              </p>

              <ListErrors errors={errors} />

              <form onSubmit={this.submitForm({ username, email, password })}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={event => this.setState({ username: event.target.value })}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={event => this.setState({ email: event.target.value })}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={event => this.setState({ password: event.target.value })}
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={inProgress}
                  >
                    Sign up
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  errors: PropTypes.object,
  inProgress: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired
};

Register.defaultProps = {
  errors: null,
};


export default Register;
