import React from 'react';
import Dashboard from './Components/Meta/Dashboard'
import TopBar from './/Components/Core/TopBar'

function App() {
    return ( 
    <div className = "App">
        <TopBar user="Alex"/>
        <Dashboard />
    </div>
    );
}

export default App;