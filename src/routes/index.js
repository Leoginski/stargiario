import React from 'react';
import {BrowserRouter as Router,
        Route,
        Switch} from 'react-router-dom';

import Home from './Home';

export default()=>(
    <Router>
        <Switch>
            <Route path='/' exact render={props => <Home {...props} />} />}
            <Route path='/people' exact component={Home}/>
            <Route path='/films' exact component={Home}/>
            <Route path='/starships' exact component={Home}/>
            <Route path='/vehicles' exact component={Home}/>
            <Route path='/species' exact component={Home}/>
            <Route path='/planets' exact component={Home}/>
        </Switch>
    </Router>
);