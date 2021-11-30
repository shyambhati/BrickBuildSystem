import userProfile from "./reducers/userProfileReducers";

import {combineReducers} from "redux"

const rootReducer=combineReducers({
   // chnageNumber:chnageNumber  // default code
   userProfile // we can do like this
});
export default rootReducer;