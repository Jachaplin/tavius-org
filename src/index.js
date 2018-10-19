import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import "animate.css/animate.min.css";
import CenterContent from './components/component_center-content';
import FixedNavbar from './components/component_navbar';
import NavBoxes from './components/component_navboxes'
import FooterLinks from './components/component_footer';


class App extends Component {
  // constructor(props) {
  //  super(props)
  // }

  render() {
    return(
      <div>
        <FixedNavbar />
        <NavBoxes />
        <CenterContent />
        <FooterLinks />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
        
        
        

