import React, {Component} from 'react';

//import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import UpperRight from './components/UpperRight';
import UpperLeft from './components/UpperLeft'
import LowerLeft from './components/LowerLeft';
import LowerRight from './components/LowerRight';
const $ = require('jquery');
$.DataTable = require('datatables.net');


class Ape extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  requirements: null,
		  plan: null,
		  planList: null,
		  catalog: null,
		  planChc: null,
		};
		this.handleChanged = this.handleChanged.bind(this);
	}

	componentDidMount() {
		console.log("component");
		this.loadNewPlan();
	}

	update(){
		console.log("cwoeifnewoin");
		this.setState({
			requirements: null,
			plan: null,
			planList: null,
			catalog: null,
			planChc: null,
		  })
		this.loadNewPlan();
	}
	
	loadNewPlan(){

		fetch("http://judah.cedarville.edu/~jthomas/vJosh/proj5/getAll.php", {
            // Adding method type
            method: "POST",
            //mode: 'no-cors',
            // Adding body or contents to send
            body: JSON.stringify({
                'plan': this.props.planId,
				'ID': this.props.user,
            })
        })
        .then(response => response.json())
	    .then(data => this.setState({
            plan: this.convertPlan(data.plan),
			planChc: data.planChoices,
			catalog: data.catalog,
			requirements: data.requirements,
		})
		);
		
		// fetch('http://judah.cedarville.edu/~gallaghd/cs3220/ape/getCombinedNoSession.php')
		// 	 .then(response => response.json())
		// 	 .then(data => this.setState({plan: this.convertPlan(data.plan),
		// 		  planList: data.planList, catalog: data.catalog}));
		 
		// fetch('http://judah.cedarville.edu/~gallaghd/cs3220/ape/getRequirementsNoSession.php')
		// 	 .then(response => response.json())
		// 	 .then(data => this.setState({requirements: data}));
	}
	
	convertPlan(currPlan) {
		if(currPlan == "problem finding student for plan"){
			return currPlan;
		}
		currPlan.years = [];
		for (var key in currPlan.courses) {
			var course = currPlan.courses[key];
			var currYear;
			if(course.term != "Fall"){
				currYear = course.year-1;
			}
			else{
				currYear = course.year;
			}
			if (currPlan.years[currYear] === undefined){
				currPlan.years[currYear] = [];
				currPlan.years[currYear]['year'] = currYear;
				currPlan.years[currYear]['fa'] = [];
				currPlan.years[currYear]['sp'] = [];
				currPlan.years[currYear]['su'] = [];
			}
			if (course.term === "Fall"){
				currPlan.years[currYear]['fa'][course.id] = course;
			}
			else if (course.term === "Spring"){
				currPlan.years[currYear]['sp'][course.id] = course;
			}
			else {
				currPlan.years[currYear]['su'][course.id] = course;
			}
		}
		return currPlan;
	}
	
	logout(){
		this.props.setLoggedIn(false)
		this.props.setUser(null);
  	}

	handleChanged(id){
		//console.log(event.target.value);
		//console.log("IHIHIHIH");
		this.props.planChanged(id);
	}


	render(){
		//console.log("render");
		return (
		  <div className="content" id="main"> <Banner/>
			  <div className="left">
					<UpperLeft requirements={this.state.requirements} catalog={this.state.catalog} />
					<div id='LL'>
						<LowerLeft planChs={this.state.planChc} planChanged={this.handleChanged}/>
						<button onClick = {this.logout.bind(this)}>Log Out </button>
					</div>
			  </div>
			  <div className="right">
			  		<UpperRight plan={this.state.plan} catalog={this.state.catalog} doCat={this.buildDT}/>
					{this.state.catalog && <LowerRight catalog={this.state.catalog} ref={this.child}/> }
			  </div>
		  </div>
		);
	  }
}

export default Ape;
