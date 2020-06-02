import React from 'react';
import Loader from '../UI/preloader';


let userNav = props => {

    return (

        <div className="userNav">
            <div className="viewAuction" onClick={props.switch}>
            {!props.info.account ?  <button className="btn-floating black pulse">
             <i className="material-icons">timer</i> </button> : <button className="btn-floating black"> <i className="material-icons">account_circle</i> </button>}
                
                <span> {props.info.account ? props.info.name : "View Auction"} </span>
            </div>

            <div>
                <button  className="btn-floating black" onClick={props.refresh}>

              {!props.info.loading ?  <i className="material-icons">sync</i> : <Loader
                 type="circle" 
                  style="preloader-wrapper small active"/>}

                </button>
            </div>

            <div className="leftz">
           <button className="logout">
                logout
           </button>
            </div>
        </div>
    )
}


export default userNav;