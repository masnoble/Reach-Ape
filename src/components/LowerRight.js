import React, {Component} from 'react';
import build from 'react-light-accordion';
//jQuery libraries
const $ = require('jquery');
$.DataTable = require('datatables.net');




class LowerRight extends Component {

    componentDidMount() {

        document.addEventListener("dragstart", function (event) {
            // store a ref. on the dragged elem
            var target = event.target.cloneNode();

            event.dataTransfer.setData("course_id", target.id);

            setTimeout(() => {
                target.style.display = "none";
            }, 0);
            
        }, false);
    


         /* events fired on the drop targets */
        document.addEventListener("dragover", function (event) {
            // prevent default to allow drop
            event.preventDefault();
        }, false);
        

        if(this.props.catalog){
            let courses = Object.values(this.props.catalog.courses);
		    $("#catalog").DataTable({
                retrieve: true,
                data: courses, 
                'columnDefs': [
                    {
                       'targets': 0,
                       'createdCell':  function (td, cellData, rowData, row, col) {
                          $(td).attr('class', 'tbl'); 
                          $(td).attr('draggable', 'true'); 
                          $(td).attr('id', cellData);
                       }
                    }
                 ],
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