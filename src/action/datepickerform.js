import React, {useState} from 'react';
import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';
import {Col, Row} from "react-bootstrap";
import { Box, Group, Button } from '@mantine/core';
import Form from 'react-bootstrap/Form';
import './add-form.css';

export default function Datepicker(props){
    var date = new Date();
    var firstD = new Date(date.getFullYear(), date.getMonth(), 1);

    const [firstDay, setFirstDay] = useState(firstD);
    const [lastDay, setLastDay] = useState(new Date());

    function handleSubmit(e){
        e.preventDefault();
        props.getDate({
            firstDay: firstDay,
            lastDay:lastDay,
            type: record.type
        });
    }
    const [record, setRecord] = useState({
        type:"",
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
    
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{margin: 20, padding:20}} style={{backgroundColor: "white"}}>
                <Row>
                    <Col md="4">
                    <Form.Label className="llabel">Type</Form.Label>
                    <Form.Select aria-label="Default select example" required name="type" id="picker" disabled={props.disable} onChange={handleChange} className="mantine-DatePicker-input mantine-Input-input mantine-DatePicker-input mantine-Input-withIcon mantine-DatePicker-withIcon mantine-1hu8z5f">
                    <option>Open this select menu</option>
                    <option value={record.selectValue.game}>game</option>
                    <option value={record.selectValue.house}>house</option>
                    <option value={record.selectValue.eating}>eating</option>
                    <option value={record.selectValue.buying}>buying</option>
                    <option value={record.selectValue.others}>others</option>
                    </Form.Select>
                    </Col>

                    <Col md="4">
                    <DatePicker
                        placeholder="Pick date"
                        label="Date From"
                        inputFormat="YYYY-MM-DD"
                        labelFormat="YYYY-MM"
                        defaultValue={firstD}
                        icon={<IconCalendar size={16} />}
                        name="firstDay"
                        onChange={setFirstDay}
                        value={firstDay}
                    />
                    </Col>
                    
                    <Col md="4">
                    <DatePicker
                        placeholder="Pick date"
                        label="Date To"
                        inputFormat="YYYY-MM-DD"
                        labelFormat="YYYY-MM"
                        defaultValue={new Date()}
                        icon={<IconCalendar size={16} />}
                        name="lastDay"
                        onChange={setLastDay}
                        value={lastDay}
                    />
                    </Col>
                </Row>
                <Group position="right" mt="xl">
                    <Button
                        variant="outline"
                        type="submit"
                        >
                        Submit
                    </Button>
                </Group>
            </Box>
            
        </form>
        
    );
}