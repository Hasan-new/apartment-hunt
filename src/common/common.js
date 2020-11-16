import firebase from "firebase/app";
export const googleSignInHandle = ()=>{
   const provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider)
   .then(result=>console.log(result))
}

export const facebookSignInHandle = ()=>{
   const provider = new firebase.auth.FacebookAuthProvider();
   firebase.auth().signInWithPopup(provider)
   .then(result=>console.log(result))
}