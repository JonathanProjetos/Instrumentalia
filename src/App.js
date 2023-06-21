import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Context from './context/Context';
import { paleteDark, paleteLight } from './Style/Palete';
import ResetCSS from './Style/ResetCSS';

function App() {
  const { theme } = useContext(Context);
  return (
    <ThemeProvider theme={ theme === 'light' ? paleteLight : paleteDark }>
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
