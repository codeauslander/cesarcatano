import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import cesarImage from '.././img/cesar4.png';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={cesarImage}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Cesar Catano</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a software developer who recognizes the value in both practical software engineering as well as having a strong background in computer science. Having graduated with both a CS degree and an intensive coding bootcamp, I thrive in tackling all types of technical challenges.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1633 Elmwood Ave. Berwyn, IL 60402
            </p>
            <h5>Phone</h5>
            <p>(847) 463 - 0084</p>
            <h5>Email</h5>
            <p>cesar.gusto.catano@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2010}
              endYear={2016}
              schoolName="University of Quindio — Computer and System Engineering"
              schoolDescription="I engaged in the engineering career throughout the University of Quindio and I gain the ability to formulate, analyze, structure and solve problems individually or interdisciplinary, understanding the needs of the environment, and proposing solutions that generate social impact, through the application of basic sciences and computer science."
               />

               <Education
                 startYear={2017}
                 endYear={2018}
                 schoolName="Actualize — Full-Stack Web Developer"
                 schoolDescription="I took the intensive, 3-month Actualize bootcamp, where I learned Ruby, Rails, JavaScript, VueJS, and more. But most importantly, I learned how to think as a software engineer and gained the ability to tackle any new technology."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={"Present"}
              jobName="Actualize, Chicago, IL — Full-Stack Web Developer"
              jobDescription="Working on a CRM application that allows for automated texting and calling. It is built with Ruby, Rails, JavaScript, VueJS, and Twilio.
                Created a dynamic memory card game app using Ruby and Rails for the API and JavaScript and VueJS for the front end.
                "
              />

              <Experience
                startYear={2015}
                endYear={2016}
                jobName="University of Quindío, Colombia — Research and Development"
                jobDescription="Created a tool using the Eclipse Modeling Project to perform evaluation of elements of modeling languages using the FCA (Concept Analysis). 
Developed a tool that evaluated meta models with the help of the mathematics process called Formal Concept Analysis (FCA) on the Zachman taxonomy, using Java and the EMF and GMF frameworks.
"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={80}
                />
              <Skills
                  skill="Ruby"
                  progress={80}
                  />
              <Skills
                    skill="HTML/CSS"
                    progress={80}
                    />
              <Skills
                      skill="Git/Gitflow"
                      progress={80}
                      />
              <Skills
                      skill="SQL"
                      progress={80}
                      />
              <Skills
                      skill="UML"
                      progress={80}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
