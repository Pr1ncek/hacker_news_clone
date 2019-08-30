import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import CreateLink from './Link/CreateLink';
import SearchLinks from './Link/SearchLinks';
import LinkList from './Link/LinkList';
import LinkDetail from './Link/LinkDetail';

import Login from './Auth/Login';
import ForgotPassword from './Auth/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/new/1' />} />
        <Route exact path='/create' component={CreateLink} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/forgot' component={ForgotPassword} />
        <Route exact path='/search' component={SearchLinks} />
        <Route exact path='/top' component={LinkList} />
        <Route exact path='/new/:page' component={LinkList} />
        <Route exact path='/link/:linkId' component={LinkDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
