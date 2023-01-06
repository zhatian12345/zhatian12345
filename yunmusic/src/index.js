import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import store from './store/store';
import {Provider} from 'react-redux';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)