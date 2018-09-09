import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import HttpsRedirect from 'react-https-redirect';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>

        <BrowserRouter>
            <HttpsRedirect>
                <Switch>
                    <App />
                </Switch>
            </HttpsRedirect>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
    );
registerServiceWorker();
