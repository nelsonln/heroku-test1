import {React, useState} from 'react';
import { Button, Group, TextInput } from '@mantine/core';
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './add-form.css';

export default function AddForm(props){
  function handleSubmit(e) {
    e.preventDefault();
//    console.log(record);
    props.addRecord({
      event: record.event,
      amount: record.amount,
      type: record.type,
      remark: record.remark
    });
  }
  
  const [record, setRecord] = useState({
    event:"",
    amount: "",
    type: "",
    remark: "",
    selectValue: {
      game: "game",
      house: "house",
      eating: "eating",
      buying: "buying",
      others: "others"
    }
  });
  
  
  function handleChange(event){
    setRecord({
      ...record,
      [event.target.name]: event.target.value,
    });
//    console.log(event.target.value);
  }
    
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col md="6">
          <TextInput
            required
            name="event"
            label="Event"
            placeholder="your event"
            autoComplete="off"
            value={record.event}
            onChange={handleChange}
            />
          </Col>
          <Col md="6">
          <TextInput
            required
            name="amount"
            label="Amount"
            value={record.amount}
            placeholder="event costs"
            autoComplete="off"
            onChange={handleChange}
            />
          </Col>
          <Col md="6">
            <Form.Label className="llabel">Type<span style={{color: "red"}}> *</span></Form.Label>
            <Form.Select aria-label="Default select example" required name="type" onChange={handleChange}>
              <option>Open this select menu</option>
              <option value={record.selectValue.game}>game</option>
              <option value={record.selectValue.house}>house</option>
              <option value={record.selectValue.eating}>eating</option>
              <option value={record.selectValue.buying}>buying</option>
              <option value={record.selectValue.others}>others</option>
            </Form.Select>
          </Col>
          <Col md="6">
          <TextInput
            label="Remark"
            name="remark"
            value={record.remark}
            placeholder="remark"
            autoComplete="off"
            onChange={handleChange}
            />
          </Col>
        </Row>

        <Group position="left" mt="xl">
          <Button
            variant="outline"
            type="submit"
            >
            Submit
          </Button>
        </Group>
      </form>
    </div>
  );
}