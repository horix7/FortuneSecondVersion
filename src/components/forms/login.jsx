import React, {Fragment} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';



let login = props => {

    return(
        <Fragment>
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
                    id: "pass",
                    type: "password",
                    label: "Password"
            
                 }}
                />

                <Button 
                 style="btn longBtn  waves-effect waves-light black"
                 text="Login"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                />

                <div className="gridTwo">
                    <button className="btn white black-text">Forgot Password</button>
                    <button className="btn white black-text">Creat An Account</button>

                </div>
            </div>
        </Fragment>
    )
}

export default login;