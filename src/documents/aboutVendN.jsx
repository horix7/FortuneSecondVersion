
import React from 'react';


let aboutVend = props => {
    return (

        <div className="center-align">
                    <h3> ABOUT VENDORS </h3>
                    <p>We designed this platform to enable vendors/sellers with both used & new items to auction, get bids and sell the item. Item type Such as Cars, Computer/Gadgets, Clothes & Home Electronics.
                        <br/>  You too our registered user can also sell any of your used items. Just Request! Have your legal proof of ownership (receipt, papers etc.) Auction and get bids.         
                        </p>

                        <button className="btn blue" 
                       
                        onClick={props.openForm}>Request Now </button>
                    <h5>FEES & CHARGES</h5>
                    <p>
                    We charge a commission fee on every item sold both new and used at the following rate
                    </p>
                    <ol className="fees">
                        <li>New Items: 9%</li>
                        <li>Used items from users: 10%</li>

                    </ol>

                    <p>Contact us for inquiries</p>
                </div>
        )

}

export default aboutVend;