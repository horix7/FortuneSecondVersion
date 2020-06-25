import React from 'react';


let footer = props => {


    return (

        <footer className="page-footer black">
            <div className="container">
                <div className="row ">
                   <div className="flexCont">
               
                    
                    <div>
                    <h5 className="white-text">Conditions</h5>
                    <p className="grey-text text-lighten-4" onClick={props.openTerms}>Terms & Conditions</p>
                    <p className="grey-text text-lighten-4"  onClick={props.openRef}>Return & Refund Policy</p>
                    <p className="grey-text text-lighten-4"  onClick={props.openPrivacy}>Privacy & Cookie Policy</p>
                    <p className="grey-text text-lighten-4"  onClick={props.openVend}>Vendor Policy </p>

                    </div>

                    <div className="">
                    <h5 className="white-text">Documentation</h5>
                    <p className="grey-text text-lighten-4"  onClick={props.openAbout}>About Company</p>
                    <p className="grey-text text-lighten-4"  onClick={props.openVend1}>About Vendors</p>
                    <p className="grey-text text-lighten-4">Legal Document</p>

                    </div>

                    <div className="">
                    <h5 className="white-text">Contact Us</h5>
                    <ul>
                    <li id="padx"><a  className="grey-text text-lighten-3" href="contact@fortuneauction360.com" target="_blank"> contact@fortuneauction360.com</a></li>
                    <li id="padx"><a  className="grey-text text-lighten-3" href="#!"> +250780178459, +250734831742 </a></li>
                    <li id="padx"><a  className="grey-text text-lighten-3" href="#!"> Rugando, Kigali Rwanda</a></li>
                    <li id="padx"><a  className="grey-text text-lighten-3" href="#!"></a></li>
                    </ul>
                    </div>
               </div>
              
               
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
               <div className="copy">
               © 2020 Copyright Fortune Auction
               </div>
               
                <a className="grey-text text-lighten-4 right" href=" https://www.facebook.com/Fortune-Auction-107927797633219"  target="_blank">
                <i className="fa fa-facebook-official" style={{fontSize: "30px", color: "blue"}}></i>
                </a>
                <a className="grey-text text-lighten-4 right" href="https://www.instagram.com/fortune_auction/" target="_blank">
                <i className="fa fa-instagram" style={{fontSize: "30px", color: "white"}}></i>
                </a>
                <a className="grey-text text-lighten-4 right"href="https://www.youtube.com/channel/UCshs4TrX8wYTZmCQDc6GjfA/?guided_help_flow=5"  target="_blank"> 
                <i className="fa fa-youtube-play" style={{fontSize: "30px", color: "red"}}></i></a>
                <a className="grey-text text-lighten-4 right" href="#!" >
                    Join Us 
                </a>
                </div>
            </div>
            </footer>
    )

}


export default footer;
