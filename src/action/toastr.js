import {React, useState, useEffect} from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function Toastr(props) {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    setShow(props.show);
  }, [props]);
  
  return (
    <ToastContainer position="top-end" className="p-3" id="toastr-container">
      <Toast onClose={()=>setShow(false)} show={show} autohide delay={3000}>
        <Toast.Header>
          
        </Toast.Header>
        <Toast.Body>Added new record.</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}