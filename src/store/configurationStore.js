import { createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';

const defaultState = {
    todos:[
        {
            text: 'Consider using Redux',
            completed: true,
          }
    ]

};

const generateStore = (initialState = defaultState) =>
createStore(rootReducer, initialState);

export default generateStore;