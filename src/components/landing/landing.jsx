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
import Form from '../../containers/formHolder'
import LoginForm from '../../components/forms/login'
import RequestForm from '../../components/forms/submitsign'
import SignForm from '../../components/forms/signUp'
import axios from 'axios'
import Footer from '../../components/UI/footer'
import About from '../../components/landing/about'





class Landing extends Component {
    state={
        login: false,
        sign: false,
        request: false,
        terms: {

        },
        products: null,
        winners: null,

        forms: false,
        openAbout: false,
        aboutType: null
    }

    componentDidMount() {
   
        this.getFrontPro()
        this.getFrontWin()

    }

    openAbout = (type) => {
        let newState = {...this.state}

        this.setState({
            openAbout: !newState.openAbout,
            aboutType: type
        })
    }

    getFrontPro = () => {
        axios.get(localStorage.address + "/api/v1/frontpro")
        .then(response => {
            console.log(response.data.data)
            let newArray = [...response.data.data]
            
             this.setState({
                products: newArray
            })
        })
        .catch(error => {
          console.log(error);
        })
    }

    getFrontWin = () => {
        axios.get(localStorage.address + "/api/v1/frontwin")
        .then(response => {
            console.log(response.data.data)
            let newArray = [...response.data.data]
            
             this.setState({
                winners: newArray
            })
        })
        .catch(error => {
          console.log(error);
        })
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

    loginSign = () => {
        let newState = {...this.state}
        this.setState({
            login: !newState.login,
            sign: !newState.sign
        })
    }

    
    render() {

        let CurrentForm = null
        let func = null
        let func2 = null


        if(this.state.login) {
            CurrentForm =( <LoginForm login={this.props.onLogin}/>)
            func = this.openLogin

        }

        if(this.state.sign) {
            CurrentForm =( <SignForm  login={this.props.onLogin}/>)
            func = this.openSign
        }

         if (this.state.request) {
            CurrentForm = (<RequestForm login={this.props.onLogin} />)
            func = this.openRequest

        }

        return (
            <React.Fragment>
        { !this.state.openAbout ?<React.Fragment>

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
                type:"homePara padds2", //homeText homePara
                text:"We Auction Products as the Winning Prize for one of you with the Lucky Fortune Number to claim it for as Low as $1 "
                }}
                />

                <a href="#how" className="linkBtn2">Learn More</a>

            </div>


            <div id="how" className="introPage2"> 
             <h5>How It Works </h5>
             <div className="grid-three padds2">
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

                    <h5>YOUR NEXT WISH COULD BE 1$</h5>
                    <a href="#products" className="linkBtn11">View Auction</a>

                    <div className="bottomAligned grid-three">

                        <div>
                            <img width="250px" height="200px"src={GadgetPhone} alt=""/>
                       
                             <p>Gadgets</p>
                        </div>

                        <div>
                        <img width="250px" height="200px"src={shoe} alt=""/>

                             <p>Fashion</p>
                        </div>

                        <div>
                        <img width="250px" height="200px"src={Lcd} alt=""/>
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
                <div className="introPage4 padds2">
                <h3>Fortune Auction is on a mission to build a community of lucky people whose desires are meant regardless of their background, gender, race, & status.</h3>
                <button className="linkBtn2" onClick={() => this.openAbout("about")}>Learn More</button>
                
                </div>
                
                        {/* About  Appears here  */}
                
                <div className="about">
                    <h3>Think of Affordable, Fast & Secure way to get your Wishes. Think Fortune Auction! </h3>
                    <div className="grid-three lastFron">
                        <div className="blackBokx">
                            <h5>RETURN & REFUND</h5>
                            <p className="smallPara2"> We refund your money Immediately when the bid target is not reached after the bid deadline. So share to win!
                            </p>   
                            <button className="linkBtn2">Learn More</button>

                        </div>

                        <div className="blackBokx">
                            <h5> VENDORS </h5>
                            <p className="smallPara2"> We partner with vendors globally with legal new or used items to auction. 
                            </p>    
                            <button className="linkBtn2" onClick={() => this.openAbout("ww")} >Learn More</button>
                            <br/>
                            <p className="smallPara2">Do you have item(s) to auction? </p>
                            <button className="linkBtn2" onClick={this.openRequest} >Request Now</button>
                        </div>

                        <div className="blackBokx">
                            <h5>SECURITY</h5>
                            <p className="smallPara2">We encrypt your password & payment information with safe technology. Your privacy is highly important to us.
                            </p>   
                            <button className="linkBtn2">Learn More</button>

                        </div>
                    </div>
                </div>
       
               {/* display about us 2 end  */}

                <div className="introPage5">
                    <p className="homeText">YOUR LOCATION IS NEVER A BARRIER</p>
                    <p className="homePara">WINNER’S PRIZE IS DELIVERED GLOBALLY REGARDLESS OF THE LOCATION </p>
                </div>
                <div id="products">
                {JSON.stringify(this.state.products)}

                </div>
                {JSON.stringify(this.state.winners)}

                <Footer />

        </React.Fragment> : <Form 
        clecked={func} sign={func2}
        >
            {CurrentForm}
        </Form>


}
</React.Fragment>
    : <About type={this.state.aboutType} click={() => this.openAbout(null)}  openRequest={this.openRequest}/>} </React.Fragment>)

            }
} 



export default Landing;