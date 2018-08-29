import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import cesarImage from '.././img/cesar4.png';


class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={cesarImage}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Developer</h1>

            <hr/>

          <p> Ruby On Rails | Vuejs | Reactjs | SQL | MongoDB | Java </p>
          <p>I create projects that may or may not seriously break the universe</p>
          

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/cesarcatano/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/codeauslander" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
