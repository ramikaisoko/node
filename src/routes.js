/********************Imports*************************/
import React from 'react';
// we need Route to make navigation possible and IndexRoute to
// specify the home page component whenever we use the "/" path
import { Route, IndexRoute } from 'react-router';

// We import all our components (pages)
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TasksPage from './components/task/TasksPage';
import ManageTaskPage from './components/task/ManageTaskPage'
/********************The Route object*************************/
/**
  * this object will contain the routes logic, then be exported to src/index
  * to assign it to the Router
  * NOTE: Our main component will be App, thats why it will be in the outermost Route
  * NOTE: the HomePage component will be called whenever we use this path "/"
  */
export default (
  <Route path="/" component={App}>
    {/* HomePage will be the main page*/}
    <IndexRoute component={HomePage} />
    {/*Tasks page is attended by tapping the /tasks url*/}
    <Route path="/tasks" component={TasksPage}/>
    <Route path="/task" component={ManageTaskPage}/>
    <Route path="/task/:id" component={ManageTaskPage}/>
    {/* About page is attended by tapping /about url*/}
    <Route path="/about" component={AboutPage} />
  </Route>
);
