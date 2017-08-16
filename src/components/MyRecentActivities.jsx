import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link, browserHistory } from 'react-router'
import store from '../reducers/combineReducers.jsx'
import {Divider, Input, RadioButton, Select,PageLoader} from './Components.jsx'
import {Line} from 'react-progressbar.js'
import {getMyActivities,pop} from './actions.jsx'

class MyRecentActivities extends Component {
  componentWillMount(){
    const myActivity = store.getState().data.myActivity
    store.dispatch(getMyActivities());
  }

  componentWillUnmount() {
    store.dispatch(pop());
  }

  render() {
    const myActivity = store.getState().data.myActivity
    if(!myActivity){
      return <PageLoader></PageLoader>
    }
    return (
      <div>
        <div className="grid wrap">
          <div className="unit whole">
            <Divider btnLeftText='BACK' style={{marginTop:'0'}} btnLeftClick={ e => {
                browserHistory.goBack()
                e.preventDefault()
              }} text='MY RECENT ACTIVITIES'></Divider>
          </div>
        </div>

        <div className='grid wrap'>
          <div className='unit whole'>
            <h2 style={{marginBottom:'0'}} className='input-desc'>GENERATE REPORT</h2>
          </div>
        </div>

        <div className="grid wrap">
          <div className="unit one-third" >
            <Select style={{width:'100%' , display:'inline-block', float:'left', marginRight:'30px'}} items={{
                  items : [
                    {title : 'JANUARY'},
                    {title : 'FEBRUARY'}
                  ]
                }}></Select>
          </div>
          <div className="unit one-third" >
            <Select style={{width:'225px', display:'inline-block', float:'right'}} items={{
                  items : [
                    {title : '2017'},
                    {title : '2016'}
                  ]
                }}></Select>
          </div>
          <div className="unit one-third" >
            <button className='btn-primary'style={{float:'right' , padding:'17px 90px'}}>PRINT</button>
          </div>
        </div>

        <div className="grid wrap">
          <div className="unit whole">
             <Divider style={{marginTop:'0'}} text='WEDNESDAY, JUNE 7' />
          </div>
        </div>

        <div className="grid wrap">
          <div className="unit whole">

            <div className="card">
              <div className="person">
                <div className="person-image" />
                  <div className="person-info">
                    <large>Kara Gray</large>
                    <small>Admin, Project Manager</small>
                  </div>
              </div>
            </div>

            <div className="card project">
              <small>4:55 PM</small>
              <small className="project-info" >
                Project <a href="">Transaction Based Managed Services 2017</a>
                <p>(<b>4 Hours</b>) - Pengiriman data dana terdebet dan belum terdebet ke mitra</p>
                <p>left a <b>Timesheet UI #1</b> message</p>
                <p>"Ini interface yang lama seperti ini ya"</p>
              </small>
               <div className="grid wrap" style={{float:'right'}}>
                <div className="unit whole" >
                  <medium><b>WAITING FOR APPROVAL</b></medium>
                </div>
              </div>
            </div>

              </div>
        </div>

        <div className="grid wrap">
          <div className="unit whole">
             <Divider style={{marginTop:'0'}} text='TUESDAY , JUNE 6' />
          </div>
        </div>
{
  myActivity.activity_timesheet.map((value,index)=>{
    return (
      <div key={index}>
      <div className="grid wrap">
      <div className="unit whole" style={{paddingBottom:'0'}}>
        <div className="card project">

          <div className="grid wrap">
            <div className="unit whole">
              <medium style={{display:'inline'}}>
                <a href="">{value.project_name}</a>
              </medium>
              {
                function (){
                  var className = 'pill pending'
                  switch (value.is_approved) {
                    case 0:
                    className= 'pill denied'
                    break;
                    case 1:
                    className= 'pill approved'
                    break;
                    case -1:
                    className='pill pending'
                    break;
                    default:
                  }
                  return (<div key={index} className='pill denied' style={{float:'right'}}>{value.is_approved}</div>)
                }
                
              }

            
            </div>

            <small className="project-info" style={{margin:'auto'}}>
              (<b>{value.hour_total}</b>) - {value.wbs_name}
            </small>
          </div>

          <div className="grid wrap">
            <div className="unit whole">
              <div className="person">
                <div className="person-image" style={{margin:'auto'}} />
                <div className="person-info" style={{marginLeft:'46px'}}>
                  <large style={{float:'left'}}><b>{value.user_name}</b></large>
                  <small style={{display:'inline'}}>, Project Manager</small>
                </div>
              <div style={{display: 'inline-block',marginLeft:'95px',marginTop:'-25px'}}>
                  <small>
                    <b>{value.subject}</b> "{value.message}"
                  </small>
              </div>
              </div>
            </div>
          </div>
          <div className="grid wrap">
            <div className="unit whole" style={{marginLeft:'95px'}}>
              <small>Tue,Jun 6 at 4:55 PM via web</small>
              <medium style={{display:'inline',marginLeft:'37%'}}>
              {
                value.is_approved == 0  && 
                <a href="">RE-SUBMIT TIMESHEET</a>
              }
              </medium>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
  })

}

        <div className="grid wrap">
          <div className="unit whole" style={{paddingBottom:'0'}}>
            <div className="card project">

              <div className="grid wrap">
                <div className="unit whole">
                  <medium style={{display:'inline'}}>
                    <a href="">Transaction Based Managed Services 2017</a>
                  </medium>
                  <div className="pill denied" style={{float:'right'}}>DENIED</div>
                </div>

                <small className="project-info" style={{margin:'auto'}}>
                  (<b>4 Hours</b>) - Pengiriman data dana terdebet dan belum terdebet ke mitra
                </small>
              </div>

              <div className="grid wrap">
                <div className="unit whole">
                  <div className="person">
                    <div className="person-image" style={{margin:'auto'}} />
                    <div className="person-info" style={{marginLeft:'46px'}}>
                      <large style={{float:'left'}}><b>Kara Gray</b></large>
                      <small style={{display:'inline'}}>, Project Manager</small>
                    </div>
                  <div style={{display: 'inline-block',marginLeft:'95px',marginTop:'-25px'}}>
                      <small>
                        <b>Timesheet UI #2.</b> "Ini tampilan yang aku improve seperti ini.
                        Tapi seperti yang kubilang kemarin, untuk development timeline nya aku
                        ngikut aja"
                      </small>
                  </div>
                  </div>
                </div>
              </div>
              <div className="grid wrap">
                <div className="unit whole" style={{marginLeft:'95px'}}>
                  <small>Tue,Jun 6 at 4:55 PM via web</small>
                  <medium style={{display:'inline',marginLeft:'37%'}}>
                    <a href="">RE-SUBMIT TIMESHEET</a>
                  </medium>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid wrap">
          <div className="unit whole" style={{paddingBottom:'0', paddingTop:'0'}}>
            <div className="card project">

              <div className="grid wrap">
                <div className="unit whole">
                  <medium style={{display:'inline'}}>
                    <a href="">Transaction Based Managed Services 2017</a>
                  </medium>
                  <div className="pill approved" style={{float:'right'}}>APPROVED</div>
                </div>

                <small className="project-info" style={{margin:'auto'}}>
                  (<b>4 Hours</b>) - Pengiriman data dana terdebet dan belum terdebet ke mitra
                </small>
              </div>

              <div className="grid wrap">
                <div className="unit whole">
                  <div className="person">
                    <div className="person-image" style={{margin:'auto'}} />
                    <div className="person-info" style={{marginLeft:'46px'}}>
                      <large style={{float:'left'}}><b>Kara Gray</b></large>
                      <small style={{display:'inline'}}>, Project Manager</small>
                    </div>
                  <div style={{display: 'inline-block',marginLeft:'95px',marginTop:'-25px'}}>
                      <small>
                        <b>Timesheet UI #2.</b> "Ini tampilan yang aku improve seperti ini.
                        Tapi seperti yang kubilang kemarin, untuk development timeline nya aku
                        ngikut aja"
                      </small>
                  </div>
                  </div>
                </div>
              </div>
              <div className="grid wrap">
                <div className="unit whole" style={{marginLeft:'95px'}}>
                  <small>Tue,Jun 6 at 4:55 PM via web</small>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid wrap">
          <div className="unit whole"  style={{paddingBottom:'0', paddingTop:'0'}}>
            <div className="card project">

              <div className="grid wrap">
                <div className="unit whole">
                  <medium style={{display:'inline'}}>
                    <a href="">Transaction Based Managed Services 2017</a>
                  </medium>
                  <div className="pill pending" style={{float:'right'}}>PENDING</div>
                </div>

                <small className="project-info" style={{margin:'auto'}}>
                  (<b>4 Hours</b>) - Pengiriman data dana terdebet dan belum terdebet ke mitra
                </small>
              </div>

              <div className="grid wrap">
                <div className="unit whole">
                  <div className="person">
                    <div className="person-image" style={{margin:'auto'}} />
                    <div className="person-info" style={{marginLeft:'46px'}}>
                      <large style={{float:'left'}}><b>Kara Gray</b></large>
                      <small style={{display:'inline'}}>, Project Manager</small>
                    </div>
                  <div style={{display: 'inline-block',marginLeft:'95px',marginTop:'-25px'}}>
                      <small>
                        <b>Timesheet UI #2.</b> "Ini tampilan yang aku improve seperti ini.
                        Tapi seperti yang kubilang kemarin, untuk development timeline nya aku
                        ngikut aja"
                      </small>
                  </div>
                  </div>
                </div>
              </div>
              <div className="grid wrap">
                <div className="unit whole" style={{marginLeft:'95px'}}>
                  <small>Tue,Jun 6 at 4:55 PM via web</small>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
    // filter: ownProps.location.query.filter
  }
}
export default connect(mapStateToProps)(MyRecentActivities)
