import React, {Component ,Fragment} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import axios from 'axios';
import Loader from '../UI/preloader'


class SubmitSign  extends Component {

   state={
      signUp: {
         firstname: null,
         secondname: null,
         email: null,
         phone: null,
         age: null,
         gender: "male",
         password: null

      },
      btnLoad: false,
      submit: null,
      error: null,
      account: false,
      loginInfo: {
         email: null,
         password: null
     },
     token: null,
     requestInfo: {
        sells: null,
        address: null,
        store: null,
        account: null,
        phone: null,
        email: null
     }
    
      
   }

   
   showError = () => {
      location.href = "#err"
  }

   postSignUp = (e) => {

      e.preventDefault()
      this.setState({
         btnLoad: true
      })
      if(this.state.submit) {
         axios({
         method: 'post',
         url: localStorage.address + "/api/v1/auth/signup",
         data: this.state.signUp,
         headers: {'Content-Type': "application/json" }
         })
         .then((response) => {

            let request = {...this.state.requestInfo}
            request.account = response.data.data[0].details.username
            request.phone = response.data.data[0].details.phone
            request.email = response.data.data[0].details.email

             this.setState({
               token: response.data.data[0].token,
               details: JSON.stringify(response.data.data[0].details),
               requestInfo: {...request}

            })

            this.rqVend()


         }).catch(err => {
            this.showError()
            let info = err.response.data
            console.log(info)
            if (info.status == 400) {
               this.setState({
                  error: "Your Provided Invalid Information ",
                  mess: null,
                  btnLoad: false
               })
            } else if (info.status == 409 || info.status == 403) {
               this.setState({
                  error:  info.error || info.message,
                  btnLoad: false
               })
            }
           
         })
        
      }
   }

   postSignIn  = (e) => {

      e.preventDefault()
      this.setState({
         btnLoad: true
      })
      if(this.state.submit) {
         axios({
         method: 'post',
         url: localStorage.address + "/api/v1/auth/signin",

         data: this.state.loginInfo,
         headers: {'Content-Type': "application/json" }
         })
         .then( (response) => {

            let request = {...this.state.requestInfo}
            request.account = response.data.data[0].details.username
            request.phone = response.data.data[0].details.phone
            request.email = response.data.data[0].details.email



            this.setState({
               token: response.data.data[0].token,
               details: JSON.stringify(response.data.data[0].details),
               requestInfo: {...request}

            })
            
             this.rqVend()


         }).catch(err => {
            this.showError()

            let info = err.response.data
            if (info.status == 400) {
               this.setState({
                  error: "Your Provided Invalid Information",
                  btnLoad: false,
                   mess: null
               })
            } else if (info.status == 409 || info.status == 403) {
               this.setState({
                  error:  info.error || info.message,
                  btnLoad: false,
                   mess: null
               })
            }
           

            console.log(err)
         })
        
      }
   }

   rqVend  = (e) => {
 
         axios({
         method: 'post',
         url: localStorage.address + "/api/v1/reqvend",

         data: this.state.requestInfo,
         headers: {'Content-Type': "application/json" }
         })
         .then( (response) => {
            this.showError()
            
            this.setState({
               btnLoad: true,
               error: null,
               mess: "your request is sent"

            })
            
            setTimeout(() => {
               localStorage.setItem("auth", this.state.token)
               localStorage.setItem("details", this.state.details)

                  this.props.login()
            }, 1000)
            console.log(response)


         }).catch(err => {
           console.log(err)
           
         })
        
   }

   handleInputChange = (e) => {
      this.state.signUp[e.target.id] = e.target.value
      this.changeSubmitAcc()
      console.log(this.state)

     
   }

   handleInputChangeR = (e) => {
      this.state.loginInfo[e.target.id] = e.target.value
      this.changeSubmitAcc2()
      console.log(this.state)


     
   }

   handleInputChangeRl = (e) => {
      this.state.requestInfo[e.target.id] = e.target.value
      this.changeSubmitAcc2()
      this.changeSubmitAcc()
      console.log(this.state)


     
   }

   
   changeSubmitAcc = () => {
      let checkAll =  Object.values(this.state.signUp).some(n => n == null) && Object.values(this.state.requestInfo).some(n => n == null)
      console.log(checkAll)
      if(!checkAll) {
            this.setState({
               submit: true
            })
      } else {
         this.setState({
            submit: false 
         })
      }
   }

