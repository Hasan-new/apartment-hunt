
//start redux
import { createStore } from 'redux'
//actions
const googleSIGNIN = () => {
   return {
      type : 'GOOGLE_SIGNIN'
   }
}

const facebookSIGNIN = () => {
   return {
      type : 'FACEBOOK_SIGNIN'
   }
}


//reducers
export const authHandle = (data=0, action) => {
   switch(action.type){
      case 'GOOGLE_SIGNIN':
         return data+2;
      default :
         return data
   }
}

//store 
let store = createStore(authHandle)

// subscribe for console
store.subscribe(()=>console.log(store.getState()))

//dispatch
store.dispatch(googleSIGNIN())
store.dispatch(googleSIGNIN())

//end redux