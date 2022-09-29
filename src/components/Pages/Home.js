import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Testimonials from '../navbar/Testimonials'
import Pricing from '../navbar/Pricing'
import Header from '../navbar/Header'
import MenuBar from '../navbar/MenuBar'
import Footer from '../navbar/Footer'
import HomeInfo from '../common/HomeInfo'

const Home = () => {
    return (
        <React.Fragment>
            <MenuBar />
            <Header />
            <br></br>
            <Pricing />
            <br></br>
            <br></br>
            <HomeInfo />
            {''}
            {''}
            <br></br>
            <Testimonials />
            <Footer />
        </React.Fragment>
    )
}

export default Home;