   changeSubmitAcc2 = () => {
      let checkAll = Object.values(this.state.loginInfo).some(n => n == null) && Object.values(this.state.requestInfo).some(n => n == null)
      console.log(checkAll)

      if(!checkAll) {
            this.setState({
               submit: true
            })
      } else {
         this.setState({
            submit: false 
         })
      }
   }
    componentDidMount() {
        const M = window.M
        
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
          });
    }


    changeForm = () => {
     
      var elems = document.querySelectorAll('input');
      elems.forEach(n => {
         n.value = ""
      })
      let newState = {...this.state}
        this.setState({
            account: !newState.account
        })
    }

   render() {
      let excute = null 
      if(!this.state.account) {
         excute = this.postSignUp
      }else {
         excute = this.postSignIn

      }


      return(
        <Fragment>

            {this.state.error ? <div id="err" className="errorz">{this.state.error}</div> : null}
             {this.state.mess ? <div id="err" className="successz">{this.state.mess}</div> : null}

            <div className="gridTwo longz">

                <div className="btn white black-text" onClick={this.changeForm}>
                   {!this.state.account ? <i className="material-icons left ">radio_button_checked</i> : <i className="material-icons left">radio_button_unchecked</i> }
                    New User 
                </div>

                <div className="btn white black-text" onClick={this.changeForm}>
                   {this.state.account ? <i className="material-icons left">radio_button_checked</i> : <i className="material-icons left">radio_button_unchecked</i> }
                    registered
                </div>

            </div>
           {!this.state.account ? <div>
            <Input 
                 info={{
                    style: "input-field",
                    id: "firstname",
                    type: "text",
                    label: "Your Names"
            
                 }}
                 changed={this.handleInputChange}
                 />

                <Input 
                 info={{
                    style: "input-field",
                    id: "secondname",
                    type: "text",
                    label: "User Name",
                    icon: "account_circle"
            
                 }}
                 changed={this.handleInputChange}

                 />

                 <div className="gridTwo">
                 <Input 
                 info={{
                    style: "input-field",
                    id: "age",
                    type: "number",
                    label: "Your Current Age"
            
                 }}
                 changed={this.handleInputChange}

                 />

                <div>
                <label>Choose Your Gender</label>
                    <select className="browser-default">
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                    </select>
                </div>

                 </div>

                 <Input 
                 info={{
                    style: "input-field",
                    id: "phone",
                    type: "number",
                    label: "Phone Number",
                    icon: "phone"
            
                 }}
                 changed={this.handleInputChange}

                />

            <Input 
                 info={{
                    style: "input-field",
                    id: "email",
                    type: "email",
                    label: "Your Email",
                    icon: "email"

            
                 }}
                 changed={this.handleInputChange}

                />

            <Input 
                 info={{
                    style: "input-field",
                    id: "sells",
                    type: "text",
                    label: "What Do You Sell",

            
                 }}
                 changed={this.handleInputChangeRl}

                />

            <Input 
                 info={{
                    style: "input-field",
                    id: "address",
                    type: "text",
                    label: "Store Address",
                    icon:"location_on"

            
                 }}
                 changed={this.handleInputChangeRl}


                />

                 <Input 
                 info={{
                    style: "input-field",
                    id: "store",
                    type: "text",
                    label: "Store Name",
                    icon: "store"

            
                 }}
                 changed={this.handleInputChangeRl}


                />

                <Input 
                 info={{
                    style: "input-field",
                    id: "password",
                    type: "password",
                    label: "Password"
            
                 }}
                 changed={this.handleInputChange}

                />

            <p className="">By Signing Up You Agree To Our Terms And Conditions </p>
                 <br/>

          {this.state.btnLoad ? <Loader />: <div>
           {!this.state.submit ? <Button 
                 style="btn  waves-effect waves-light black"
                 text="Request Now"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                /> :  <Button 
                     style="btn  waves-effect waves-light black"
                     text="Request Now"
                     info={{
                     type: "submit",
                     name: "action",
                     
                     }}
                     clicked={excute}
               />}
           </div>}
               
            </div>

            
        : 
        <div>
              <Input 
                 info={{
                    style: "input-field",
                    id: "email",
                    type: "text",
                    label: "User Name"
            
                 }}
                 changed={this.handleInputChangeR}

                 />
                             <Input 
                 info={{
                    style: "input-field",
                    id: "sells",
                    type: "text",
                    label: "What Do You Sell",

            
                 }}
                 changed={this.handleInputChangeRl}

                />

            <Input 
                 info={{
                    style: "input-field",
                    id: "address",
                    type: "text",
                    label: "Store Address",
                    icon:"location_on"

            
                 }}
                 changed={this.handleInputChangeRl}

                />

                 <Input 
                 info={{
                    style: "input-field",
                    id: "store",
                    type: "text",
                    label: "Store Name",
                    icon: "store"

            
                 }}
                 changed={this.handleInputChangeRl}

                />
                <Input 
                 info={{
                    style: "input-field",
                    id: "password",
                    type: "password",
                    label: "Password"
            
                 }}
                 changed={this.handleInputChangeR}

                />
                 {this.state.btnLoad ? <Loader />: <div>
           {!this.state.submit ? <Button 
                 style="btn  waves-effect waves-light black"
                 text="Request Now"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                /> :  <Button 
                     style="btn  waves-effect waves-light black"
                     text="Request Now"
                     info={{
                     type: "submit",
                     name: "action",
                     
                     }}
                     clicked={excute}
               />}
           </div>}
        </div>
        }

      

        </Fragment>
    )
   }
}

export default SubmitSign;