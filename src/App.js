import React from 'react';
import {Spinner, Button, Card, CardTitle, CardBody} from './Components/Core'
import {Form, TextInput} from './Components/Form'

function App() {
    return ( 
    <div className = "App">
        <Spinner style={{color: 'red'}} />
        <Card style={{width: '60vw'}}className="mr-5 offset-sm-2">
            <CardTitle title="My Card" className="text-center"/>
            <CardBody>
            <Form>
                <TextInput labelText="My Text Input" labelStyle={{color: 'red'}} name="text-input" value="" placeholder="test" onChange={() => alert("Change")} className="form-control" />
            </Form>
                <Button className="btn btn-primary mt-2" onClick={() => alert("example")} text='Test' />
            </CardBody>
        </Card>
        
    </div>
    );
}

export default App;