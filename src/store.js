import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import reducers from './reducers/reducer'

const middleware= applyMiddleware(thunk);

const Store=createStore(reducers,middleware);

export default Store;