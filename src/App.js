import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import ReduxToastr from 'react-redux-toastr';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <>
      <Routes />
      <ReduxToastr />
      <GlobalStyle />
    </>
  </Provider>
);

export default App;
