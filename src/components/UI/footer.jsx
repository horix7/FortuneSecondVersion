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
                    <p className="grey-text text-lighten-4"  onClick={props.openVend}>About Vendors</p>
                    <p className="grey-text text-lighten-4">Legal Document</p>

                    </div>

                    <div className="">
                    <h5 className="white-text">Contact Us</h5>
                    <ul>
                    <li><a className="grey-text text-lighten-3" href="#!"> Email: fortuneaction360@gmail.com</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!"> Call Us: +250780178459, +250734831742 </a></li>
                    <li><a className="grey-text text-lighten-3" href="#!"> Address: Rugando, Kigali Rwanda</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                    </ul>
                    </div>
               </div>
              
               
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
               <div className="copy">
               © 2018 Copyright Fortune Auction
               </div>
               
                <a className="grey-text text-lighten-4 right" href="#!">
                <i className="fa fa-facebook-official" style={{fontSize: "30px", color: "blue"}}></i>
                </a>
                <a className="grey-text text-lighten-4 right" href="#!">
                <i className="fa fa-instagram" style={{fontSize: "30px", color: "white"}}></i>
                </a>
                <a className="grey-text text-lighten-4 right" href="#!"> 
                <i className="fa fa-youtube-play" style={{fontSize: "30px", color: "red"}}></i></a>
                <a className="grey-text text-lighten-4 right" href="#!">
                    Join Us 
                </a>
                </div>
            </div>
            </footer>
    )

}


export default footer;
