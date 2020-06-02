import React, {Fragment} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';



let signUp = props => {

    const M = window.M

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
      });


    return(
        <Fragment>
            <div>
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

                <div className="input-field padds">
                    <select>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                    </select>
                    <label>Choose Your Gender</label>
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
                    id: "pass",
                    type: "password",
                    label: "Password"
            
                 }}
                />

            <p className="">By Signing Up You Agree To Our Terms And Conditions </p>
                 <br/>

                <Button 
                 style="btn  waves-effect waves-light black"
                 text="Sign Up"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                />

                <div className="gridTwo">
                    <div></div>
                    <button className="btn-flat">Already Have an account </button>

                </div>
            </div>
        </Fragment>
    )
}

export default signUp;