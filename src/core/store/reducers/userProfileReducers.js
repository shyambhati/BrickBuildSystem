const initialState={};
const userProfile=(state=initialState,action)=>{
    switch(action.type){
        case "PROFILE": {
            return state=action.value;
        }
        default : return state;
    }
}
export default userProfile;