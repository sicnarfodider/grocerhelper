import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddList from './addlist';

const App = () => (
    <div>
        <div className="app">
            <h1 className="text-center">Test ToDo</h1>
            <AddList />
        </div>
    </div>
);

export default App;
