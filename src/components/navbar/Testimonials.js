import React from 'react'
import user1 from '../images/patrick.png'
import user2 from '../images/nan.jpg'
import './Testimonials.css'


const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Testimonials</h2>
                    <span>What others say about us.</span>
                </div>
                <div className="cust-container">
                    <img src={user1} alt="Avatar" style={{width:"90px"}}/>
                    <span>John Doe.</span> 
                    <span>Content Writer</span>
                    <span>Great attention to detail!</span>
                </div>

                <div className="cust-container">
                    <img src={user1} alt="Avatar" style={{width:"90px"}}/>
                    <span>John Doe.</span> 
                    <span>Content Writer</span>
                    <span>Great attention to detail!</span>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;