/********************Imports*************************/
// this is necessary for transpiling (cause not all navigators support ES6)
import 'babel-polyfill';

// Independent Library, which allow to use React components
import React from 'react';

// Independent library which transmit our react component into a React virtual DOM
import ReactDOM from 'react-dom';

// Router : is the element where we store our routes (routes are capable to navigate through components)
// browserHistory : this holds and handle the navigation history (stacks on previous navigable components)
import { Router, browserHistory } from 'react-router';

// We need to reference our routes already done, to the Router component in this file
import routes from './routes';

// Webpack let's us import css like we do with js modules!
import './styles/styles.css'; //Webpack can import CSS files
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Webpack can also import react bootstrap library

// Necessary for the Redux store creation and assignment
import configureStore from './store/configureStore';

// Necessary to create the Redux store
import {Provider} from 'react-redux';

//Actions
import {loadTasks} from "./actions/taskActions";
import {loadAuthors} from "./actions/authorActions";

/********************Constants*************************/

// we use constants to simplify the development

const reactElement = (<Router history={browserHistory} routes={routes} />);
const htmlRoot = document.getElementById('root');

// NOTE: AFTER MAKING THE STORE, here we are instantiating the redux store!
const store = configureStore(); // Here we call the createStore() which's defined inside configureStore() function
const Tasks = store.dispatch(loadTasks()); // dispatch action load Tasks
const Authors = store.dispatch(loadAuthors()); // dispatch action load Authors

// NOTE: AFTER MAKING THE STORE, Instantiating a provider from react-redux;
// this JSX will need to take the store as porperty
// and the Router as children
const ProvidedApp = <Provider store={store}>{reactElement}</Provider>;

/***********************ReactDOM**************************/
ReactDOM.render(ProvidedApp, htmlRoot);
// After adding the provider and instantiating the store, we go to connect the app to that store in App.js
