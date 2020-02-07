import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import ListErrors from '../Commons/ListErrors';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  submitForm = (email, password) => ev => {
    const { login } = this.props;
    ev.preventDefault();
    login({ user: { email, password } });
  };

  render() {
    const { errors, inProgress } = this.props;
    const { email, password } = this.state;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="/register">Need an account?</Link>
              </p>

              <ListErrors errors={errors} />

              <form onSubmit={this.submitForm(email, password)}>
                <fieldset>
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
                    Sign in
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

Login.propTypes = {
  errors: PropTypes.object,
  inProgress: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
};

Login.defaultProps = {
  errors: null
};

export default Login;
