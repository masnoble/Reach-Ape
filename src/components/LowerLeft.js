import React, {Component} from 'react';

class UpperRight extends Component {

	
	render (){

		let planChoices = combd.planChoices;
		//select = document.getElementById('year');
		let select = document.getElementById('planChs');
		select.textContent = '';
		let newOption = document.createElement('option');
		newOption.text = "Select a plan here";
		select.add(newOption);
		for(const [id, pln] of Object.entries(planChoices)){
			newOption = document.createElement('option');
			newOption.text = pln;
			newOption.value = id;
			select.add(newOption);
		}

	
	  var yrs = "";
	  if (this.props.plan && this.props.plan.years) {
		 yrs = this.props.plan.years.map((value, key) => {
		  return (
				<Year catalog={this.props.catalog} year={key} data={value} />
			);		
	  });
	  }
	  return (
		<div id="UR">
			<div id="plan">
				{yrs}
			</div>
		</div>
	  );
	}	
}

export default UpperRight;
