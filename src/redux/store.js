import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import setAuthToken from "../utils/setAuthToken";
import setApiUrl from '../utils/setBaseUrl';

const initialState = {};
const middleware = [thunk];
setApiUrl('http://localhost:8000/api/v1');
// setApiUrl('https://dev.erework.co.uk/api/v1');

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;