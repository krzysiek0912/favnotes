import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import Articles from 'views/Articles/Articles';
import Notes from 'views/Notes/Notes';
import Twitters from 'views/Twitters/Twitters';
import DetailsPage from 'views/DetailsPage/DetailsPage';
import store from 'store';

import { routes } from 'config';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <MainTemplate>
                <Switch>
                    <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
                    <Route exact path={routes.notes} component={Notes} />
                    <Route path={routes.note} component={DetailsPage} />
                    <Route exact path={routes.articles} component={Articles} />
                    <Route path={routes.article} component={DetailsPage} />
                    <Route exact path={routes.twitters} component={Twitters} />
                    <Route path={routes.twitter} component={DetailsPage} />
                </Switch>
            </MainTemplate>
        </BrowserRouter>
    </Provider>
);

export default App;
