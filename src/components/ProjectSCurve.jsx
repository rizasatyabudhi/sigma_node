import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link, browserHistory } from 'react-router'
import store from '../reducers/combineReducers.jsx'
import {Divider, Header, ProjectHeader, SCurve ,TableNew,PageLoader} from  './Components.jsx'
import {getSCurve,pop} from './actions.jsx'


class ProjectSCurve extends Component {
  componentWillMount(){
    const id = store.getState().page.id
    store.dispatch(getSCurve(id))
    // const state = store.getState()
    // const s_curve = state.data.s_curve ? state.data.s_curve : null
  }
    render(){
      const state = store.getState()
      const s_curve = state.data.s_curve ? state.data.s_curve : null
      
      const dataSCurve = s_curve?s_curve.map((value,index)=>{
        return {name:value.Week,Target:value.pv_percent, Actual:value.ev_percent}
      }):null

      const tableSCurve = s_curve?s_curve.map((value,index)=>{
        return {column:[
          {value: `Week ${value.Week} ( ${value.startdate} --- ${value.enddate} )`},
          {value:value.PV == null ? '0' : value.PV},
          {value:value.EV == null ? '0' : value.EV},
        ]}
      }):null

      if (!s_curve) {
        return <PageLoader />;
      }

      return(
        <div className='project-DocsFiles'>
          <div className='grid padding-left'>
            <div className='unit whole'>
              <ProjectHeader projectName='Transaction Based Managed Services 2017' sectionName='S Curve'/>
            </div>
          </div>

          <div className="grid padding-left">
            <div className="unit whole">
              <div className='card' style={{padding:'15px'}}>
                <div className="unit whole">
                    <SCurve
                    data={dataSCurve}
										lines={[{key:'Target', stroke:'#65bdf4'},
														{key:'Actual', stroke:'#cf000f'}
													]}
                    style={{marginTop:'50px'}}
                  />
                </div>
                <div className="unit whole">
                 <TableNew
                 tableHeader={[  
                          { value: 'Time Period' },
                          { value: 'PV' },
                          { value: 'EV' }
                        ]}
                        tableData={tableSCurve}
                      />
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
export default connect(mapStateToProps)(ProjectSCurve)
// export default Login
