import React, {Fragment, Component} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import Loader from '../UI/preloader';
import axios from 'axios';


class SignUp extends Component {

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
      error: null

    
      
   }


   showError = () => {
      location.href = "#err"
  }

   changeSubmit = () => {
      console.log(Object.values(this.state.signUp).some(n => n == null))
      if(!Object.values(this.state.signUp).some(n => n == null)) {
            this.setState({
               submit: true
            })
      } 
   }

   changeGender = (e) => {
      this.state.signUp.gender = e.target.value
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
         .then( (response) => {

             localStorage.setItem("auth", response.data.data[0].token)
             localStorage.setItem("details", JSON.stringify(response.data.data[0].details))


             console.log(localStorage.auth);
             this.setState({
                error: null
             })
             this.props.login()

         }).catch(err => {
            this.showError()
           try {
            let info = err.response.data
            console.log(info)
            if (info.status == 400) {
               this.setState({
                  error: "Your Provided Invalid Information ",
                  btnLoad: false
               })
            } else if (info.status == 409 || info.status == 403) {
               this.setState({
                  error:  info.error || info.message,
                  btnLoad: false
               })
            }
           } catch(error) {
              console.error(error)
           }
           
         })
        
      }
   }

   handleInputChange = (e) => {
      this.changeSubmit()
      console.log(this.state)
      this.state.signUp[e.target.id] = e.target.value
     
   }

   handlePasswordChange = (e) => {
      this.state.signUp["password"] = e.target.value
      this.changeSubmit()
   }

   componentDidMount(){
      
    const M = window.M

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
      });
   }


  render() {
     let btn = null

     if(this.state.btnLoad) {
        btn = (<Loader />)
     }else {
      
      btn = (
         <Button 
         style="btn  waves-effect waves-light black"
         text="Sign Up"
           info={{
             type: "submit"
            
           }}
           clicked={this.postSignUp}
        />
        )

     }
    return(
        <Fragment>
            <div>
                {this.state.error ? <div id="err" className="errorz">{this.state.error}</div> : null}
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
                    label: "secondname",
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
                    <select  className="browser-default" onChange={this.changeGender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
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
                    id: "password",
                    type: "password",
                    label: "Password"
            
                 }}
                 changed={this.handlePasswordChange}
                />

            <p className="">By Signing Up You Agree To Our Terms And Conditions </p>
                 <br/>

              {this.state.submit ? btn : 
                
               <Button 
               style="btn  waves-effect waves-light black"
               text="Sign Up"
                 info={{
                   type: "submit"
                  
                 }}
                 clicked={this.changeSubmit}
              />}

            
            </div>
        </Fragment>
    )
  }
}

export default SignUp;