import React, {useState} from 'react';
import Loader from '../UI/preloader';
import rw from '../../images/rw.png'
import gh from '../../images/ghana.png'
import euro from '../../images/euro.png'
import ke from '../../images/kenya.png'
import uk from '../../images/uk.png'
import usa from '../../images/usa.png'
import ug from '../../images/ug.png'
import zm from '../../images/zambia.png'
import ng from '../../images/nigeria.png'






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
             <i className="material-icons small">timer</i> </button> : <button className="btn-floating black"> <i className="material-icons small">account_circle</i> </button>}
                
                <span> {props.info.account ? props.info.name : "View Auction"} </span>
            </div>

            <div>
                <button  className="btn-floating black" onClick={props.refresh1}>

              {!props.info.loading ?  <i className="material-icons">sync</i> : <Loader
                 type="circle" 
                  style="preloader-wrapper small active"/>}

                </button>
            </div>

          <div className="input-field col s12 m6">
            <select className="icons" onChange={changeCurrency} id="currencies" required>
                    <option value="USD" data-icon={usa} selected={JSON.parse(localStorage.currency).currency == "USD" ? "selected" : null}>USD</option>
                    <option value="RWF" data-icon={rw} selected={JSON.parse(localStorage.currency).currency == "RWF" ? "selected" : null}>RWF</option>
                    <option value="NGN" data-icon={ng} selected={JSON.parse(localStorage.currency).currency == "NGN" ? "selected" : null}>NGN</option>
                    <option value="ZMW" data-icon={zm} selected={JSON.parse(localStorage.currency).currency == "ZMW" ? "selected" : null}>ZMW</option>
                    <option value="GHS" data-icon={gh} selected={JSON.parse(localStorage.currency).currency == "GHS" ? "selected" : null}>GHS</option>
                    <option value="KES" data-icon={ke} selected={JSON.parse(localStorage.currency).currency == "KES" ? "selected" : null}>KES</option>
                    <option value="UGX" data-icon={ug} selected={JSON.parse(localStorage.currency).currency == "UGX" ? "selected" : null}>UGX</option>
                    <option value="GBP" data-icon={uk} selected={JSON.parse(localStorage.currency).currency == "GBP" ? "selected" : null}>GBP</option>
                    <option value="EUR" data-icon={euro} selected={JSON.parse(localStorage.currency).currency == "EUR" ? "selected" : null}>EUR</option>
                    </select>

            </div>

            <div className="leftz">
           <button className="btn-floating btn white" onClick={props.logout}>           
                <i className="large material-icons black">power_settings_new</i>
           </button>
            </div>
        </div>
    )
}


export default userNav;