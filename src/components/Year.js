import React, {Component} from 'react';
import Term from './Term';

class Year extends Component {
	
	render (){
	  return (
		<div class="year">
			<Term year={this.props.year} catalog={this.props.catalog} data={this.props.data['fa']} term="Fall" />
			<Term year={this.props.year} catalog={this.props.catalog} data={this.props.data['sp']} term="Spring" />
			<Term year={this.props.year} catalog={this.props.catalog} data={this.props.data['su']} term="Summer" />
		</div>
	  );
	}
}
export default Year;
