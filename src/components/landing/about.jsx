import React from 'react';
import paul from '../../images/IMG_20200330_141645_174.jpg'
import benedict from '../../images/benedict.jpeg'
import morris from '../../images/IMG-20200412-WA0000.jpg'

let about = props => {
    
    location.href = "#aboutBox"

    return (

        <React.Fragment> 
        <div className="aboutBox" id="aboutBox">

        <div className="backIco2" onClick={props.click}>
        <i className="material-icons" >keyboard_backspace</i>

        </div>

                  {props.type === "about" ? <React.Fragment>

               

                <div className="about">
                    <h3>ABOUT US</h3>
                    <p>Fortune Auction started as a result to create a bid platform that people can win items during this pandemic. We are a group of passionate youths with the desire to build a world where you can get your wants & needs without pain & hustle
                        <br/>  We believe that creating a community of people with desire to meet their wishes and help others meet theirs will build a better world. Join Us Today! 
                    </p>

                </div>

                <div className="about">
                    <h3>TEAM</h3>
                    <div className="grid-three">
                        <div>

                        <div className="">
                            <img  width="230px" height="230px" src={benedict} alt="" className="cirke2"/>
                        </div>
                        <div className="textMed">Benedict Okolie</div>
                        </div>


                        <div>
                        <div className="">
                            <img  width="230px" height="230px" src={morris} alt="" className="cirke2"/>
                        </div>
                        <div className="textMed">Morris Mwitti</div>

                        </div>
                        
                        <div>
                        <div className="">
                            <img  width="230px" height="230px" src={paul} alt="" className="cirke2"/>
                        </div>
                        <div className="textMed">Paul Mahoro</div>

                        </div>
                        
                    </div>  
                    </div>
                    </React.Fragment>

:
                    <React.Fragment>
                    <div className="">
                    <h3> ABOUT VENDORS </h3>
                    <p>We designed this platform to enable vendors/sellers with both used & new items to auction, get bids and sell the item. Item type Such as Cars, Computer/Gadgets, Clothes & Home Electronics.
                        <br/>  You too our registered user can also sell any of your used items. Just Request! Have your legal proof of ownership (receipt, papers etc.) Auction and get bids.         
                        </p>

                        <button className="btn blue" onClick={() => {
                            props.click()
                            props.openRequest()
                            }}>Request Now </button>
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

                    </React.Fragment>

}
</div>

        </React.Fragment>
    )
}


export default about;

