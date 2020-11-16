import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import Houses from './Houses/Houses'
const Home = () => {
   return (
      <div >
         <Header></Header>
         <Houses></Houses>
      </div>
   );
};

export default Home;