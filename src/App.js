import React from 'react';
import './App.css';

function App() {
  return (
    <div id="document" style={{ display: 'flex' }}>
      <div style={{ width: '200px', backgroundColor: '#002e58', color: '#002e58'  }}>
      </div>
      <div style={{ width: '500px', marginLeft: '20px' }}>

        <div >
          <div>
            <span style={{ color: '#002e58', fontSize: '40px', fontWeight: '600' }}>Bhuwan Joshi</span>
          </div>
          <div style={{ color: '#002e58', fontSize: '25px' }}>Software Engineer (Full stack Developer)</div>
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
          6+ years experience as software engineer.
        </div>
        <div>
          <h2 style={{ color: '#002e58' }}><i style={{ paddingLeft: '10px' }}
            class="fa fa-puzzle-piece main-circle-icon"></i> Skills </h2>
          <div>
            <ul>
              <li style={{ wordSpacing: '4px' }}>Data Structures &amp; Algorithms </li>
              <li style={{ wordSpacing: '4px' }}>Javascript, TypeScript, Software Design</li>
              <li style={{ wordSpacing: '4px' }}>React, React-native, Electron</li>
              <li style={{ wordSpacing: '4px' }}>Python, Scala, NodeJS, Mysql</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 style={{ color: '#002e58' }}> <i style={{ paddingLeft: '10px' }} class="fa fa-trophy main-circle-icon"></i>
            Accomplishments </h2>
          <ul style={{ margin: '5px' }}>
            <li>Currently Creating a notes app (<a href="https://upnotes.io/">Upnotes</a>) for software engineers in ElctronJS</li>
            <li>Worked on my own project <a href="https://croma.app/Home">Croma App</a>. Croma app is a open source project and it has 5k+ downloads in Android play store</li>
            <li>Created Math Html editor for Edfora Infotech Pvt Ltd</li>
            <li>Created a <a href="http://bhujoshi.github.io/">2048 Game</a> using javascript back in 2014.</li>
          </ul>
        </div>
        <div>
          <h2 style={{ color: '#002e58' }}> <i style={{ paddingLeft: '11px' }} class="fa fa-map-pin main-circle-icon"></i>
            Profile Links </h2>
          <ul style={{ margin: '5px' }}>
            <li><a href="https://www.linkedin.com/in/bhuwan-joshi-1464a6a3/">Linkedin</a></li>
            <li><a href="https://github.com/bhujoshi"> Github </a></li>
            <li><a href="https://www.codechef.com/users/bhujoshi"> Codechef</a></li>
          </ul>
        </div>
        <div>
          <h2 style={{ color: '#002e58' }}> <i style={{ paddingLeft: '9px' }}
            class="fa fa-briefcase main-circle-icon"></i>Work History </h2>
          <div style={{ margin: '20px' }}>
          <div>
              <div style={{ fontWeight: 600 }}>Software Engineer <span
                style={{ position: 'absolute', left: '60px', fontSize: '16px', color: '#FFF' }}>2020-11 
                2021-12</span>
              </div>
              <span style={{ fontSize: '16px', fontStyle: 'italic' }}>True fit (Later divided and converted to Shoptrue), Remote</span>
              <ul style={{ margin: '5px -22px' }}>
                <li>Shoptrue is an e-commerce site provides presonalised shopping experience.</li>
                <li>My role was full stack developer. Worked on frontend part (Angular) and in backend worked on NodeJS, GraphQl, Scala and Postgresql</li>
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Software Engineer <span
                style={{ position: 'absolute', left: '60px', fontSize: '16px', color: '#FFF' }}>2019-04 .
                2020-10 </span>
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
                style={{ position: 'absolute', left: '60px', fontSize: '16px', color: '#FFF' }}>2018-12 .
                2019-03</span>
              </div>
              <span style={{ fontSize: '16px', fontStyle: 'italic' }}>Hitachi MGRM Pvt Ltd, Gurugram, HR</span>
              <ul style={{ margin: '5px -22px' }}>
                <li>Worked on a HRMS system using (React, Redux)</li>
              </ul>
            </div>
            <div style={{ paddingTop: '5px' }}>
              <div style={{ fontWeight: 600 }}>Software Engineer<span
                style={{ position: 'absolute', left: '60px', fontSize: '16px', color: '#FFF' }}>2019-04 .
                Current</span>
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
                style={{ position: 'absolute', left: '60px', fontSize: '16px', color: '#FFF' }}>2015-05 .
                2016-06</span>
              </div>
              <span style={{ fontSize: '16px', fontStyle: 'italic' }}>E-profitbooster Pvt Ltd, Delhi, Delhi</span>
              <ul style={{ margin: '5px -22px' }}>
                <li>Created backend for https://www.imperialride.com/ is a shuttle service using (PHP, MySql)</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />


        <h2 style={{ color: '#002e58' }}> <i class="fa fa-graduation-cap main-circle-icon"></i> Education</h2>
        <div style={{ margin: '20px' }}>
          <div style={{ fontWeight: 600 }}>High School Diploma in Inforamtion Technology <span
            style={{ position: 'absolute', left: '60px', fontSize: '16px', color: '#FFF' }}>2011-06 . 2014-04</span>
          </div>
          <span style={{ fontSize: '16px', fontStyle: 'italic' }}>Govt. polytechnic Nainital, Uttrakhand,
            India</span>
        </div>
      </div >
    </div>
  );
}

export default App;
