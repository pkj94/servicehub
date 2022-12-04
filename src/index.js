import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setCurrentUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';

const loggedUser = JSON.parse(localStorage.getItem('user'));
if (loggedUser) {
  setAuthToken(loggedUser.accessToken);
  //setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYwMDE0YjdjYWYzMTE5MGI4YzY1OTEyOSIsImVtYWlsSWQiOiJhZG1pbkBjcXMuaW4iLCJmaXJzdE5hbWUiOiJBZG1pbiIsImxhc3ROYW1lIjoiIn0sInN0YXR1cyI6MjAwLCJtZXNzYWdlIjoidXNlcnMgcmVjb3JkIGZvdW5kIHN1Y2Nlc3NmdWxseSIsImNyZWF0ZWRPbiI6IjIwMjEtMDEtMThUMDk6MDY6NTQuMDAwWiIsImlhdCI6MTYxMDk2MDgxNH0.-l3Ss305zWOaogouFqZpfQDzlf2Lre1H1GWoHxN3QGs")
  store.dispatch(setCurrentUser(loggedUser))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);