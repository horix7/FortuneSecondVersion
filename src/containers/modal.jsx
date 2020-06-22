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
import PaymentOption2 from '../images/PaymentOptions3.png'


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
    } catch (error) {
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
    } catch (error) {
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
    } catch (error) {
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
    } catch (error) {
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
    } catch (error) {
    }                            
   
}
 


const callVerify =  async (ref) => {
 
    const payload = {
        txref:ref
    }
    try {
       const response =  await rave.VerifyTransaction.verify(payload, rave)
    } catch (error) {
    }                            
   
}
 

Modal.setAppElement('#root')

let tickets = props => {
    const [modal, setModal] = useState(false)
    const [waiting, setWaiting] = useState(false)
    
    const [userNumber, setNumber] = useState(7)
    const [payOpt, changeCode] = useState(null)
    const [tokenPay, setTokenPay] = useState(null)


    const [scroll, scrollNow] = useState({
        current: "keyboard_arrow_down",
        href: "#bottom"
    })

  

    
    

let bidRequest = () => {
    let bidInfo = {
            productid: props.id,
            bids:JSON.stringify(props.chosen.map(n => parseInt(n))),
            fortunes:  props.chosen.length.toString(),
            momopay: "Rwandan Mobile-money" || "Flutter-wave"
            
    }

    axios({
        method: 'post',
        url: localStorage.address + "/api/v1/bid/",
        data: bidInfo,
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json", 
            "Authorization": localStorage.auth
            
            }
        })
        .then( (response) => {
           setBtnLoad(false)

               if(response.data.data == "done") {
                alert("Your Bid Was Made Successfully")
                window.location.reload()
               }else {
                if(response.data.data.tickets.length < response.data.data.size) {
                    alert("Your Bid Was Not  Successfull contact support on contact@fortuneauction360.com")
                    window.location.reload()
               
                }else {
                    alert("An error Occured When Bidding contact support on contact@fortuneauction360.com")
                    window.location.reload()
                    
                }

               }
         


        }).catch(err =>{
            alert("Something Wnet Wrong")
            setBtnLoad(false)
        })

    
}




let chechStatusMomo = (id) => {
 let link = "https://payments-api.fdibiz.com/v2/momo/trx/" + id + "/info"
 axios({
    method: 'get',
    url:  link,
    headers: { "Authorization": "Bearer" + " " + localStorage.payemtAuth}
    })
    .then( (response) => {
        if(response.data.data.trxStatus == "pending") {
            chechStatusMomo(id)    


        } else if (response.data.data.trxStatus == "failed") {
            let message = response.data.data.channelRef.split('_')
            message.shift()

            message.join('-')
            alert(message)

            setBtnLoad(false)

        } else if (response.data.data.trxStatus == "successful") {
            bidRequest()
        }

    }).catch(err => setBtnLoad(false))

}


