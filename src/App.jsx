import './App.css';
import {Login} from './pages/Auth';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Routes from './Routes';
// import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function App() {
  // const dispatch = useDispatch();
  // var savedTheme = localStorage.getItem('theme');


  useEffect(() => {
    // if (savedTheme) dispatch(setTheme(savedTheme));
    // dispatch(listWipStatuses({ limit: 30 }));
    // dispatch(listRoles());
    // dispatch(listTaskStatuses({ limit: 20 }));
  }, []);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>
          <Route exact path="/login" component={Login} />
          <Routes />
          {/* <Route element={PublicRoute(Login)} path="/login" />
          <Route element={PrivateRoute(Dashboard)} path="/dashboard" />
          <Route element={PrivateRoute(Dashboard)} path="/" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
