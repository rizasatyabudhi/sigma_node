import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link, browserHistory } from 'react-router'
import {Circle, Line} from 'react-progressbar.js'
import { changeRoute } from './actions.jsx'

import {Meter, Search} from './Components.jsx'
import store from '../reducers/combineReducers.jsx'




class DashboardHome extends Component {
  render() {
    var state = store.getState()
    console.log(state);
    // var projects = state.data.projects ? state.data.projects : null
    var auth = state.auth
    console.log(state.auth.token)
    // console.log(projects);
    return(
      <div>
      <div className='grid wrap'>
        <div className='unit half'>
          <div className='card profile'>
              <div className='grid'>

                  <div className='unit two-fifths'>
                    <div className='pic-wrapper' style={{width:'150px',height:'150px', backgroundImage:'url(http://hardikmanktala.com/projects/themes/flatter/demo/assets/images/people/people-1.jpg)'}}>
                    </div>
                  </div>
                  <div className='unit three-fifths'>
                    <large style={{fontSize:'18px'}}>{auth.userdata ? auth.userdata.user_name : '-'}</large>
                    <small>{auth.userdata.profile_name}</small>
                    <ul>
                      <li>
                        <span className='icon-speedometer'>&nbsp;&nbsp;</span>
                        <a onClick={
                          e => {
                            browserHistory.push('/my-performance')
                            e.preventDefault()
                          }
                        }>My Performance</a>
                      </li>
                      <li>
                        <span className='icon-list'>&nbsp;&nbsp;</span>
                        <a onClick={
                          e => {
                            browserHistory.push('/my-assignments')
                            e.preventDefault()
                          }
                        }>My Assigments</a>
                      </li>
                      <li>
                        <span className='icon-clock'>&nbsp;&nbsp;</span>
                        <a onClick={
                          e => {
                            browserHistory.push('/my-recent-activities')
                            e.preventDefault()
                          }
                        }>My Recent Activities</a>
                      </li>
                    </ul>

                  </div>
                </div>
            <div>
          </div>
        </div>
      </div>

      <div className='unit half'>
        <div className='margin' style={{paddingTop:'20px'}}>
        <div className='grid'>
          <div className='unit half'>
            <large>MY PERFORMANCE</large>
            <small>This month, May</small>
          </div>
          <div className='unit half'>
            <button className='btn-primary' style={{width:'100%'}} onClick={
              e => {
                store.dispatch(changeRoute({
                          type: 'PUSH',
                          page: {
                            name: 'timesheet',
                          }
                        }))
                e.preventDefault()
              }
            }>TIMESHEET</button>
          </div>
        </div>
        <div className='grid'>
            <div className='unit half'>
              <Meter
                progress={auth.datatimesheet ? auth.datatimesheet.entry * 0.01 : '-'}
                text={auth.datatimesheet ? Math.floor(auth.datatimesheet.entry) : '-'}
                title='Utilization'
                status={auth.datatimesheet.status}
              />
            </div>

            <div className='unit half'>
              <Meter
                progress={auth.datatimesheet ? auth.datatimesheet.utilization * 0.01 : '-'}
                text={auth.datatimesheet ? Math.floor(auth.datatimesheet.utilization) : '-'}
                title='Entry'
                status={auth.datatimesheet.status_utilization}
              />
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className='grid wrap'>
      <div className='unit whole'>
        <div className='divider'>
        </div>
      </div>
    </div>

    <div className='grid wrap'>
      <div className='unit whole'>
        <Search placeholder='search business units or project'></Search>
      </div>
    </div>

    <div className='projects'>
      {
              auth.project.map((value, index) => {
                return(
                  <div key={index}>
                    <div style={{margin: '50px auto 10px'}} className='grid wrap' key={index}>
                      <div className='unit whole'>

                    <large style={{display:'inline-block',color:'#AAA'}}>Business Unit&nbsp;:&nbsp;&nbsp; <a style={{fontSize:'18px',lineHeight:'50px'}} onClick={
                      e=> {
                        // browserHistory.push('/business-unit')
                        store.dispatch(changeRoute({
                          type: 'PUSH',
                          page: {
                            name: 'business-unit',
                            business_unit: {
                              bu_code: value.bu_code

                            }
                          }
                        }))
                      }
                    }>{value.bu_name}</a></large>

                    <button className='btn-secondary' style={{padding:'15px 22px'}} onClick={e => {
                      browserHistory.push('/new-project')
                      store.dispatch(changeRoute({
                        type: 'PUSH',
                        page: {
                          name: 'new-project',
                          new_project: {
                            bu_code: value.bu_code

                          }
                        }
                      }))

                    }}><i style={{verticalAlign:'bottom', marginRight:'7px', color: '#FC4D54'}} className="material-icons md-18">add</i>NEW PROJECT</button>
                  </div>
                </div>

                    {
                      value.project_list.map((value,index) => {
                        var color= '#F48165'
                        switch (value.project_status) {
                          case 'In Progress':

                            color= '#65BDF4'
                            break;
                          case 'Completed':
                            color= '#42C878'
                            break;
                          case 'Overdue':
                            color='#CB0000'
                            break;
                          case 'On Hold':
                            color = '#777777'
                            break;
                          case 'In Planning':
                            color = '#777777'
                            break;
                          default:

                        }
                        return(
                          <div className='grid wrap' key={index}>
                            <div className='unit whole' onClick={
                              e => {
                                store.dispatch(changeRoute({
                                  type: 'PUSH',
                                  page: {
                                    name: 'project',
                                    id : value.project_id

                                  }
                                }))

                                e.preventDefault()
                              }
                            }>
                              <div className='card'>
                                <div className='unit half'>
                                  <medium className='project-name list-pointer'>
                                    {value.project_name}
                                  </medium>
                                </div>
                                <div className='unit one-quarter'>
                                  <small className='project-status'>
                                    {
                                      value.project_status
                                    }
                                    &nbsp;(<small style={{color: color, display:'inline-block'}}>{value.project_complete}%</small>)
                                  </small>
                                </div>
                                <div className='unit one-quarter'>
                                  <Line
                                    progress={value.project_complete *0.01}
                                    initialAnimate={true}
                                    options={{
                                      strokeWidth: 4,
                                      color: color,
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
                              </div>
                            </div>
                        )
                      })
                    }
                  </div>
                )
            })
          }
    </div>

    <div className="footer">
      <div className='grid wrap'>
        <div className='unit whole'>
          <p>
            © 2016 - Project Management & Resources Delivery System. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>

  )
  }
}

function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps)(DashboardHome)
