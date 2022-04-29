import React, {Component} from 'react';
import Course from './Course';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

class UpperLeft extends Component {
	
	render (){

	    var cats;
        if (this.props.requirements){

            cats = Object.keys(this.props.requirements).map((key, value) => {
                //console.log(this.props.requirements[key]);
                return (
                    <AccordionItem title={key}>
                        <Course data={this.props.requirements[key]} catalog={this.props.catalog}/>
                    </AccordionItem>
                );		
            });
        }

        return (
            <div id="UL">
                <Accordion atomic={true}>

                    {cats}

                </Accordion>
            </div>
        );
	}	

    

        
      
}

export default UpperLeft;