import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Theme from './Style/Theme';
import ResetCSS from './Style/ResetCSS';

function App() {
  return (
    <ThemeProvider theme={ Theme }>
      <ResetCSS />
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
        <Route exact path="/search" render={ () => <Search /> } />
        <Route exact path="/album/:id" render={ (props) => <Album { ...props } /> } />
        <Route exact path="/favorites" render={ () => <Favorites /> } />
        <Route exact path="/profile" render={ () => <Profile /> } />
        <Route exact path="/profile/edit" render={ () => <ProfileEdit /> } />
        <Route exact component={ NotFound } />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
