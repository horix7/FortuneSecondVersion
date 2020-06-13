import React, {useState, Component } from 'react';
import Modal from 'react-modal'
import Input from '../components/UI/input'
import axios from 'axios'
import Loader from '../components/UI/preloader'
import { RaveProvider, RavePaymentButton } from "react-ravepayment";
 
const config = {
  txref: "rave-123456",
  customer_email: "user@example.com",
  customer_phone: "234099940409",
  amount: 1000,
  currency: "USD",
  PBFPubKey: "FLWPUBK-b7454e2336475fcfa01d20f6343eeb41-X",
  production: true,
  onSuccess: () => {},
  onClose: () => {}
} 


Modal.setAppElement('#root')

let tickets = props => {
    const [modal, setModal] = useState(false)
    const [Momo, setMomo] = useState("checked")
    const [Card, setCard] = useState(null)
    const [Airtel, setAirtel] = useState(null)
    const [userNumber, setNumber] = useState(null)
    const [btnLoad, setBtn] = useState(true)





    const [payment, setPayment] = useState("momo")

    let handleRadioOption = () => {
        let checkboxes = document.querySelectorAll('input[type=radio]:checked')

        setPayment(checkboxes[0].value)
        
}
    let total = props.chosen.length * props.price

    let setRadion = (id) => {
        if(id === "M") {
            setMomo("checked")
            setCard(null)
            setAirtel(null)


        }else if (id === "A") {
            setAirtel("checked")
            setMomo(null)
            setCard(null)

        } else if (id === "C") {
            setCard("checked")
            setMomo(null)
            setAirtel(null)
        }
    }
    
  let  payMomo = () => {
        setBtn(false)
        let postForPayment = {
            "trxRef": new Date().getTime() + "-" + Math.floor(Math.random() * 100),
            "channelId": "momo-mtn-rw",
            "accountId": "6f5b098a-d46c-403c-b596-14181a054a87",
            "msisdn": userNumber,
            "amount":parseInt(total),
            "callback": "http://front-213v31.herokuapp.com/"
          }
    
        axios({
            method: 'post',
            url: "https://payments-api.fdibiz.com/v2/momo/pull",
            date: postForPayment,
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
        return (    
            <div id="err" className="formHolder">
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
                         <div className="total">
                           Total {total} rwf
                         </div>
                         <button className="btn blue" onClick={() => setModal(true)}>Continue To Checkout</button>
                     </div>
                    </div>
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
                    <div>
                    <form action="#" className="optionPay">
                        <p>
                        <label>
                            <input name="group1" type="radio" checked={Momo} onChange={() => setRadion("M")} />
                            <span className="black-text">MoMo Pay </span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onChange={() => setRadion("C")}  checked={Card}/>
                            <span className="black-text">Credit Card </span>
                        </label>
                        </p>
                       
                    </form>
                    </div>

              {Momo ?  
              <div className="payment">
                 <div className="center-align"> Total Payment <span> {total} </span> Rwf</div>
              <div className="spaceIn">

                <Input 
                 info={{
                    style: "input-field",
                    id: "email",
                    type: "number",
                    label: "07xxxxxxx",
                    icon: "phone"

                 }}
                 changed={getPhoneNumber}
                  />
                  </div>

                  <div className="spaceIn">
                  {btnLoad ? <button className="btn white green-text waves-effect waves-light " onClick={payMomo}>PAY</button> 
                  : <div className="midLoader"> <Loader type="circle" style="preloader-wrapper small active"/>  </div> }
                  </div>
                </div> : null }


                <div className="payCard">
                    <RaveProvider {...config}>
                        <RavePaymentButton>Pay 2000</RavePaymentButton>
                    </RaveProvider>
                </div>

                </Modal>
            </div>
        )
}

export default  tickets