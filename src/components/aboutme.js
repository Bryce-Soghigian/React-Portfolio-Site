import React, { Component } from 'react';
import './aboutme.css'


class About extends Component {
  render() {
    return(
      <div className ="aboutStyle">
        <h1>About Page</h1>
      <div className="aboutContainer">
      <img src = "https://pbs.twimg.com/profile_images/1119017796954808322/F1pUmZtW.png" className="lambda logo" styles ="width:10%,height:200px;"/>
      <strong><p>Im a Software engineer. I am proficent in javascript, python and many front-end frameworks.Also familiar with rest Apis.I love software and would be happy if you would extend me an opportunity</p></strong>
     
      </div>
      </div>
    )
  }
}

export default About;
