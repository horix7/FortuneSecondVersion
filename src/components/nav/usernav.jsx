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
        if(e.target.value == "$") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "$",
            curren: "USD",
            rate: 1
          }))
        }else if (e.target.value == "UGX") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "UGX",
            curren: "UGX",
            rate: 0.000268837
    
          }))
        }else if (e.target.value == "KSH") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "KSH",
            curren: "KES",
            rate: 0.00939586
    
          }))
        } else if (e.target.value == "₵") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "₵",
            curren: "GHS",
            rate: 0.172936
    
          }))
        } else if (e.target.value == "K") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "K",
            curren: "ZMW",
            rate: 0.0545316
    
          }))
        } else if (e.target.value == "₦") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "₦",
            curren: "NGN",
            rate: 0.00258065
    
          }))
        }  else if (e.target.value == "RWF") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "RWF",
            curren: "RWF",
            rate: 0.00105281
    
          }))
        } else if (e.target.value == "£") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "£",
            curren: "GBP",
            rate: 1.25198
    
          }))
        }  else if (e.target.value == "€") {
          localStorage.setItem("currency", JSON.stringify({
            currency: "€",
            curren: "EUR",
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

            

          <div className="browser-default hideSome" style={{
            position: "relative"
          }}>
            <select className="" onChange={changeCurrency} id="currencies">
                    <option value="$" data-icon={usa} selected={JSON.parse(localStorage.currency).currency == "$" ? "selected" : null}>$</option>
                    <option value="RWF" data-icon={rw} selected={JSON.parse(localStorage.currency).currency == "RWF" ? "selected" : null}>RWF</option>
                    <option value="₦" data-icon={ng} selected={JSON.parse(localStorage.currency).currency == "₦" ? "selected" : null}>₦</option>
                    <option value="K" data-icon={zm} selected={JSON.parse(localStorage.currency).currency == "K" ? "selected" : null}>K</option>
                    <option value="₵" data-icon={gh} selected={JSON.parse(localStorage.currency).currency == "₵" ? "selected" : null}>₵</option>
                    <option value="KSH" data-icon={ke} selected={JSON.parse(localStorage.currency).currency == "KSH" ? "selected" : null}>KSH</option>
                    <option value="UGX" data-icon={ug} selected={JSON.parse(localStorage.currency).currency == "UGX" ? "selected" : null}>UGX</option>
                    <option value="£" data-icon={uk} selected={JSON.parse(localStorage.currency).currency == "£" ? "selected" : null}>£</option>
                    <option value="€" data-icon={euro} selected={JSON.parse(localStorage.currency).currency == "€" ? "selected" : null}>€</option>
                    </select>
                    <p>Choose Your Currency Here</p>
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