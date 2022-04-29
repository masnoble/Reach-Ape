import React, {Component} from 'react';
import Course from './Course';

class Term extends Component {
	
	render (){
		let dispYear;
		if(this.props.term != "Fall"){
			dispYear = this.props.year+1;
		}
		else{
			dispYear = this.props.year;
		}
		//console.log(Object.keys(this.props.data));
		return (
		<div className="semester">
			{this.props.term} {dispYear}
			<Course data={Object.keys(this.props.data)} catalog={this.props.catalog}/>
		</div>
	  	);
	}
}
export default Term;
