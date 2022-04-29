import React, {Component} from 'react';

class Term extends Component {
	
	render (){
		let dispYear;
		const courseList = this.props.data;
		if(this.props.term != "Fall"){
			dispYear = this.props.year+1;
		}
		else{
			dispYear = this.props.year;
		}
		let courses = Object.entries(courseList).map(([key,value]) => {
			let courseName = ""
			if(typeof this.props.catalog.courses[key] == "undefined"){
				courseName = key+ " " + "No Name Found";
			}
			else{
				courseName = key+ " " + this.props.catalog.courses[key].name;
			}
		  	return (
				<p>
					{courseName}
				</p>
			);	
		});
		return (
		<div className="semester">
			{this.props.term} {dispYear}
			{courses}
		</div>
	  	);
	}
}
export default Term;
