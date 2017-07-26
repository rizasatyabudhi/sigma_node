import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link, browserHistory } from 'react-router'
import store from '../reducers/combineReducers.jsx'
import {Divider, TimeSheetTimeButton, Header, ProjectHeader} from  './components.jsx'

import { Line} from 'react-progressbar.js'


class ProjectOverview extends Component {
    render(){
      return(
        <div className='project-overview'>
          <div className='grid padding-left'>
            <div className='unit whole'>
              <ProjectHeader projectName='Transaction Based Managed Services 2017' sectionName='OVERVIEW'/>
            </div>
          </div>
          <div className='grid padding-left'>
            <div className='unit whole'>
              <Header text='Project Team' style={{marginTop: '17px'}}  center={true}/>
            </div>
          </div>
          <div className='grid padding-left' style={{marginTop:'20px'}}>
            <div className='unit whole'>
              <div className='card'>
                <div className='grid'>
                  <div className='unit whole'>
                    <Header text='Project Detail'/>
                  </div>
                </div>
                <div className='grid'>
                  <div className='unit two-fifths'>
                    <medium>IWO (Internal Work Order)</medium>
                    <a style={{ marginTop: '12px', display:'block'}}>TBWS123213</a>
                  </div>
                  <div className='unit three-fifths'>
                    <medium>Business Unit Owner</medium>
                    <a style={{ marginTop: '12px', display:'block'}}>IT Operation Services</a>
                  </div>
                </div>
                <div className='grid'>
                  <div className='unit whole'>
                    <medium>Description</medium>
                    <small>Lorem Ipsum dolor sit amet, consectur un pad deu deu bla tauui</small>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className='grid padding-left' style={{marginTop:'17px'}}>
            <div className='unit whole'>
              <div className='card project-workplan'>
                <div className='grid'>
                  <div className='unit whole'>
                    <Header text='Project Detail'/>
                  </div>
                </div>

                <div className='grid'>
                  <div className='unit four-fifths'>
                    <medium style={{display: 'block', marginBottom:'11px'}}>FORM STATUS:&nbsp;<span style={{color:'#65BDF4'}}>DRAFTED</span></medium>
                    <medium style={{display: 'inline-block'}}>COMPLETION:&nbsp;<span style={{color:'#65BDF4'}}>25%</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</medium>

                    <div className='completion-bar' style ={{display:'inline-block'}}>

                      <Line
                        progress={30 *0.01}
                        initialAnimate={true}
                        options={{
                          strokeWidth: 3,
                          color: '#65BDF4',
                          trailColor:'#EEEEEE',
                          trailWidth: 12,
                          fontSize: 30,
                          easing: 'easeInOut',
                          duration: 700,
                        }}
                        containerClassName={'line-bar'}
                        >
                        </Line>
                    </div>
                  </div>
                  <div className=' unit one-fifth no-gutters'>
                    <a>View Workplan</a>
                  </div>

                </div>
                <div className='grid'>
                  <div className='unit half'>
                    <div className='grid tab'>

                      <div className='unit one-third no-gutters'>
                        <small>TO DO</small>
                        <small className='status-total'>6</small>

                      </div>
                      <div className='unit one-third no-gutters'>
                        <small>DOING</small>
                        <small className='status-total'>24</small>
                      </div>
                      <div className='unit one-third no-gutters'>
                        <small>DONE</small>
                        <small className='status-total'>10</small>
                      </div>

                    </div>
                  </div>
                  <div className='unit half'></div>
                </div>

                <div className='grid' style={{borderBottom:'2px solid #F6F6F6', paddingBottom: '14px'}}>
                  <div className='unit golden-large'>
                    <small>Lorem ipsum dolor sit amet consc....</small>
                  </div>
                  <div className='unit golden-small'>
                    <small>June 1 2017 - June 8 2017</small>
                  </div>
                </div>
                <div className='grid' style={{borderBottom:'px solid #F6F6F6', paddingBottom: '14px'}}>
                  <div className='unit golden-large'>
                    <small>Lorem ipsum dolor sit amet consc....</small>
                  </div>
                  <div className='unit golden-small'>
                    <small>June 1 2017 - June 8 2017</small>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      )
    }

}

function mapStateToProps(state) {
  return {
    state
  }
}
export default connect(mapStateToProps)(ProjectOverview)
// export default Login