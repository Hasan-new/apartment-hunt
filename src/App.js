import './App.css';
import AddHouse from './components/AddHouse/AddHouse';
import BookingList from './components/BookingList/BookingList';
import Home from './components/Home/Home';
import MyRent from './components/MyRent/MyRent';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Apartment from './components/Apartment/Apartment';
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
          
          <Route exact path="/booking-list">
            <BookingList></BookingList>
          </Route>

          <Route exact path="/add-house">
            <AddHouse></AddHouse>
          </Route>

          <Route exact path="/my-rent">
            <MyRent></MyRent>
          </Route>

          <Route exact path="/apartment/:id">
            <Apartment></Apartment>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
