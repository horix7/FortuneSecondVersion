import React, {Fragment, Component} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import axios from 'axios';
import Loader from '../UI/preloader'


 class SendMoney extends Component {

    state = {
        money: {
            number: null,
            amount: null
        },
        submit: false,
        btnLoad: false

    } 
    senMoneyMomo = e => {
        e.preventDefault()
        let sendData = {
            "trxRef": "MC-" + Date.now(),
            "channelId": "momo-mtn-rw",
            "accountId": "6f5b098a-d46c-403c-b596-14181a054a87",
            "msisdn": this.state.number,
            "amount": 100,
            "callback": "https://your-callback.example-app.com"
          }

          axios({
            method: 'post',
            url: "https://payments-api.fdibiz.com/v2/momo/push",
            data: sendData,
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json", 
                "Authorization":"Bearer" + " " + localStorage.paymentAuth
                
                }
            })
            .then( (response) => {
                 console.log(response)

            }).catch(err => console.error(err))
 }
  
 
   handleInputs = (e) => {
      this.state.money[e.target.id] = e.target.value
      this.changeSub()      
    }

    changeSub = () => {
       if(Object.values(this.state.money).some(n => n == null)) {
           this.setState({
               submit: false
           })
       }else {

        this.setState({
            submit: true
        })
       }
    }
  
  render() {
    return(
        <Fragment>
             {this.state.error ? <div id="err" className="errorz">{this.state.error}</div> : null}
             {this.state.mess ? <div id="err" className="successz">{this.state.mess}</div> : null}
            <div>

                <div className="gridTwo">
                    <div className="spaceIn">
                    <Input 
                        info={{
                            style: "input-field",
                            id: "number",
                            type: "number",
                            label: "user number "
                    
                        }}
                        changed={this.handleInputs}

                        />


                    </div>
                    <div className="spaceIn">
                 <Input 
                 info={{
                    style: "input-field",
                    id: "amount",
                    type: "number",
                    label: "Amount "
            
                 }}
                 changed={this.handleInputs}

                />
                    </div>

                </div>



             {!this.state.submit ?  
               <Button 
                 style="btn longBtn  waves-effect waves-light black"
                 text="Send"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                /> :  <Fragment>
                        {!this.state.btnLoad ?
                         <Button 
                        style="btn longBtn  waves-effect waves-light black"
                        text="Send"
                        info={{
                            type: "submit",
                            name: "action",
                        
                        }}
                        clicked={this.senMoneyMomo} /> : <Loader/>}
                    </Fragment>}

                    
            </div>

            
        </Fragment>
    )
  }
}

export default SendMoney;