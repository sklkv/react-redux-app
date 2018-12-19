import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import SingIn from '../SingIn';
import Button from '@material-ui/core/Button';

const App = () => (
  <div>
    <header>
      <Link to='/'>Home</Link>
      <Link to='/about-us'>About</Link>
      <Link to='/'>
        <Button variant='contained' color='primary'>
          Home
        </Button>
      </Link>
      <Link to='/about-us'>
        <Button variant='contained' color='primary'>
          About
        </Button>
      </Link>
      <Link to='/sing-in'>
        <Button variant='contained' color='primary'>
          Sing-in
        </Button>
      </Link>
    </header>

    <main>
      <Route exact path='/' component={Home} />
      <Route exact path='/about-us' component={About} />
      <Route exact path='/sing-in' component={SingIn} />
    </main>
  </div>
);

export default App;
