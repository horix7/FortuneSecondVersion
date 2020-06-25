import React from 'react';
import Logo from '../../images/fortuneScution.png';
import Button from '../UI/button';
import Image from '../UI/image';


let Navigation = props => {
    return (

        <React.Fragment>
            <div className="homeNav">
          <div>
          <Button 
             clicked={props.click2} 

                 style="loginBtn2"
                 text="Join Now"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                   />

          </div>
                   <div>
                   <Image 
                    info={{
                        class: "logo", // image 
                        src: Logo

                    }}
                    

               />
                   </div>

         <div className="gridTwo2">
             <Button
             clicked={props.click2} 
                 style="loginBtn hideSmal"
                 text="Join Now"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                   />

            <Button 
             clicked={props.click1} 

                 style="loginBtn"
                 text="Login"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                   />
         </div>
            </div>
        </React.Fragment>

    )
}



export default Navigation;