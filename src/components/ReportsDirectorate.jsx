import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import { deleteAuthentication } from './actions.jsx';
import store from '../reducers/combineReducers.jsx';
import { Select, Input, BarChart, Divider, Meter } from './Components.jsx';

class ReportsDirectorate extends Component {
  render() {
    return (

			<div>
				<div className="grid wrap">
					<div className="unit golden-large">
						<Select
              style={{ width: '100%', display: 'inline-block', float: 'left' }}
              items={{
                items : [
                {title : 'DIRECTORATE'},
                {title : 'BUSINESS UNIT'}
                ]
							}}/>
					</div>
					<div className="unit golden-small">
						<Select
              style={{ width: '50%', display: 'inline-block', float: 'left',marginLeft:'29%' }}
              items={{
                items: [
              { title: '2017' },
              { title: '2018' },
                ],
              }}
            />
            <button className="btn-primary"style={{ padding: '11px 14px', marginLeft: '20px' }} >
              <span className="material-icons" style={{ color: 'white' }}>search</span>
            </button>
          </div>
        </div>

        <div className="grid wrap">
          <div className="unit whole">
            <Divider text="OVERVIEW" />
          </div>
        </div>

        <div className="grid wrap">
          <div className="unit half">
            <div className="card" style={{ padding: '35px' }}>
              <large>Projects</large>
              <div className="grid wrap">
                <div className="unit golden-small">
                  <Meter
                      progress={35}
                      text='35'
                    />
                </div>
                <div className="unit golden-large">
                  <div className="grid wrap">
                    <div className="unit half">
                      <medium className="project-value-label completed">Completed</medium>
                      <large className="project-value-number completed">10</large>

                      <medium className="project-value-label not-started">Not Started</medium>
                      <large className="project-value-number not-started">6</large>
                     </div>
                     <div className="unit half">
                      <medium className="project-value-label in-progress"> In Progress</medium>
                      <large className="project-value-number in-progress"> 24</large>
                     </div>
                   </div>
                </div>




              </div>
            </div>
          </div>

          <div className="unit half">
            <div className="card" style={{ padding: '35px' }}>
              <large>Finance (IDR)</large>
              <div className="grid wrap">
                <div className="unit half">
                  <medium className="project-value-label">Total Project Value</medium>
                  <large className="project-value-number">10 M</large>

                  <medium className="project-value-label">Invoiced</medium>
                  <large className="project-value-number">1 M</large>
                </div>
                <div className="unit half">
                  <medium className="project-value-label"> Revenue</medium>
                  <large className="project-value-number"> 8 M</large>

                  <medium className="project-value-label">Cashed Out</medium>
                  <large className="project-value-number">9 M</large>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="grid wrap">
          <div className="unit whole">
            <Divider text="RESOURCES" btnRightText="MORE" />
          </div>
        </div>

        <div className="grid wrap narrow">
          <div className="unit whole">
            <div className="card" style={{ padding: '35px' }}>
              <div className="grid">
                <div className="unit golden-small">
                  <large>Timesheet</large>

                </div>
                <div className="unit golden-large">
                  <div className="grid">
                    <div className="unit four-fifths">
                      <Select
                        style={{ width: '48%', display: 'inline-block', float: 'right' }}
                        items={{
                          items: [
                          { title: 'JANUARY' },
                          { title: 'FEBRUARY' },
                          ],
                        }}
                      />
                    </div>
                    <div className="unit one-fifth">
                      <button className="btn-primary"style={{ padding: '11px 14px' }} ><span className="material-icons" style={{ color: 'white' }}>search</span></button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="grid">
                <div className="unit one-third">
                  <Meter
                    progress={75}
                    text="75"
                    title="Entry"
                    status="Normal"
                  />
                </div>
                <div className="unit one-third">
                  <Meter
                    progress={100}
                    text="100"
                    title="Utilization"
                    status="OVERLOAD"
                  />
                </div>
                <div className="unit one-third" />
              </div>
            </div>
          </div>
				</div>

				<div className='grid wrap narrow'>
            <div className='unit whole'>
              <div className='card' style={{padding:'35px'}}>
                <div className='grid'>
                  <div className='unit golden-small'>
                    <large>Entry</large>

                  </div>
                  <div className='unit golden-large'>
                    <div className='grid'>
                      <div className='unit four-fifths'>
												<Select
                        style={{ width: '48%', display: 'inline-block', float: 'right' }}
                        items={{
                          items: [
                          { title: 'JANUARY' },
                          { title: 'FEBRUARY' },
                          ],
                        }}
                      />
                      </div>
                      <div className='unit one-fifth'>
                        <button className='btn-primary'style={{padding:'11px 14px'}} ><span className='material-icons' style={{color:'white'}}>search</span></button>

                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid'>
                  <div className='unit whole'>
                    <BarChart
                      data={[
                        {name: 'Jan', value: 20},
                        {name: 'Feb', value: 10},
                        {name: 'Mar', value: 15},
                        {name: 'Apr', value: 13},
                        {name: 'May', value: 16},
                        {name: 'Jun', value: 18},
                        {name: 'Jul', value: 17},
                        {name: 'Aug', value: 19},
                        {name: 'Sep', value: 12},
                        {name: 'Oct', value: 30},
                        {name: 'Nov', value: 23},
                        {name: 'Des', value: 21}
                      ]}/>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid wrap narrow'>
            <div className='unit whole'>
              <div className='card' style={{padding:'35px'}}>
                <div className='grid'>
                  <div className='unit golden-small'>
                    <large>Utilization</large>

                  </div>
                  <div className='unit golden-large'>
                    <div className='grid'>
                      <div className='unit four-fifths'>
                        <Select
                        style={{ width: '48%', display: 'inline-block', float: 'right' }}
                        items={{
                          items: [
                          { title: 'JANUARY' },
                          { title: 'FEBRUARY' },
                          ],
                        }}
                      />
                      </div>
                      <div className='unit one-fifth'>
                        <button className='btn-primary'style={{padding:'11px 14px'}} ><span className='material-icons' style={{color:'white'}}>search</span></button>

                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid'>
                  <div className='unit whole'>
                    <BarChart
                      data={[
                        {name: 'Jan', value: 20},
                        {name: 'Feb', value: 10},
                        {name: 'Mar', value: 15},
                        {name: 'Apr', value: 13},
                        {name: 'May', value: 16},
                        {name: 'Jun', value: 18},
                        {name: 'Jul', value: 17},
                        {name: 'Aug', value: 19},
                        {name: 'Sep', value: 12},
                        {name: 'Oct', value: 30},
                        {name: 'Nov', value: 23},
                        {name: 'Des', value: 21}
                      ]}/>

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
    // filter: ownProps.location.query.filter
  };
}
export default connect(mapStateToProps)(ReportsDirectorate);
// export default Login