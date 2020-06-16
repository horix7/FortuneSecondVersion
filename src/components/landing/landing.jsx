import React, {Fragment, Component}from 'react';
import HomeNav from '../nav/homenav';
import Par from '../UI/paragraphs';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import Image from  '../UI/image';
import GadgetPhone from '../../images/iphone.jpg';
import Lcd from '../../images/lcdScreen.jpg';
import shoe from '../../images/Nikeshoe_2.jpg';
import Form from '../../containers/formHolder'
import LoginForm from '../../components/forms/login'
import RequestForm from '../../components/forms/submitsign'
import SignForm from '../../components/forms/signUp'
import axios from 'axios'
import Footer from '../../components/UI/footer'
import About from '../../components/landing/about'
import ProBox from '../../components/holders/productBox'
import Loader from '../../components/UI/preloader'
import WinerBox from '../../components/holders/winnerBox'
import Slider from '../../components/holders/slider'
import Counter from '../../components/holders/counter'




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
        
        setTimeout(() => {
            location.href="#topz"
        }, 10);
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
            CurrentForm =( <LoginForm sign={this.loginSign}  login={this.props.onLogin}/>)
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
                type:"homeText padds2", //homeText homePara
                text:" DO YOU BELIEVE YOU ARE A LUCKY PERSON? "
                }}
                />
                 <Par 
                info={{
                type:"homePara padds2", //homeText homePara
                text:"Today, You Stand A Chance to Own A Valuable Item You Desire For A Minimum of $1"
                }}
                />

                <a href="#how" className="linkBtn2">Learn More</a>

            </div>

            <div id="how" className="homePara padds2 black-text">
            We Auction Valuable Item as a winning Prize for one of you with the lucky Fortune Number to Claim it

            </div>
            <div  className="introPage2"> 
             <h5>How It Works </h5>
             <div className="grid-three padds2">
                 <div>
                    <img src={one} alt=""/>
                    <p>Our Vendors Auction Brand New Items you Desire</p>
                 </div>

                 <div>
                    <img src={two} alt=""/>
                    <p>You Choose your Desired Item & Lucky Fortune Number(s). Then, Pay the Bid price as Ticket fee to stand a chance of winning </p>
                 </div>

                 <div>
                    <img src={three} alt=""/>
                    <p> Our Technology Shuffles & Spins your Fortune Numbers to Choose the Lucky Winner</p>
                 </div>
             </div>
            </div>

            <div className="introPage3">

                    <h5 className="padds2">YOUR NEXT WISH COULD BE $1</h5>
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
            <Slider 
            timer="1000"
            displayIn={    [
                     <div className="mySlides">
                            <img src={GadgetPhone} alt="" width="250px" height="200px" />
                       
                             <p>Gadgets</p>
                        </div>,

                        <div className="mySlides">
                        <img src={shoe} alt="" width="250px" height="200px" />

                             <p>Fashion</p>
                        </div>,

                        <div className="mySlides">
                        <img src={Lcd} alt="" width="250px" height="200px" />
                             <p>Electronics</p>
                        </div>
                ]} 
                />
              
             </div>
            </Fragment>
                </div>
                
                <div className="introPage5">
                    <p className="homeText">YOUR LOCATION IS NEVER A BARRIER</p>
                    <p className="homePara">WINNER’S PRIZE IS DELIVERED GLOBALLY REGARDLESS OF THE LOCATION </p>
                </div>
                
                <div className="introPage4 padds2">
                <h3 >Fortune Auction is on a Mission to build a community of lucky people whose desires are meant regardless of their background, gender, race, & status.</ h3>
                
                <a className="linkBtn2" onClick={() => this.openAbout("about")}>Learn More</a>
                
                </div>
                
                        {/* About  Appears here  */}
                
                <div className="about lastFron padds2">
                    <h3>Think of Affordable, Fast & Secure way to get your Wishes. Think Fortune Auction! </h3>
                    <div className="grid-three">
                        
                        <div className="blackBokx">
                            <h5>RETURN & REFUND</h5>
                            <p className=""> We refund your money Immediately when the bid target is not reached after the bid deadline. So share to win!
                            </p>   
                            <a className="linkBtn2">Learn More</a>

                        </div>

                        <div className="blackBokx">
                            <h5> VENDORS </h5>
                            <p className=""> We partner with vendors globally with legal new or used items to auction. 
                            </p>    
                            <a className="linkBtn2" onClick={() => this.openAbout("ww")} >Learn More</a>
                            <br/>
                            <p className="">Do you have item(s) to auction? </p>
                            <a className="linkBtn2" onClick={this.openRequest} >Request Now</a>
                        </div>

                        <div className="blackBokx">
                            <h5>SECURITY</h5>
                            <p className="">We encrypt your password & payment information with safe technology. Your privacy is highly important to us.
                            </p>   
                            <a className="linkBtn2">Learn More</a>

                        </div>
                    </div>
                </div>
       
               {/* display about us 2 end  */}

              {this.state.products ?  <div id="products" className="">
                  <h3 className="center-align">AUCTION</h3>
              <div className="hideSmall ProductsHere">
                
                {this.state.products.map(n => (
                     <ProBox 
                     key={n.id}
                     info={{
                        name: n.name,
                        winners: n.winners,
                        price: n.price,
                        fortunes: n.tickets,
                        image: n.picture,
                        date: n.date,
                        hour: n.hour,
                        sold: n.sold,
                        type: n.type
                       }}
                       login={this.openLogin}
                       check={true}
                       />
                ))}
               </div> 

               <div className="hideBig">
             <Slider 
                
                timer= "3000"
                displayIn={this.state.products.map(n => (
                    <ProBox 
                    key={n.id}
                    info={{
                        name: n.name,
                        winners: n.winners,
                        price: n.price,
                        fortunes: n.tickets,
                        image: n.picture,
                        date: n.date,
                        hour: n.hour,
                        sold: n.sold,
                        type: n.type
                      }}
                      login={this.openLogin}
                      check={true}
                      />
                ))} 
            />
               </div> 


                </div> : <Loader type="circle"  style="preloader-wrapper large active"/>}

              {this.state.winners ?  <div className="winners">
              <h3 className="center-align">WINNERS</h3>

                <div className="hideSmall ProductsHere">
                {this.state.winners.map(n => (
                    <WinerBox 
                    key={n.id}

                    info={{
                        winners: n.id,
                        names: n.name,
                        wonfor : n.product,
                        image: n.picture,
                        location: n.location,
                        description: n.quote,
                        price: n.price,
                        audio: n.audion,
                        video: n.video

                      }}
                    />
                ))}
                </div>
                
                <div className="hideBig">

                <Slider 
                
                timer= "3000"
                displayIn={this.state.winners.map(n => (
                    <WinerBox 
                    key={n.id}
                    info={{
                        winners: n.id,
                        names: n.name,
                        wonfor : n.product,
                        image: n.picture,
                        location: n.location,
                        description: n.quote,
                        price: n.price,
                        audio: n.audion,
                        video: n.video

                      }}

                    />
                ))} 
            />
                </div>


                </div> : <Loader type="circle"  style="preloader-wrapper large active"/>}

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