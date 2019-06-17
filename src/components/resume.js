import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
// import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Bryce Soghigian</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #DBFF33', width: '50%'}}/>
            <p>Hey! I am Bryce Soghigian. I have been programming through lambda schools cs education.Here we learn frameworks like react and vue. We learn to use backend tech with express mongo and ruby. We learn algorithms using python and C. Here at lambda we also go through lambda labs which is a simulation of an actual work environment.Programming from 9-5 and submitting pull requests. I also have experience with large code bases, and will be able to navigate yours! </p>
            <hr style={{borderTop: '3px solid #DBFF33', width: '50%'}}/>
            
            <h5>Phone</h5>
            <p>(515) 460-0273</p>
            <h5>Email</h5>
            <p>bsoghigian@gmail.com</p>
            <h5>Web</h5>
            <p>www.BryceSoghigian.netlify.com</p>
            <hr style={{borderTop: '3px solid #DBFF33', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Vermilion Country School"
              schoolDescription="I went to highschool and found my passion for the sciences here. "
               />

               <Education
                 startYear={2016}
                 endYear={2018}
                 schoolName="Vermilion General College"
                 schoolDescription="I Spent two years on this campus. From the age of 16 to the age of 18 I studied here"
                  />
                <hr style={{borderTop: '3px solid #DBFF33'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="First Contracted Work"
              jobDescription=" I made a responsive Website for a youtube channel called Orc Meat"
              />
              <Experience
                startYear={2019}
                endYear={2020}
                jobName="Second Contracted Work"
                jobDescription="Currently Developing A website for a rapper who plans on debuting in 2020."
                 />
             <hr style={{borderTop: '3px solid #DBFF33'}} />
              {/* <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                      skill="Python"
                      progress={100}
                      />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />
                      <Skills
                      skill="Express"
                      progress={40}
                      />
                      <Skills
                      skill="Vue"
                      progress={40}
                      />
                      
 */}

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
