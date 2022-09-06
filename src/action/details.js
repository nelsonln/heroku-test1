import {React, useState} from 'react';
import { Button, Box, Affix} from '@mantine/core';
import {Col, Row} from "react-bootstrap";
import {Outlet, useNavigate} from 'react-router-dom';
import Footer from '../footer';
import DatepickerForm from './datepickerform';
// import Form from 'react-bootstrap/Form';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import './details.css';

function Details(){
    const navigate = useNavigate();
    var date = new Date();
    var firstD = new Date(date.getFullYear(), date.getMonth(), 1);
    const [day, setDay] = useState({
        firstDay: formatDate(firstD),
        lastDay: formatDate(new Date())
    });
    const [type, setType] = useState("");
  
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    
    function getDate(date){
        var formatFirst = formatDate(date.firstDay);
        var formatLast = formatDate(date.lastDay)
        setDay({
            ...day,
            firstDay: formatFirst,
            lastDay: formatLast
        });
        setType(date.type);
    }

    var post_data = {
        action: "check-all",
        date_from: day.firstDay,
        date_to: day.lastDay,
        type: type
      };
    
      fetch('http://admin.nelsonlin.pa-sys.com/test/acbook/', {
        method: 'POST',
        body: JSON.stringify(post_data),
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        genTableData(data);
      })
      .catch(e => {
    
      });
    const initialArray = [
        {event: "", amount: "", type: "", remark: "", created_time: ""}
    ];
    const [tableData, setTableData] = useState(initialArray);
    function genTableData(table_data){
        setTableData(table_data);
    }
    
    const columns = [
    {
        dataField: "event",
        text: "Event"
    },
    {
        dataField: "amount",
        text: "Amount"
    },
    {
        dataField: "type",
        text: "Event Type",
        sort: true
    },
    {
        dataField: "remark",
        text: "Remark"
    },
    {
        dataField: "created_time",
        text: "Created Time"
        }
    ];
      

    return(
        <div style={{padding:10, height:"100%"}}>
        <Box sx={{margin: 20}}>
            <div style={{height: 30}}>Details
            <Affix position={{top: 40, right: 50}}>
                <Button type="button" onClick={() => navigate("/Add")} style={{marginRight:10}}>Add</Button>
                <Button type="button" onClick={() => navigate(-1)}>Back</Button>
            </Affix>
            </div>
            <Outlet />
            <hr></hr>
        </Box>

        <DatepickerForm getDate={getDate} disable={false}/>
        
        <Box sx={{margin: 20, padding:10, paddingTop: 20, backgroundColor: "white", height:"38%"}}>
            <Row className="justify-content-md-center"><Col md="10">
            <BootstrapTable
                bootstrap4
                keyField="id"
                data={tableData}
                columns={columns}
                pagination={paginationFactory({ sizePerPage: 5 })}
            />
            </Col></Row>
        </Box>
        <Row>
            <Footer />
        </Row>
        </div>
    );
}

export default Details;