let checkStatusAirtelMoney =  (id) => {
    
    let link = "https://api.havanao.com/api/sale/status?transactionId=" + id +"&api_token=NJoyXg1on9rG4RDUDfNN0nBUR1JJp8E4FRuGR6h767ApnuQ1cJmiqgNZW7wZ"
 axios({
    method: 'get',
    url:  link
    })
    .then( (response) => {

            if(response.data.transactionStatus == "REQUESTED") {
               checkStatusAirtelMoney(id)


            } else if(response.data.transactionStatus == "DECLINED") {
               alert("Your Payment Failed Try Again ")
               setBtnLoad(false)

            }else {
               bidRequest()

            }

    }).catch(err =>  setBtnLoad(false))

}


    let paymentRwandaTigoAirtel = () => {
      setBtnLoad(true)


        let havanaoPaymentBody =  {
            "amount": parseInt(parseFloat(total) / JSON.parse(localStorage.currency).rate),
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
            .then( async (response) => {
                if(response.data.transactionStatus == "REQUESTED") {
                   
                    checkStatusAirtelMoney(havanaoPaymentBody.transactionid)   

                   
                } else {
                }

            }).catch(err =>  {
                alert("anError Occured Processing Your Payment")
                console.error(err)
                setBtnLoad(false)})
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
    const [counter, setCounter] = useState(0)
    const [btnLoad, setBtnLoad] = useState(false)

    const [makeBid, setMakeBid] = useState(false)



    let handleRadioOption = () => {
        let checkboxes = document.querySelectorAll('input[type=radio]:checked')

        setPayment(checkboxes[0].value)
        
}
    let total = props.chosen.length * props.price


  let  payMomo = () => {
    setBtnLoad(true)
        let postForPayment = {
            "trxRef": new Date().getTime() + "-" + parseInt(Math.random() * 100),
            "channelId": "momo-mtn-rw",
            "accountId": "6f5b098a-d46c-403c-b596-14181a054a87",
            "msisdn": "0" + userNumber,
            "amount":  parseInt(parseFloat(total) / JSON.parse(localStorage.currency).rate),
            "callback": "http://front-213v31.herokuapp.com/"
          }
          


axios({
    method:"get",
    url: localStorage.address + "/api/v1/paytoken",
    headers: {
        Authorization: localStorage.auth
    }
}).then(results => {
    localStorage.setItem("payemtAuth" , results.data.data)
    axios({
        method: 'post',
        url: "https://payments-api.fdibiz.com/v2/momo/pull",
        data: postForPayment, 
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json", 
            "Authorization":"Bearer" + " " + results.data.data
            
            }
        })
        .then( (response) => {
            if(response.data.data.state == "processing") {
             chechStatusMomo(postForPayment.trxRef)
               
            } else {
            }

        }).catch(err => {
            if(err.response) {
                console.log(err.reponse)
            }
            setBtnLoad(false)
        })
}).catch(err => {
    alert("anError Occured Processing Your Payment")
    console.error(err)
    setBtnLoad(false)
})
}

     let getPhoneNumber = e => {
          setNumber(e.target.value)
      }

      
      let  numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
const config = {
    txref:"MC-" + new Date(),
    customer_email: JSON.parse(localStorage.details).email,
    customer_phone: JSON.parse(localStorage.details).phone,
    amount: JSON.parse(localStorage.currency).curren == "RWF" || JSON.parse(localStorage.currency).curren == "GHS" || JSON.parse(localStorage.currency).curren == "UGX" || JSON.parse(localStorage.currency).curren == "ZMW" ? parseFloat(total).toFixed(2) : parseFloat(total / JSON.parse(localStorage.currency).rate).toFixed(1),
    currency: JSON.parse(localStorage.currency).curren == "RWF" || JSON.parse(localStorage.currency).curren == "GHS" || JSON.parse(localStorage.currency).curren == "UGX" || JSON.parse(localStorage.currency).curren == "ZMW" ? "USD" : JSON.parse(localStorage.currency).curren,
    PBFPubKey: "FLWPUBK-b7454e2336475fcfa01d20f6343eeb41-X",
    production: true,
    onSuccess: () => {
        bidRequest()
    },
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
                           Total = {" " + JSON.parse(localStorage.currency).currency}{numberWithCommas(parseFloat(total / JSON.parse(localStorage.currency).rate ).toFixed(2))} 
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
                      top: '10%',
                      left: '2%',
                      right: '2%',
                      bottom: '5%',
                      border: '1px solid #fff',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '50px',
                      outline: 'none',
                      padding: '10px'
                    }
                  }}
                 isOpen={modal} onRequestClose={() => {
                     setModal(false)
                     setBtnLoad(false)
                 }}>
                    <a className="btn-floating black" onClick={() => {
                        setModal(false)
                        setBtnLoad(false)
                    }}>
                        <i className="material-icons">clear</i>
                    </a>
              
              <div className="payment" onLoad={() => {
                    const M = window.M
                    M.AutoInit();
              }}>
                  <img src={PaymentOption2} width="100%" className="payOpt12" alt=""/>
                 <div className="center-align"> Total Payment  {JSON.parse(localStorage.currency).currency} <span> {numberWithCommas(parseFloat(total / JSON.parse(localStorage.currency).rate ).toFixed(2))} </span></div>
              <div className="payment2">

              {JSON.parse(localStorage.currency).currency == "RWF" ? 
              <div className="includeBtn">

                  <div className="spaceIn">

              <select className="input-field spaceIn"   id="codes" onChange={() => changeCode(document.querySelector('#codes').value)} required>
                <option  value="mtn" default> Mtn Mobile Money Rwanda</option>
                <option  value="tigo" default>Airtel-Tigo cash Rwanda</option>

             </select>
             </div>

              <div className="spaceIn gridTwo4" >
              <div  className="pushUp2">
              <select className="input-field"  name="countrycode" required>
                <option countrycode="RW" value="250" default> +250</option>
             </select>
              </div>
              
              <div>
              <Input 
                 info={{
                    style: "input-field",
                    id: "email",
                    type: "number"

                 }}
                 value={userNumber}
                 changed={getPhoneNumber}
                  />
                 
              </div>
                 <div className="spaceIn">
                {btnLoad ? <Loader/> : <button className="btn white green-text left" onClick={() => {
                    if(payOpt === "tigo") {
                        paymentRwandaTigoAirtel()
                    } else {
                        payMomo()
                    }
                }}>PAYING = {waiting ? waiting : " " + JSON.parse(localStorage.currency).currency + numberWithCommas(parseFloat(total / JSON.parse(localStorage.currency).rate).toFixed(2)) }</button> }
                   {/* <div className="midLoader"> <Loader type="circle" style="preloader-wrapper small active"/>  </div> } */}
                  </div>
                  </div> 
              </div>
                  : <div> </div>}
              

                  <div className="payCard">
                    <h3>Pay With Credit-Card</h3>
                    <br/>
                    <br/>

                    <ErrorHandler>

                    <RaveProvider {...config}>
                        <RavePaymentButton className="btn-large">Paying = {" " + JSON.parse(localStorage.currency).currency}{numberWithCommas(parseFloat(total / JSON.parse(localStorage.currency).rate ).toFixed(2))}</RavePaymentButton>
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