import React from 'react';
import './App.css';

function App() {
  return (
    <div id="document" style={{ display: 'flex' }}>
      <div style={{ width: '200px', backgroundColor: '#002e58', color: '#002e58' }}>
      </div>
      <div style={{ width: '600px', marginLeft: '20px', marginTop: '40px' }}>
        <div >
          <div>
            <span style={{ color: '#002e58', fontSize: '40px', fontWeight: '600' }}>Bhuwan Joshi</span>
          </div>
          <div style={{ color: '#002e58', fontSize: '25px' }}>Software Engineer (Front End Developer)</div>
          <div style={{ marginTop: '16px' }}>
            <div>
              <i class="fa fa-map-marker circle-icon"></i>&nbsp;&nbsp;
              Electronics City Phase 1, Bengaluru, 560100
            </div>
            <p>
              <i class="fa fa-phone circle-icon"></i>&nbsp;&nbsp;
              <span class="field" id="FIELD_HPHN">705 364 4020</span>
            </p>
            <p>
              <i style={{ padding: '4px 5px' }} class="fa fa-envelope circle-icon"></i>
              &nbsp;&nbsp;<span>bhuwanchandra.it@gmail.com</span>
            </p>
          </div>
        </div>
        <div>
          6+ years experience as a software engineer mostly in frontend development using React. Currently working in 
          <a href="https://www.linkedin.com/company/appsforbharat/"> AppsForBharat</a>.
        </div>
        <div>
          <h2 style={{ color: '#002e58' }}><i style={{ paddingLeft: '10px', marginBottom: '6px' }}
            class="fa fa-puzzle-piece main-circle-icon"></i> Skills 
          </h2>
          <ul>
            <li style={{ wordSpacing: '4px' }}>Javascript, HTML5 & CSS3, React, Redux, React-native</li>
            <li style={{ wordSpacing: '4px' }}>Data Structures &amp; Algorithms, Python, NodeJS, Mysql</li>
          </ul>
        </div>
        <div>
          <h2 style={{ color: '#002e58' }}> <i style={{ paddingLeft: '10px', marginBottom: '6px' }} class="fa fa-trophy main-circle-icon"></i>
            Accomplishments 
          </h2>
          <ul style={{ margin: '5px' }}>
            <li>Created a notes app for software engineers in ElctronJS (<a href="https://upnotes.io/">Upnotes</a>) </li>
            <li>Worked on <a href="https://croma.app/Home">Croma App</a>. Croma app is a open source project and it has 5k+ downloads in Android play store</li>
            <li>Created Math Html editor for Edfora Infotech Pvt Ltd</li>
            <li>Created a <a href="http://bhujoshi.github.io/">2048 Game</a> using javascript back in 2014.</li>
          </ul>
        </div>
        <div>
          <h2 style={{ color: '#002e58' }}> <i style={{ paddingLeft: '11px', marginBottom: '6px' }} class="fa fa-map-pin main-circle-icon"></i>
            Profile Links 
          </h2>
          <ul style={{ margin: '5px' }}>
            <li><a href="https://www.linkedin.com/in/bhuwan-joshi-1464a6a3/">Linkedin</a></li>
            <li><a href="https://github.com/bhujoshi"> Github </a></li>
            <li><a href="https://www.codechef.com/users/bhujoshi"> Codechef</a></li>
          </ul>
        </div>
        <div>
          <h2 style={{ color: '#002e58' }}> <i style={{ paddingLeft: '9px', marginBottom: '6px' }}
            class="fa fa-briefcase main-circle-icon"></i>Work History 
          </h2>
          <div style={{ margin: '20px' }}>
          <div>
              <div style={{ fontWeight: 600 }}> Senior Software Engineer <span
                style={{ position: 'absolute', left: '40px', fontSize: '16px', color: '#FFF' }}>Mar 2022
                - Current</span>
              </div>
              <span style={{ fontSize: '16px', fontStyle: 'italic' }}>AppsForBharat </span>
              <ul style={{ margin: '5px -22px' }}>
                <li>Building <a href='https://play.google.com/store/apps/details?id=com.mandir'> Sri Mandir application </a></li>
                <li>Currently, I am working on the react-native part and building a community section for the application. My role is to understand product requirements, priorities them, and build</li>
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Software Engineer <span
                style={{ position: 'absolute', left: '40px', fontSize: '16px', color: '#FFF' }}>Nov 2020
                - Dec 2021</span>
              </div>
              <span style={{ fontSize: '16px', fontStyle: 'italic' }}>True fit (Later divided and become Shoptrue), Remote</span>
              <ul style={{ margin: '5px -22px' }}>
                <li>Shoptrue is an e-commerce site provides presonalised shopping experience.</li>
                <li>My role was full stack developer.In Frontend worked on Angular and in backend worked on NodeJS, GraphQL, Scala and Postgresql</li>
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Software Engineer <span
                style={{ position: 'absolute', left: '40px', fontSize: '16px', color: '#FFF' }}>Apr 2019
                - Nov 2020</span>
              </div>
              <span style={{ fontSize: '16px', fontStyle: 'italic' }}>Edfora infotech Pvt Ltd, Delhi</span>
              <ul style={{ margin: '5px -22px' }}>
                <li>Created a Math Html Editor using Javascript</li>
                <li>Worked on myPat CMS https://authors.mypat.in using (React Redux)</li>
                <li>Worked on myPat teachers https://teachers.mypat.in using (React, Redux)</li>
              </ul>
            </div>
            <div style={{ paddingTop: '5px' }}>
              <div style={{ fontWeight: 600 }}>Software Engineer<span
                style={{ position: 'absolute', left: '40px', fontSize: '16px', color: '#FFF' }}>Dec 2018 -
                Mar 2019</span>
              </div>
              <span style={{ fontSize: '16px', fontStyle: 'italic' }}>Hitachi MGRM Pvt Ltd, Gurugram, HR</span>
              <ul style={{ margin: '5px -22px' }}>
                <li>Worked on a HRMS system using (React, Redux)</li>
              </ul>
            </div>
            <div style={{ paddingTop: '5px' }}>
              <div style={{ fontWeight: 600 }}>Software Engineer<span
                style={{ position: 'absolute', left: '40px', fontSize: '16px', color: '#FFF' }}>Jul 2016
                - Dec 2018</span>
              </div>
              <span style={{ fontSize: '16px', fontStyle: 'italic' }}>Incaendo Technology Pvt Ltd., Delhi,
                Delhi</span>
              <ul style={{ margin: '5px -22px' }}>
                <li> Worked on https://agriprofocus.com/intro is a social media for farmers using (Javascript,
                  php,
                  python, MySql) </li>
              </ul>
            </div>
            <div style={{ paddingTop: '5px' }}>
              <div style={{ fontWeight: 600 }}>PHP Developer<span
                style={{ position: 'absolute', left: '40px', fontSize: '16px', color: '#FFF' }}>May 2015 -
                Jun 2016</span>
              </div>
              <span style={{ fontSize: '16px', fontStyle: 'italic' }}>E-profitbooster Pvt Ltd, Delhi, Delhi</span>
              <ul style={{ margin: '5px -22px' }}>
                <li>Created backend for https://www.imperialride.com/ is a shuttle service using (PHP, MySql)</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ color: '#002e58' }}> <i class="fa fa-graduation-cap main-circle-icon"></i> Education</h2>
          <div style={{ margin: '20px' }}>
            <div style={{ fontWeight: 600 }}>High School Diploma in Inforamtion Technology <span
              style={{ position: 'absolute', left: '60px', fontSize: '16px', color: '#FFF' }}>2011 - 2014</span>
            </div>
            <span style={{ fontSize: '16px', fontStyle: 'italic' }}>Govt. polytechnic Nainital, Uttrakhand,
              India</span>
          </div>
        </div>
      </div >
    </div>
  );
}

export default App;
