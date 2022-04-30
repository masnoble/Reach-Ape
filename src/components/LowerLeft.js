import React, {Component} from 'react';

class LowerLeft extends Component {


	handleChanged(event){
		this.props.planChanged(event.target.value);
	}

	render (){

		// let planChoices = this.props.planChs
		// //select = document.getElementById('year');
		// let newOption = document.createElement('option');
		// newOption.text = "Select a plan here";
		// select.add(newOption);
		// for(const [id, pln] of Object.entries(planChoices)){
		// 	let newOption = document.createElement('option');
		// 	newOption.text = pln;
		// 	newOption.value = id;
		// 	select.add(newOption);
		// }

		//console.log(this.props.planChs);


		let data = this.props.planChs
		let planChoices = "";
		if (this.props.planChs) {
			planChoices = Object.entries(data).map((value, key) => {
			// console.log(value[0]);
			// console.log(Object.entries(data));
			return (
					<option value={value[0]}>
						{value[1]}
					</option>
				);		
			});
		}
	  return (
			<div>
				<label for="planChs">Chose Plan:</label>
				<select id="planChs" onChange={this.handleChanged.bind(this)}>
					<option value={-1}>Select a plan here</option>
					{planChoices}
				</select>
			</div>
	  );
	}	
}

export default LowerLeft;
