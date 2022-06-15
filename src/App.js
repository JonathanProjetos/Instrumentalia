import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import './Style/style.css';
import { StyleHeader, StyleTitle } from './Style/Header';

class App extends React.Component {
  render() {
    return (
      <StyleHeader className="route-container">
        <StyleTitle>
          <h1>Tunes</h1>
        </StyleTitle>
        <Switch>
          <Route exact path="/" render={ (props) => <Login { ...props } /> } />
          <Route exact path="/search" render={ () => <Search /> } />
          <Route exact path="/album/:id" render={ (props) => <Album { ...props } /> } />
          <Route exact path="/favorites" render={ () => <Favorites /> } />
          <Route exact path="/profile" render={ () => <Profile /> } />
          <Route exact path="/profile/edit" render={ () => <ProfileEdit /> } />
          <Route exact component={ NotFound } />
        </Switch>
      </StyleHeader>
    );
  }
}

export default App;
