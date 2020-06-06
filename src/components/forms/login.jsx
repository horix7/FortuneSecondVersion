import React, {Fragment, Component} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import Loader from '../UI/preloader';
import axios from 'axios';

class Login extends Component {

    state={
        login: true,
        reset: false,
        loginInfo: {
            email: null,
            password: null
        },

        resetInfo: {
            email: null,
            age: null
        },
        newPass: {
            password: null,
            newPass: null
        },
        submit: false,
        error: null,
        mess: null

    }

    showError = () => {
        location.href = "#err"
    }

    handleInputChange = (e) => {
        this.changeSubmit()
        this.state.loginInfo[e.target.id] = e.target.value
        this.changeSubmit()

       
     }

     handleInputChangeR = (e) => {
        this.state.resetInfo[e.target.id] = e.target.value
        this.changeSubmit()

       
     }

     handleInputChangeRl = (e) => {
        this.state.newPass[e.target.id] = e.target.value
        this.changeSubmit()
       
     }

     updatePass = (e) => {
            
        e.preventDefault()
        if(this.state.newPass.password ===  this.state.newPass.newPass) {
        this.setState({
           btnLoad: true
        })
           axios({
           method: 'put',
           url: localStorage.address + "/api/v1/updatepass",
           data: {
               pass: this.state.newPass.password,
               email: this.state.resetInfo.email
             },
           headers: {'Content-Type': "application/json" }
           })
           .then( (response) => {

            console.log(response)
                this.setState({
                    reset: false,
                    btnLoad: false,
                    error: null,
                    login: true,
                    mess: "You Have SuccessFully updated your password"

                 })

           }).catch(err => {
               this.showError()

              let info = err.response.data
              console.log(info)
              console.log(info)
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
              } else  {
                this.setState({
                   error:  "something Wrong Happened Please reload the page",
                   btnLoad: false,
                    mess: null
                })
             }
             
           })
        }else {
            this.setState({
                error: "Password Does Not Match"
            })
        }
     }


     verfyPass = (e) => {
            
        e.preventDefault()
        this.setState({
           btnLoad: true
        })
           axios({
           method: 'post',
           url: localStorage.address + "/api/v1/checkuse",

           data: this.state.resetInfo,
           headers: {'Content-Type': "application/json" }
           })
           .then( (response) => {
            
                this.setState({
                    reset: true,
                    btnLoad: false,
                     mess: null,
                    error: null

                 })

           }).catch(err => {
            this.showError()


              let info = err.response.data
              console.log(info)
              console.log(info)
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
             
           })
          
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
  
               localStorage.setItem("auth", response.data.data[0].token)
             localStorage.setItem("details",  JSON.stringify(response.data.data[0].details))

               this.props.login()
              

  
           }).catch(err => {

            try {
               if ( err.response.data.status == 400) {
                  this.setState({
                     error: "Your Provided Invalid  information",
                     btnLoad: false,
                      mess: null
                  })
               } else if ( err.response.data.status == 409 ||  err.response.data.status == 403) {
                  this.setState({
                     error:   err.response.data.error ||  err.response.data.message,
                     btnLoad: false,
                      mess: null
                  })
               }
            } catch (error)  {
               console.error(error)
            }
             
           })
          
        }
     }
  
    changeLogin = (e) => {
        e.preventDefault()
        let newState = {...this.state}

        this.setState({
            login: !newState.login
        })
    }


    changeSubmit = () => {
        console.log(Object.values(this.state.loginInfo).some(n => n == null))
        if(!Object.values(this.state.loginInfo).some(n => n == null)) {
              this.setState({
                 submit: true
              })
        } 
     }

    render() {
        let btn = null 
     if(this.state.btnLoad) {
        btn = (<Loader />)
     }else {
      
      btn = (         
        <Button 
        style="btn longBtn  waves-effect waves-light black"
        text="Login"
          info={{
            type: "submit",
            name: "action",
           
          }}
          clicked={this.postSignIn}
       />

        )

     }

    let login = (
        <div>
        <Input 
         info={{
            style: "input-field",
            id: "email",
            type: "text",
            label: "User Name"
    
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
         changed={this.handleInputChange}

        />
        {this.state.submit ? btn :  <Button 
        style="btn longBtn  waves-effect waves-light black"
        text="Login"
          info={{
            type: "submit",
            name: "action",
           
          }}
       />}


        <div className="gridTwo">
            <button className="btn white black-text" onClick={this.changeLogin}>Forgot Password</button>
            <button className="btn white black-text" onClick={this.props.sign}>Creat An Account</button>

        </div>
    </div>
    )

    let forgot = (
        <div>
        <Input 
         info={{
            style: "input-field",
            id: "email",
            type: "email",
            label: "Your Email"
    
         }}
         changed={this.handleInputChangeR}

         />
        <Input 
         info={{
            style: "input-field",
            id: "age",
            type: "number",
            label: "Your Age "
    
         }}
         changed={this.handleInputChangeR}

        />

        {!this.state.btnLoad ? <Button 
         style="btn longBtn  waves-effect waves-light black"
         text="Verify"
           info={{
             type: "submit",
             name: "action",
            
           }}
           clicked={this.verfyPass}
        /> : <Loader/>}

        <div className="gridTwo">
            <button className="btn white black-text" onClick={this.changeLogin}>Back</button>
            <div></div>
        </div>
    </div>
    )

    let reset = (
        <div>
        <Input 
         info={{
            style: "input-field",
            id: "password",
            type: "password",
            label: "New Password"
    
         }}
         changed={this.handleInputChangeRl}

         />
        <Input 
         info={{
            style: "input-field",
            id: "newPass",
            type: "password",
            label: "Repeat Password "
    
         }}
         changed={this.handleInputChangeRl}

        />

        {!this.state.btnLoad ? <Button 
         style="btn longBtn  waves-effect waves-light black"
         text="Change Password"
           info={{
             type: "submit",
             name: "action",
            
           }}
           clicked={this.updatePass}
        /> : <Loader/>}

      
    </div>
    )

    return(
        <Fragment>
             {this.state.error ? <div id="err" className="errorz">{this.state.error}</div> : null}
             {this.state.mess ? <div id="err" className="successz">{this.state.mess}</div> : null}
           {!this.state.reset ? <div> {this.state.login ? login : forgot} </div> : reset}
        </Fragment>
    )
}
}

export default Login;