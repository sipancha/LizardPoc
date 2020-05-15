import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import apiSaga from "./../sagas/index"

const initialiseSagaMiddleware = createSagaMiddleware();


const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if(serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (e) {
      // Ignore write errors;
    }
  };
  
  const peristedState = loadState();
  
  

const store = createStore(rootReducer, peristedState, applyMiddleware(initialiseSagaMiddleware) );

initialiseSagaMiddleware.run(apiSaga);

store.subscribe(() => {
    saveState(store.getState());
  });

export default store;










