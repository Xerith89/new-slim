import React from 'react';
import {Button, Card, CardTitle, CardBody, NavBar, NavLinks} from './Components/Core'
import {Spinner, Badge} from './Components/Utility'
import {Form, TextInput, EmailInput, NumberInput, PasswordInput, TextArea, Select, Radio, Checkbox} from './Components/Form'
import {Alert, AlertHeading, Paragraph, HorizontalLine} from './Components/Styling'
import Modal from './Components/Modal';

function App() {
    return ( 
    <div className = "App">
        <NavBar className="navbar-dark bg-dark text-white" brand="Example">
            <NavLinks navLinks={['Home','About']} />
        </NavBar>
        <Spinner className="m-5" style={{color: 'red'}} />
        <Card style={{width: '60vw'}}className=" mx-auto mb-4">
            <CardTitle title="My Card" className="text-center">
                <Badge className="badge-dark badge-pill" display="Pill Badge"/>
            </CardTitle>
            <CardBody>
                <Alert className="alert-success">
                    <AlertHeading text="Well Done!" />
                    <Paragraph text="You did it, and now this is a nice paragraph as a reward" />
                    <HorizontalLine />
                    <Paragraph text="Have another paragraph" />
                </Alert>
                <Modal />
                <Form onSubmit={(event) => {
                    event.preventDefault();
                    console.log("submitted form");
                }}>
                    <TextInput labelText="My Text Input" name="text-input" value="" placeholder="test" onChange={() => console.log("Change")} validationText="Error" className="form-control" />
                    <EmailInput labelText="My Email Input" className="form-control" placeholder="Email here" validationText="Invalid email"/>
                    <NumberInput labelText="My Number Input" min="2" max="6" step="2" className="form-control"/>
                    <PasswordInput labelText="My Password Input" className="form-control"/>
                    <TextArea labelText="My Text Area" rows="4" cols="4" className="form-control"/>
                    <Select labelText="My Select" options={['','Banana', 'Orange', 'Pineapple']} className="form-control"/>
                    <Radio labelText="Option 1" name="radioTest" value="Option 1" onChange={() => console.log("hello")}/>
                    <Radio labelText="Option 2" name="radioTest" value="Option 2" />
                    <Radio labelText="Option 3" name="radioTest" value="Option 3" />
                    <Checkbox labelText="My Checkbox" className="form-check" />
                    <Button type="submit" className="btn btn-primary mt-2" display='Submit' />
                </Form>
                <Button className="btn btn-primary mt-2" onClick={() => console.log("example")} display='Test' >
                    <Badge className="badge-danger ml-1" display="2"/>
                </Button>
            </CardBody>
        </Card>
        
    </div>
    );
}

export default App;