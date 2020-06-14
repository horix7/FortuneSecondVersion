import React, {useState, useEffect} from 'react';
import Modal from 'react-modal'
import Input from '../components/UI/input'
import axios from 'axios'
import Loader from '../components/UI/preloader'
import { RaveProvider, RavePaymentButton } from "react-ravepayment";
import ErrorHandler from '../containers/erroHandle'
import payPic from '../images/payOptions.jpg'
import Ravepay from 'flutterwave-node';
import 'dotenv/config'

// const rave = new Ravepay(PUBLICK_KEY, SECRET_KEY, false);



const Gh_mobilemoney =  async ()=>{
 
   
    try {
 
        const payload = {
            "currency": "GHS",
            "payment_type": "mobilemoneygh",
            "country": "GH",
            "amount": "50",
            "email": "user@example.com",
            "phonenumber": "054709929220",
            "network": "MTN",
            "firstname": "temi",
            "lastname": "desola",
            "voucher": "128373", // only needed for Vodafone users.
            "IP": "355426087298442",
            "txRef": "MC-" + Date.now(),
            "orderRef": "MC_" + Date.now(),
            "is_mobile_money_gh": 1,
            "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
            "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
        }
 
       const response =  await rave.MobileMoney.ghana(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 

const callMpesa =  async ()=>{
 
    const payload = {
    "currency": "KES",
    "country": "KE",
    "amount": "100",
    "phonenumber": "0926420185",
    "email": "user@example.com",
    "firstname": "jsksk",
    "lastname": "ioeoe",
    "IP": "40.14.290",
    "narration": "funds payment",
    "txRef": "jw-222",
    "meta": [{metaname: "extra info", metavalue: "a pie"}],
    "device_fingerprint": "89191918hgdgdg99191", //(optional)
    "payment_type": "mpesa",
    "is_mpesa": "1",
  	"is_mpesa_lipa": 1
    }
    try {
       const response =  await rave.MobileMoney.mpesa(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 



const zmw_mobilemoney=  async ()=>{
 
    const payload = {
   "currency": "ZMW",
  "payment_type": "mobilemoneyzambia",
  "country": "ZM",
  "amount": "50",
  "email": "user@example.com",
  "phonenumber": "054709929220",
  "network": "MTN",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),
  "orderRef": "MC_" + Date.now(),
  "is_mobile_money_ug": 1,
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"  
    }
    try {
       const response =  await rave.MobileMoney.zambia(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 



const Ugx_mob_money=  async ()=>{
 
    const payload = {
   "currency": "UGX",
  "payment_type": "mobilemoneyuganda",
  "country": "UG",
  "amount": total.toString(),
  "email": "user@example.com",
  "phonenumber": "054709929220",
  "network": "UGX",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),
  "orderRef": "MC_" + Date.now(),
  "is_mobile_money_ug": 1,
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
    }
    try {
       const response =  await rave.MobileMoney.uganda(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 

const franco_mobilemoney=  async ()=>{
 
    const payload = {
  "currency": "XAF",
  "amount": "50",
  "email": "user@example.com",
  "phonenumber": "054709929220",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),
  "orderRef": "MC_" + Date.now(),
  "is_mobile_money_franco": 1,
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
   }
    try {
       const response =  await rave.MobileMoney.francophone(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 


const callVerify =  async (ref) => {
 
    const payload = {
        txref:ref
    }
    try {
       const response =  await rave.VerifyTransaction.verify(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 

Modal.setAppElement('#root')

let tickets = props => {
    const [modal, setModal] = useState(false)
   
    const [userNumber, setNumber] = useState(null)
    const [countryCode, changeCode] = useState(null)
    const [scroll, scrollNow] = useState({
        current: "keyboard_arrow_down",
        href: "#bottom"
    })

  
    

const bidRequest = () => {
    let bidInfo = {
            productid: props.id,
            bids:JSON.stringify(props.chosen),
            fortunes:  props.chosen.length.toString(),
            "momopay": userNumber || "credict-card Payment"
            
    }

    axios({
        method: 'post',
        url: localStorage.address + "/api/v1/bid/",
        data: bidInfo,
        headers: {  
            "Authorization": localStorage.auth,
            "Content-Type": "application/json"
                 }
        })
        .then( (response) => {
            console.log(response)

        }).catch(err => console.error(err))
}





    let paymentRwandaTigoAirtel = () => {
        let havanaoPaymentBody =  {
            "amount": parseInt(total),
            "customer": "250" + userNumber,
            "transactionid": "MC-" + Date.now(),
            "comment": "new Payment"
        }
        axios({
            method: 'post',
            url: `https://api.havanao.com/api/sale/purchase?api_token=` + "NJoyXg1on9rG4RDUDfNN0nBUR1JJp8E4FRuGR6h767ApnuQ1cJmiqgNZW7wZ",
            data: havanaoPaymentBody,
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"                
                }
            })
            .then( (response) => {
                 console.log(response)

            }).catch(err => console.error(err))
      }


    useEffect(() => {
      const M = window.M

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems, {});
          });
        
          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
          });
      });

    const [payment, setPayment] = useState("momo")

    let handleRadioOption = () => {
        let checkboxes = document.querySelectorAll('input[type=radio]:checked')

        setPayment(checkboxes[0].value)
        
}
    let total = props.chosen.length * props.price

    
  let  payMomo = () => {
        let postForPayment = {
            "trxRef": new Date().getTime() + "-" + parseInt(Math.random() * 100),
            "channelId": "momo-mtn-rw",
            "accountId": "6f5b098a-d46c-403c-b596-14181a054a87",
            "msisdn": "0" + userNumber,
            "amount":parseInt(total),
            "callback": "http://front-213v31.herokuapp.com/"
          }
          
        axios({
            method: 'post',
            url: "https://payments-api.fdibiz.com/v2/momo/pull",
            data: postForPayment,
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json", 
             "Authorization":"Bearer" + " " + localStorage.paymentAuth
                
                }
            })
            .then( (response) => {
                 console.log(response)
                    setBtn(false)

            }).catch(err => console.error(err))
      }

     let getPhoneNumber = e => {
          setNumber(e.target.value)
      }

      
const config = {
    txref:"MC-" + new Date(),
    customer_email: JSON.parse(localStorage.details).email,
    customer_phone: JSON.parse(localStorage.details).phone,
    amount: parseInt(total / JSON.parse(localStorage.currency).rate),
    currency: JSON.parse(localStorage.currency).currency,
    PBFPubKey: "FLWPUBK-b7454e2336475fcfa01d20f6343eeb41-X",
    production: true,
    onSuccess: () => {},
    onClose: () => {}
  } 
  
        return (    
            <div id="upper" className="formHolder">
                <div className="backIco" onClick={props.clecked}>
                <i className="material-icons" >keyboard_backspace</i>

                </div>
                <div className="tickets">
                    <div>
                    {props.children}
                    </div>
                    <div>
                     {props.chosen.map(n => (
                           <div key={n} className="chip">
                            {n}
                         </div>
                     ))}

                     <div className="checkout">
                         <div className="total" id="bottom">
                           Total {parseInt(total / JSON.parse(localStorage.currency).rate )} {" " + JSON.parse(localStorage.currency).currency}
                         </div>
                         <button className="btn blue" onClick={() => setModal(true)}>Continue To Checkout</button>
                     </div>
                    </div>
                </div>
                <div className="fixed-action-btn">
                    <a onClick={() => {
                        if(scroll.current == "keyboard_arrow_down") {
                        scrollNow({
                            current: "keyboard_arrow_up",
                            href: "#bottom"
                        })
                    } else {
                        scrollNow({
                            current: "keyboard_arrow_down",
                            href: "#upper"
                        })
                    }
                }} 
                    className="btn-floating btn-large white black-text" href={scroll.href}>
                        <i className="large material-icons black">{scroll.current}</i>
                    </a>
                    
                    </div>

                <Modal
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.404)'
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #fff',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '50px',
                      outline: 'none',
                      padding: '10px'
                    }
                  }}
                 isOpen={modal} onRequestClose={() => setModal(false)}>
              
              <div className="payment" onLoad={() => {
                    const M = window.M
                    M.AutoInit();
              }}>
                 <div className="center-align"> Total Payment <span> {parseInt(total / JSON.parse(localStorage.currency).rate )} </span>{JSON.parse(localStorage.currency).currency}</div>
              <div className="payment2">

              {JSON.parse(localStorage.currency).currency == "RWF" ? 
              <div className="includeBtn">

                  <div className="spaceIn">

              <select className="input-field spaceIn"  name="countryCode" id="codes" onChange={() => changeCode(document.querySelector('#codes').value)} required>
                <option  value="mtn" default>Airtel-Tigo cash Rwanda</option>
                <option  value="tigo" default> Mtn Mobile Money Rwanda</option>

             </select>
             </div>

              <div className="spaceIn gridTwo4">
              <div  className="pushUp2">
              <select className="input-field"  name="countryCode" id="codes" onChange={() => changeCode(document.querySelector('#codes').value)} required>
                <option countryCode="RW" value="250" default> +250</option>
             </select>
              </div>
              
              <div>
              <Input 
                 info={{
                    style: "input-field",
                    id: "email",
                    type: "number",
                    label: "Mobile Number"

                 }}
                 changed={getPhoneNumber}
                  />
                 
              </div>
                 <div className="spaceIn">
                <button className="btn white green-text waves-effect waves-light " onClick={paymentRwandaTigoAirtel}>PAY {parseInt(total / JSON.parse(localStorage.currency).rate )}  { JSON.parse(localStorage.currency).currency}</button> 
                   {/* <div className="midLoader"> <Loader type="circle" style="preloader-wrapper small active"/>  </div> } */}
                  </div>
                  </div> 
              </div>
                  : null}
              

                  <div className="payCard">
                    <h3>Pay With Credit-Card</h3>
                    <br/>
                    <img src={payPic} alt=""/>
                    <br/>

                    <ErrorHandler>

                    <RaveProvider {...config}>
                        <RavePaymentButton className="btn-large">Pay {parseInt(total / JSON.parse(localStorage.currency).rate )} {" " +JSON.parse(localStorage.currency).currency}</RavePaymentButton>
                    </RaveProvider>

                    </ErrorHandler>


                </div>
                </div>
                  
                </div>


              

                </Modal>
            </div>
        )
}

export default  tickets