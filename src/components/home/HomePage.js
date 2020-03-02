/********************Imports*************************/
import React from 'react';

// Link component lets us navigate from page to another page
// check the <Link> tag below, we also need this to make linking
// NOTE: Link in this page is only considered as a button
import {Link} from 'react-router';

/********************Components*************************/

// TODO: Make a homepage component which will shown as the first child in the App component
/**
 * This component handles the Home page which will be called when using this path "/"
 */
class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Gestion de documents</h1>
        {/* link to "about" page*/}
        <Link to="/tasks" className="btn btn-primary">Commencer</Link>
      </div>
    );
  }
}

export default HomePage;
