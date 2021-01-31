import React, { Component, Suspense } from 'react';
import './convertion/App.css';
import classes from './convertion/App.css';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./container/home/home'));


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Home {...props}/> </Suspense>)}/>          
        </Switch>
      </div>
    );
  }
}

export default App;
