import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginContainer, RegisterContainer, SettingsContainer, EditorContainer } from '../containers';
import { LOGIN, REGISTER, SETTINGS, EDITOR } from './route.constants';

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/" exact component={LoginContainer} /> */}
      <Route path={LOGIN} component={LoginContainer} />
      <Route path={REGISTER} component={RegisterContainer} />
      <Route path={SETTINGS} component={SettingsContainer} />
      <Route path={EDITOR} component={EditorContainer} />
    </Switch>
  );
};

export default Routes;
