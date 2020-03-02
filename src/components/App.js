/********************Imports*************************/

// import PropTypes to make some assertions on the props
import React, {PropTypes} from 'react';

// Header that will be shown on the top of the page
import Header from './common/Header';

/********************Components*************************/

/**
 * This is a statefull component
 * This component handles the App template which will be used on every page
 * that we navigate to
 */
class App extends React.Component {
  //TODO: render App children
  render() {
    //console.log('this.props.children : ', this.props.children );
    return (
      <div className="container-fluid " >
        <Header/>
        <div className="core">{this.props.children}</div>
      </div>
    );
  }
}
/********************propTypes*************************/

/**
  * propTypes are useful to check if props needed has come or not
  */

App.propTypes = {
  children: PropTypes.object.isRequired
};


export default App;
