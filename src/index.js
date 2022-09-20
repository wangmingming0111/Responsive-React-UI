import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

// import './assets/custom.scss';
import "./assets/animated.css";
import './assets/style.scss';
import './assets/solmine.scss';
import './assets/solmine_landing.scss';
import './assets/solmine_main.scss';
import './assets/solmine_mint.scss';

import App from './SolmineModule/App';

import * as serviceWorker from './serviceWorker';

import { Wallets } from './SolmineModule/components/wallet'
import { SnackbarProvider } from 'notistack';

const WalletApp = (props) => {
  return (
    <SnackbarProvider>
      <Wallets>
        <App />
      </Wallets>
    </SnackbarProvider>
  )
};

ReactDOM.render(
	// <App />,
	<WalletApp />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
