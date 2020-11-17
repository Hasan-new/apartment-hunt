export const googleSignin = (data) => {
   return {
      type : "GOOGLE_SIGNIN", data:data
   }
}

export const facebookSignin = () => {
   return {
      type : "FACEBOOK_SIGNIN"
   }
}