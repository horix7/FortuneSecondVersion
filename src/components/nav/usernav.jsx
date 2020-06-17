import React, {useState} from 'react';
import Loader from '../UI/preloader';


let userNav = props => {
    const [currencyNow, setCurrency] = useState(null)

  let changeCurrency = e => {
    setCurrency(e.target.value)
    props.refresh()
        if(e.target.value == "USD") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "USD",
            rate: 1
          }))
        }else if (e.target.value == "UGX") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "UGX",
            rate: 0.000268837
    
          }))
        }else if (e.target.value == "KES") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "KES",
            rate: 0.00939586
    
          }))
        } else if (e.target.value == "GHS") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "GHS",
            rate: 0.172936
    
          }))
        } else if (e.target.value == "ZMW") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "ZMW",
            rate: 0.0545316
    
          }))
        } else if (e.target.value == "NGN") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "NGN",
            rate: 0.00258065
    
          }))
        }  else if (e.target.value == "RWF") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "RWF",
            rate: 0.00105281
    
          }))
        } else if (e.target.value == "GBP") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "GBP",
            rate: 1.25198
    
          }))
        }  else if (e.target.value == "EUR") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "EUR",
            rate: 1.12380
    
          }))
        }
      }
  
    return (

        <div className="userNav">
            <div className="viewAuction" onClick={props.switch}>
            {!props.info.account ?  <button className="btn-floating black pulse">
             <i className="material-icons">timer</i> </button> : <button className="btn-floating black"> <i className="material-icons">account_circle</i> </button>}
                
                <span> {props.info.account ? props.info.name : "View Auction"} </span>
            </div>

            <div>
                <button  className="btn-floating black" onClick={props.refresh1}>

              {!props.info.loading ?  <i className="material-icons">sync</i> : <Loader
                 type="circle" 
                  style="preloader-wrapper small active"/>}

                </button>
            </div>

            <div>
            <select className="input-field" onChange={changeCurrency} id="currencies" required>
                    <option></option>
                    <option value="RWF">RWF</option>
                    <option value="NGN">NGN</option>
                    <option value="ZMW">ZMW</option>
                    <option value="GHS">GHS</option>
                    <option value="KES">KES</option>
                    <option value="UGX">UGX</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>


                    </select>
            </div>

            <div className="leftz">
           <button class="btn-floating btn white" onClick={props.logout}>           
                <i class="large material-icons black">power_settings_new</i>
           </button>
            </div>
        </div>
    )
}


export default userNav;