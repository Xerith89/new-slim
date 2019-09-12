import React from 'react';
import {Spinner, Button} from './Components/Core'

function App() {
    return ( 
    <div className = "App">
        <Spinner style={{color: 'red'}} />
        <Button className="btn btn-primary ml-5" onClick={() => alert("example")} text='Test' />
    </div>
    );
}

export default App;