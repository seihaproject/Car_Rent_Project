import {createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
//import { carReducer } from "./reducers/carReducers";
import rootReducer from "./rootreducer";

import thunk from "redux-thunk";
const composeEnhancers = composeWithDevTools({
    
    

})

const store = createStore(
        rootReducer,
    
    composeEnhancers(
        applyMiddleware(thunk)
    )

)
export default store;
