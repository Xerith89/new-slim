import React from 'react';
import {Spinner, Button, Card, CardTitle, CardBody, NavBar, NavLinks} from './Components/Core'
import {Form, TextInput, EmailInput, NumberInput, PasswordInput, TextArea, Select, Radio, Checkbox} from './Components/Form'

function App() {
    return ( 
    <div className = "App">
        <NavBar className="navbar-dark bg-dark text-white" brand="Example">
            <NavLinks navLinks={['Home','About']} />
        </NavBar>
        <Spinner style={{color: 'red'}} />
        <Card style={{width: '60vw'}}className="mr-5 offset-sm-2">
            <CardTitle title="My Card" className="text-center"/>
            <CardBody>
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
            <Button className="btn btn-primary mt-2" onClick={() => console.log("example")} display='Test' />
            </CardBody>
        </Card>
        
    </div>
    );
}

export default App;