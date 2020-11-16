import React from 'react';
import Header from '../Header/Header';
import HeaderNavbar from '../Header/HeaderNavbar/HeaderNavbar';
import Footer from './Footer/Footer';
import './Home.css'
import Houses from './Houses/Houses'
import Services from './Services/Services';
const Home = () => {
   return (
      <div >
         <HeaderNavbar></HeaderNavbar>
         <Header></Header>
         <Houses></Houses>
         <Services></Services>
         <Footer></Footer>
      </div>
   );
};

export default Home;