import React, {Component ,Fragment} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';



class SubmitSign  extends Component {

    state={
        account: false
    }

    componentDidMount() {
        const M = window.M
        
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
          });
    }


    changeForm = () => {
        let newState = {...this.state}
        this.setState({
            account: !newState.account
        })
    }

   render() {

    return(
        <Fragment>
            <div className="gridTwo">

                <button className="btn white black-text" onClick={this.changeForm}>
                   {!this.state.account ? <i className="material-icons left ">radio_button_checked</i> : <i className="material-icons left">radio_button_unchecked</i> }
                    New User 
                </button>

                <button className="btn white black-text" onClick={this.changeForm}>
                   {this.state.account ? <i className="material-icons left">radio_button_checked</i> : <i className="material-icons left">radio_button_unchecked</i> }
                    registered
                </button>

            </div>
           {!this.state.account ? <div>
            <Input 
                 info={{
                    style: "input-field",
                    id: "Names",
                    type: "text",
                    label: "Your Names"
            
                 }}
                 />

                <Input 
                 info={{
                    style: "input-field",
                    id: "user",
                    type: "text",
                    label: "User Name",
                    icon: "account_circle"
            
                 }}
                 />

                 <div className="gridTwo">
                 <Input 
                 info={{
                    style: "input-field",
                    id: "age",
                    type: "number",
                    label: "Your Current Age"
            
                 }}
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
                    type: "tel",
                    label: "Phone Number",
                    icon: "phone"
            
                 }}
                />

            <Input 
                 info={{
                    style: "input-field",
                    id: "email",
                    type: "email",
                    label: "Your Email",
                    icon: "email"

            
                 }}
                />

            <Input 
                 info={{
                    style: "input-field",
                    id: "sell",
                    type: "text",
                    label: "What Do You Sell",

            
                 }}
                />

            <Input 
                 info={{
                    style: "input-field",
                    id: "store",
                    type: "text",
                    label: "Store Address",
                    icon:"location_on"

            
                 }}
                />

                 <Input 
                 info={{
                    style: "input-field",
                    id: "store2",
                    type: "text",
                    label: "Store Name",
                    icon: "store"

            
                 }}
                />

                <Input 
                 info={{
                    style: "input-field",
                    id: "pass",
                    type: "password",
                    label: "Password"
            
                 }}
                />

            <p className="">By Signing Up You Agree To Our Terms And Conditions </p>
                 <br/>

             
               
            </div>
        : 
        <div>
              <Input 
                 info={{
                    style: "input-field",
                    id: "user",
                    type: "text",
                    label: "User Name"
            
                 }}
                 />
                             <Input 
                 info={{
                    style: "input-field",
                    id: "sell",
                    type: "text",
                    label: "What Do You Sell",

            
                 }}
                />

            <Input 
                 info={{
                    style: "input-field",
                    id: "store",
                    type: "text",
                    label: "Store Address",
                    icon:"location_on"

            
                 }}
                />

                 <Input 
                 info={{
                    style: "input-field",
                    id: "store2",
                    type: "text",
                    label: "Store Name",
                    icon: "store"

            
                 }}
                />
                <Input 
                 info={{
                    style: "input-field",
                    id: "pass",
                    type: "password",
                    label: "Password"
            
                 }}
                />
        </div>
        }

        <Button 
                 style="btn  waves-effect waves-light black"
                 text="Request Now"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                />

        </Fragment>
    )
   }
}

export default SubmitSign;