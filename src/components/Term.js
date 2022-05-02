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

		const drop = e => {
			e.preventDefault();
			const course_id = e.dataTransfer.getData('course_id');

			const c = document.getElementById(course_id);
			c.style.display = 'block';

			e.target.appendChild(c);
		}

		const dragOver = e => {
			e.preventDefault();
		}
		
		return (
		<div 
			id={this.props.term + dispYear}
			className={"semester " + this.props.term + dispYear}
			onDrop={drop}
			onDragOver={dragOver}
			>
			{this.props.term} {dispYear}
			<Course data={Object.keys(this.props.data)} catalog={this.props.catalog}/>
		</div>
	  	);
	}
}
export default Term;
