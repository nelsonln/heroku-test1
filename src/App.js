import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
import {Col, Row} from "react-bootstrap";
//import { useForm } from '@mantine/form';
import { Button, Box, Affix } from '@mantine/core';
import {Outlet, useNavigate} from 'react-router-dom';
import Footer from './footer';
import ACPieChart from './action/ac-pie-chart';
import ACLineChart from './action/ac-line-chart';
import DatepickerForm from './action/datepickerform';

function App(props) {
  var date = new Date();
  var firstD = new Date(date.getFullYear(), date.getMonth(), 1);
  const [day, setDay] = useState({
    firstDay: formatDate(firstD),
    lastDay: formatDate(new Date())
  });

  const navigate = useNavigate();
  function ChangeTitle() {
    return (
      useEffect(() => {
        document.title = 'Account Book';
      })
    );
  }

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
    
  }
  return (
    <div style={{padding:10, height:"100%"}}>
      <div >
        {ChangeTitle()}
        <Box sx={{margin: 20}} >
          <div>Account Book
            <img src={logo} className="App-logo" alt="logo" style={{width: 30, height: 30}}/>
            <Affix position={{top: 40, right: 50}}>
              <Button type="button" onClick={() => navigate("/details")} style={{marginRight:10}}>Details</Button>
              <Button type="button" onClick={() => navigate("/Add")}>Add</Button>
            </Affix>
          </div>

          <Outlet />
          <hr></hr>
        </Box>
        <DatepickerForm getDate={getDate} disable={true} />
        <Box sx={{margin: 20, padding:10, paddingTop:20, backgroundColor: "white"}}>
          <Row>
            <Col md="6" sm="12">
              <div className="recharts-wrapper" style={{textAlign: "center"}}>
                  <ACPieChart day={day} />
              </div>
            </Col>
            <Col md="6" sm="12">
              <div className="recharts-wrapper" style={{textAlign: "center"}}>
                  <ACLineChart />
              </div>
            </Col>
          </Row>
        </Box>
      </div>
      <Footer />
    </div>
  );
}


export default App;
