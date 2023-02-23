import { legacy_createStore as creatStore } from 'redux';
import rootReducers from './Reducer/Index';

const store = creatStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;