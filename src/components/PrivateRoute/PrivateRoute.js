import React from 'react';
import {Redirect, Route, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = ({children,isSignin,...rest}) => {
  
    const location=useLocation()
    return ( 
        <Route
            {...rest}
            render={
                ()=>isSignin?(children)
                :(
                    <Redirect to={{pathname:'/login', location}}/>
                )
            }
        >
            
        </Route>
    );
};
const mapStateToProps = (state) => {
    return {
        isSignin: state.isSignin
    }
}

export default connect(mapStateToProps)(PrivateRoute);