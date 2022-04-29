import React, {Component} from 'react';

class Course extends Component {
	
	render (){
        
		let dispYear;
		const courseList = this.props.data;
        //console.log(Object.entries(courseList));
		let courses = Object.entries(courseList).map(([key,value]) => {
			let courseName = ""
			if(typeof this.props.catalog.courses[value] == "undefined"){
				courseName = value+ " " + "No Name Found";
			}
			else{
				courseName = value+ " " + this.props.catalog.courses[value].name;
			}
		  	return (
				<p>
					{courseName}
				</p>
			);	
		});
        
        return (
            courses
        );
	}
}
export default Course;