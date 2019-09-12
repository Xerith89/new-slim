import React from 'react';
import {Spinner, Button, Card, CardTitle, CardBody} from './Components/Core'

function App() {
    return ( 
    <div className = "App">
        <Spinner style={{color: 'red'}} />
        <Card className="ml-4 mr-5">
            <CardTitle title="My Card" className="text-center" style={{backgroundColor: 'red', color: '#ffffff'}} />
            <CardBody style={{backgroundColor: 'green'}}>
                <Button className="btn btn-primary ml-5" onClick={() => alert("example")} text='Test' />
            </CardBody>
        </Card>
        
    </div>
    );
}

export default App;