import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import mgame from '.././img/MGame.png';
import crm from '.././img/crm.png';
import caravan from '.././img/caravan.png';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0){
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url('+mgame+')'}} ></CardTitle>
            <CardText>
              MEMORY GAME #1
              Play a game with images and impruve your memory
            </CardText>
            <CardActions border>
              <Button href="https://github.com/codeauslander/capstone/tree/master/memory-app" colored>GitHub</Button>
              <Button href="https://mighty-shore-74182.herokuapp.com/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
              <IconButton name="check" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#aaa', height: '176px', background: 'url('+crm+')'}} ></CardTitle>
            <CardText>
              CRM #2
              This project was made for the apprenticeship in Actualize and I have the honor to contribute to it as a developer. The main goal is to manage the leads of the program
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Actualize-Apprenticeship-Team-Dan/crm_api" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="check" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#aaa', height: '176px', background: 'url('+caravan+')'}} ></CardTitle>
            <CardText>
              Caravan App #3
              Right now I am participating in Caravan a non-profit organization which goal is to improve the notification system of public transportation in Chicago through a mobile app.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/codeauslander/Caravan-App" colored>GitHub</Button>
              <Button href="http://caravan-transit.herokuapp.com/lines" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="check" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url('+mgame+')'}} ></CardTitle>
            <CardText>
              MEMORY GAME #1
              Play a game with images and impruve your memory
            </CardText>
            <CardActions border>
              <Button href="https://github.com/codeauslander/capstone/tree/master/memory-app" colored>GitHub</Button>
              <Button href="https://mighty-shore-74182.herokuapp.com/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
              <IconButton name="check" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#aaa', height: '176px', background: 'url('+crm+')'}} ></CardTitle>
            <CardText>
              CRM #2
              This project was made for the apprenticeship in Actualize and I have the honor to contribute to it as a developer. The main goal is to manage the leads of the program
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Actualize-Apprenticeship-Team-Dan/crm_api" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="check" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Ruby on Rails</Tab>
          <Tab>VueJS</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
