import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard';
import AddItem from './components/Items/AddItem';
import EditItem from './components/Items/EditItem';
import ItemList from './components/Items/ItemList';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth/signup" component={Signup} />
        <Route path="/auth/login" component={Login} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/items/add" component={AddItem} />
        <ProtectedRoute path="/items/edit/:id" component={EditItem} />
        <ProtectedRoute path="/items" component={ItemList} />
        <Redirect from="/" to="/auth/login" />
      </Switch>
    </Router>
  );
};

export default App;