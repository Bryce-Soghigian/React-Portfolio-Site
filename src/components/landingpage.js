import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1 style = {{color: '#93FF00'}}>Full Stack Web Developer</h1>

            <hr/>

          <p style = {{color: '#93FF00',width : "100%"}}>HTML/CSS | Python | JavaScript | React\Vue| NodeJS | Express |MongoDB| C# </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/bryce-soghigian-0556a9184/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Bryce-Soghigian" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://www.freecodecamp.org/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://twitter.com/brybrycodingguy" rel="noopener noreferrer" target="_blank">
          <i class="fa fa-twitter-square" aria-hidden="true"/>
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
