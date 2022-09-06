import {React, useState} from 'react';
import { Button, Box, Affix} from '@mantine/core';
import {Col, Row} from "react-bootstrap";
import {Outlet, useNavigate} from 'react-router-dom';
//import Db from './db';
import AddForm from './action/add-form';
import Toastr from './action/toastr';
import Footer from './footer';

function Add(){
  const navigate = useNavigate();
  
  const [show, setShow] = useState(false);
  
  function addRecord(record){
    console.log(record);
    var post_data = {
      event: record.event,
      amount: record.amount,
      type: record.type,
      remark: record.remark,
      action: "add-new"
    };
    
    fetch('http://admin.nelsonlin.pa-sys.com/test/acbook/', {
      method: 'POST',
      body: JSON.stringify(post_data),
    })
    .then(res => res.json())
    .then(data => {
      if(data[0]==="OK"){
        setShow(true);
        setTimeout(function() {
          window.location.reload();
        }, 4000);
      }
    })
    .catch(e => {
  //    console.log(e)
    });
    
  }
  
  return (
    <div style={{padding:10, height:"100%"}}>
      <Box sx={{margin: 20}}>
        <div style={{height: 30}}>Add New
          <Affix position={{top: 40, right: 50}}>
            <Button type="button" onClick={() => navigate(-1)}>Back</Button>
          </Affix>
          <Toastr show={show} />
        </div>
        <Outlet />
        <hr></hr>
      </Box>
      <Box sx={{margin: 20, padding:10, paddingTop: 20, backgroundColor: "white", height:"58%"}}>
        <Row className="justify-content-md-center"><Col md="10">
          <AddForm addRecord={addRecord} />
          </Col></Row>
      </Box>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}
export default Add;

