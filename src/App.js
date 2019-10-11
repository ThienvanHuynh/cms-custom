import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import Routes from './Routes';
import store from './store/index';
import Firebase, { FirebaseContext } from './components/Firebase';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <Provider store={store()}>
          <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
              <Routes />
            </Router>
          </ThemeProvider>
        </Provider>
      </FirebaseContext.Provider>
    );
  }
}
