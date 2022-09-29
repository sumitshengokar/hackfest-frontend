import React from 'react'
import './Pricing.css'

const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
            <div className="columns">
                <ul className="price">
                    <li className="col-header">Schools</li>
                    <li className="grey">Refer childrens or schools</li>
                    {/* <li>12 consultation sessions</li>
                    <li>1 user</li>
                    <li>Same day audit logs</li>
                    <li>Communiity support</li> */}
                    <li className="grey"><button className="button">View</button></li>
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header" style={{backgroundColor:'#37387a'}}>Ways to get Involved</li>
                    <li className="grey">Help with resources</li>
                    {/* <li>Unlimited Consultation
                    10 - 25 Users
                    7 days Audit logs
                    3 days SLA support</li> */}
                    <li className="grey"><button className="button">Help</button></li>
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header">Fundraisi</li>
                    <li className="grey">Donate to help</li>
                    {/* <li>Unlimited Consultation
                    Unlimiited Users
                    Audit logs with full history
                    24×7×365 premium support</li> */}
                    <li className="grey"><button className="button">Donate</button></li>
                </ul>
            </div>
            </section>
        </React.Fragment>
    )
}

export default Home;