import React, {Fragment, Component}from 'react';
import HomeNav from '../nav/homenav';
import Par from '../UI/paragraphs';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import Image from  '../UI/image';
import GadgetPhone from '../../images/iphone.jpg';
import Lcd from '../../images/lcdScreen.jpg';
import shoe from '../../images/shoes.jpg';
import paul from '../../images/IMG_20200330_141645_174.jpg'
import benedict from '../../images/benedict.jpeg'
import morris from '../../images/IMG-20200412-WA0000.jpg'
import Form from '../../containers/formHolder'
import LoginForm from '../../components/forms/login'
import RequestForm from '../../components/forms/submitsign'
import SignForm from '../../components/forms/signUp'






class Landing extends Component {
    state={
        login: false,
        sign: false,
        request: false,
        terms: {

        },
        forms: false
    }

    componentDidMount() {
    

    }

    openLogin = () => {
        let newState = {...this.state}
        this.setState({
            login: !newState.login,
            forms: !newState.forms
        })
    }

    openSign = () => {
        let newState = {...this.state}
        this.setState({
            sign: !newState.sign,
            forms: !newState.forms
        })
    }

    openRequest = () => {
        let newState = {...this.state}
        this.setState({
            request: !newState.request,
            forms: !newState.forms
        })
    }

    
    render() {

        let CurrentForm = null

        if(this.state.login) {
            CurrentForm =( <LoginForm />)
        }

        if(this.state.sign) {
            CurrentForm =( <SignForm />)
        }

         if (this.state.request) {
            CurrentForm = (<RequestForm />)
        }

        return (
        <React.Fragment>

       {!this.state.forms ? <React.Fragment>

            <HomeNav click1={this.openLogin}  click2={this.openSign} />
            <div className="introPage">
            <Par 
                info={{
                type:"homeText", //homeText homePara
                text:"IT’S ALWAYS ABOUT THE COMMUNITY’S LOVE"
                }}
                />
                 <Par 
                info={{
                type:"homePara", //homeText homePara
                text:"We Auction Products as the Winning Prize for one of you with the Lucky Fortune Number to claim it for as Low as $1 "
                }}
                />

                <button className="linkBtn2">Learn More</button>

            </div>


            <div className="introPage2"> 
             <h5>How It Works </h5>
             <div className="grid-three">
                 <div>
                    <img src={one} alt=""/>
                    <p>Vendors Auction Used or Brand New Items</p>
                 </div>

                 <div>
                    <img src={two} alt=""/>
                    <p>You Choose a Lucky Fortune Number & Pay as Low as $1 as the Bid Ticket </p>
                 </div>

                 <div>
                    <img src={three} alt=""/>
                    <p>Our Technology Shuffles & Spins your Fortune Numbers to Choose the Lucky Winner</p>
                 </div>
             </div>
            </div>

            <div className="introPage3">

                    <h4>YOUR NEXT COULD BE 1$</h4>
                    <button className="linkBtn">View Auction</button>

                    <div className="grid-three">

                        <div>
                            <img src={GadgetPhone} alt=""/>
                       
                             <p>Gadgets</p>
                        </div>

                        <div>
                        <img src={shoe} alt=""/>

                             <p>Fashion</p>
                        </div>

                        <div>
                        <img src={Lcd} alt=""/>
                             <p>Electronics</p>
                        </div>


                    </div>
            </div>
                <div className="imageSlider">
                <Fragment>
            <div className="w3-content w3-section" >

                
                     <div className="mySlides">
                            <img src={GadgetPhone} alt=""/>
                       
                             <p>Gadgets</p>
                        </div>

                        <div className="mySlides">
                        <img src={shoe} alt=""/>

                             <p>Fashion</p>
                        </div>

                        <div className="mySlides">
                        <img src={Lcd} alt=""/>
                             <p>Electronics</p>
                        </div>

              
             </div>
            </Fragment>
                </div>
            <div className="introPage4">
                <h3>Fortune Auction is the Next Generation Digital Raffle Bid Platform that brings your Wishes to Reality </h3>
                <button className="linkBtn2">Learn More</button>
                
            </div>

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

                <div className="about">
                    <h3>Think of Affordable, Fast & Secure way to get your Wishes. Think Fortune Auction! </h3>
                    <div className="grid-three">
                        <div className="blackBokx">
                            <h5>RETURN & REFUND</h5>
                            <p className="homePara"> We refund your money Immediately when the bid target is not reached after the bid deadline. So share to win!
                            </p>   
                            <button className="linkBtn2">Learn More</button>

                        </div>

                        <div className="blackBokx">
                            <h5> VENDORS </h5>
                            <p className="homePara"> We partner with vendors globally with legal new or used items to auction. 
                            </p>    
                            <button className="linkBtn2">Learn More</button>
                            <br/>
                            <p className="homePara">Do you have item(s) to auction? </p>
                            <button className="linkBtn2" onClick={this.openRequest} >Request Now</button>
                        </div>

                        <div className="blackBokx">
                            <h5>SECURITY</h5>
                            <p className="homePara">We encrypt your password & payment information with safe technology. Your privacy is highly important to us.
                            </p>   
                            <button className="linkBtn2">Learn More</button>

                        </div>
                    </div>
                </div>
       
                <div className="about">
                    <h3> ABOUT VENDORS </h3>
                    <p>We designed this platform to enable vendors/sellers with both used & new items to auction, get bids and sell the item. Item type Such as Cars, Computer/Gadgets, Clothes & Home Electronics.
                        <br/>  You too our registered user can also sell any of your used items. Just Request! Have your legal proof of ownership (receipt, papers etc.) Auction and get bids.         
                        </p>

                        <button className="btn blue" onClick={this.openRequest}>Request Now </button>
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


                <div className="introPage5">
                    <p className="homeText">YOUR LOCATION IS NEVER A BARRIER</p>
                    <p className="homePara">WINNER’S PRIZE IS DELIVERED GLOBALLY REGARDLESS OF THE LOCATION </p>
                </div>

        </React.Fragment> : <Form 
        clicked={}>
            {CurrentForm}
        </Form>


}
</React.Fragment>
    )

            }
} 



export default Landing;