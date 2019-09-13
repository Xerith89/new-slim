import React from 'react';
import {Spinner, Button, Card, CardTitle, CardBody} from './Components/Core'
import {Form, TextInput, EmailInput, NumberInput, PasswordInput, TextArea, Select} from './Components/Form'

function App() {
    return ( 
    <div className = "App">
        <Spinner style={{color: 'red'}} />
        <Card style={{width: '60vw'}}className="mr-5 offset-sm-2">
            <CardTitle title="My Card" className="text-center"/>
            <CardBody>
            <Form onSubmit={(event) => {
                event.preventDefault();
                console.log("submitted form");
            }}>
                <TextInput labelText="My Text Input" labelStyle={{color: 'red'}} name="text-input" value="" placeholder="test" onChange={() => alert("Change")} validationMessage="Error" className="form-control" />
                <EmailInput labelText="My Email Input" className="form-control" placeholder="Email here" validationMessage="Invalid Email"/>
                <NumberInput labelText="My Number Input" min="2" max="6" step="2" className="form-control"/>
                <PasswordInput labelText="My Password Input" className="form-control"/>
                <TextArea labelText="My Text Area" rows="4" cols="4" className="form-control"/>
                <Select labelText="My Select" options={['','Banana', 'Orange', 'Pineapple']} className="form-control"/>
                <Button type="submit" className="btn btn-primary mt-2" text='Submit' />
            </Form>
            <Button  className="btn btn-primary mt-2" onClick={() => alert("example")} text='Test' />
            </CardBody>
        </Card>
        
    </div>
    );
}

export default App;