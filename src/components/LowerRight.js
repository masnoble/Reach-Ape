import React, {Component} from 'react';
import build from 'react-light-accordion';
//jQuery libraries
const $ = require('jquery');
$.DataTable = require('datatables.net');




class LowerRight extends Component {

    componentDidMount() {


        console.log(this.props.catalog);
        

        if(this.props.catalog){
            // this.props.build();
            let courses = Object.values(this.props.catalog.courses);
		    $("#catalog").DataTable({
                retrieve: true,
                data: courses, 
                columns: [
                    { data: 'id', title: 'ID' },
                    { data: 'name', title: 'Name'},
                    { data: 'description',title: 'Description' },
                    { data: 'credits',title: 'Credits' }
                    ]
                });
            }
        
    }  

    build(){

        console.log("THISN IS MY NAME");

        if(this.props.catalog){
            // this.props.build();
            let courses = Object.values(this.props.catalog.courses);
		    $("#catalog").DataTable({
			data: courses, 
			columns: [
				{ data: 'id', title: 'ID' },
				{ data: 'name', title: 'Name'},
				{ data: 'description',title: 'Description' },
				{ data: 'credits',title: 'Credits' }
                ]
            });


        }
    }
    componentWillUnmount(){
       $('.data-table-wrapper')
       .find('table')
       .DataTable()
       .destroy(true);
    }
    shouldComponentUpdate() {
        return false;
    }


    render() {

        return (
            <div id='LR'>
                <table id="catalog" />
            </div>
        );
        
    }
}



export default LowerRight;