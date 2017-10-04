import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';

import Login from './components/login/login'
import Cadastro from './components/cadastro/cadastro'

const RouterComponent = () => {
  return (
      <Router>
          <Stack key="root">
              <Scene key="login" component={Login}  hideNavBar={true}/>
              <Scene key="cadastro" component={Cadastro} hideNavBar={true}/>
          </Stack>
      </Router>
  );
}

export default RouterComponent;
