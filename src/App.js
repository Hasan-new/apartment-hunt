import './App.css';
import AddHouse from './components/AddHouse/AddHouse';
import BookingList from './components/BookingList/BookingList';
import Home from './components/Home/Home';
import MyRent from './components/MyRent/MyRent';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
function App() {
  return (
    <div>
      {/* <Home></Home>
      <BookingList></BookingList>
      <AddHouse></AddHouse>
      <MyRent></MyRent> */}

      <Router>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          
          <Route path="/booking-list">
            <BookingList></BookingList>
          </Route>

          <Route path="/add-house">
            <AddHouse></AddHouse>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/my-rent">
            <MyRent></MyRent>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
