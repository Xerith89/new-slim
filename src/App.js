import React from 'react';
import Dashboard from './Components/Meta/Dashboard'
import TopBar from './Components/Core/TopBar/TopBar'
import Footer from './Components/Core/Footer/Footer'

function App() {
    return ( 
    <div className = "App">
        <TopBar user="Alex"/>
        <Dashboard />
        <Footer />
    </div>
    );
}

export default App;