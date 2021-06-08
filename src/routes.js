import { Box } from '@material-ui/core';
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Employees from './screens/Employees/index';

export default function Routes() {

    return (
        <Box display='flex' justifyContent="center" alignItems="center" marginTop="calc(64px + 10vh)" >
            <Router >
                <Switch>
                    <Route exact path="/">
                        <Employees />
                    </Route>
                </Switch>
            </Router >
        </Box>
    );
}
