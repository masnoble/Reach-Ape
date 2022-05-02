import React, {cloneElement, Component} from 'react';

class Course extends Component {
	
	render (){
        
		let dispYear;
		const courseList = this.props.data;
        // console.log(Object.entries(courseList));
		let courses = Object.entries(courseList).map(([key,value]) => {
			let courseName = ""
			let courseID = "";
			if(typeof this.props.catalog.courses[value] == "undefined"){
				courseName = value+ " " + "No Name Found";
			}
			else{
				courseName = value+ " " + this.props.catalog.courses[value].name;
				courseID = value;
			}

			const dragStart = e => {
				var target = e.target;
				if (e.target.parentNode.className == "panel") {
					target = target.cloneNode()
				}
				e.dataTransfer.setData("course_id", target.id);

				setTimeout(() => {
					target.style.display = "none";
				}, 0);
			}

			const dragOver = e => {
				e.stopPropagation();
			}

		  	return (
				<p
					id={courseID}
					draggable='true'
					onDragStart={dragStart}
					onDragOver={dragOver}
				>
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