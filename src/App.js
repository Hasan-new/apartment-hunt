import './App.css';
import AddHouse from './components/AddHouse/AddHouse';
import BookingList from './components/BookingList/BookingList';
import Home from './components/Home/Home';
import MyRent from './components/MyRent/MyRent';

function App() {
  return (
    <div>
      <Home></Home>
      <BookingList></BookingList>
      <AddHouse></AddHouse>
      <MyRent></MyRent>
    </div>
  );
}

export default App;
