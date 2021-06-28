import React from 'react';
import Header from '../components/Header';
import { LandingPage } from '../components/landingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export const MainRouter = () => {
    return(
        <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
            </Switch> 
        </div>
        </BrowserRouter>
    );
}