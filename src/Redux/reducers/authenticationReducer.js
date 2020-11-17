
const initialState = {
   isSignin:false
}
export const authenticationReducer = (state=initialState, action) => {
   
   switch(action.type){
      case "GOOGLE_SIGNIN":
         return {
            ...state,
            userInfo:action.data,
            isSignin:!state.isSignin
         };
      default:
         return state;
   }
}