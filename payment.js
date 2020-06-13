const Ravepay = require('flutterwave-node');

// This is the Flutterwave API Credentials:

// Public Key: FLWPUBK-b7454e2336475fcfa01d20f6343eeb41-X
// Secret Key: FLWSECK-c85851cc3732f66ab9c9c7aa96ddfe22-X
// Encryption Key: c85851cc3732b3881c69e8eb
 
// const rave = new Ravepay(PUBLICK_KEY, SECRET_KEY, false);
const rave = new Ravepay("FLWPUBK-b7454e2336475fcfa01d20f6343eeb41-X", "FLWSECK-c85851cc3732f66ab9c9c7aa96ddfe22-X", false);

 
rave.Card.charge(
    {
        "cardno": "5438898014560229",
        "cvv": "564",
        "expirymonth": "10",
        "expiryyear": "20",
        "currency": "NGN",
        "country": "NG",
        "amount": "10",
        "email": "user@gmail.com",
        "phonenumber": "0902620185",
        "firstname": "temi",
        "lastname": "desola",
        "IP": "355426087298442",
        "txRef": "MC-" + Date.now(),// your unique merchant reference
        "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
        "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
        "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
      }
).then(resp => {
    // console.log(resp.body);
 
    rave.Card.validate({
        "transaction_reference":resp.body.data.flwRef,
        "otp":12345
    }).then(response => {
        console.log(response.body.data.tx);
        
    })
    
}).catch(err => {
    console.log(err);
    
})



const Gh_mobilemoney =  async ()=>{
 
   
    try {
 
        const payload = {
            "currency": "GHS",
            "payment_type": "mobilemoneygh",
            "country": "GH",
            "amount": "50",
            "email": "user@example.com",
            "phonenumber": "054709929220",
            "network": "MTN",
            "firstname": "temi",
            "lastname": "desola",
            "voucher": "128373", // only needed for Vodafone users.
            "IP": "355426087298442",
            "txRef": "MC-" + Date.now(),
            "orderRef": "MC_" + Date.now(),
            "is_mobile_money_gh": 1,
            "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
            "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
        }
 
       const response =  await rave.MobileMoney.ghana(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 
// Gh_mobilemoney();
 


 
const callMpesa =  async ()=>{
 
    const payload = {
    "currency": "KES",
    "country": "KE",
    "amount": "100",
    "phonenumber": "0926420185",
    "email": "user@example.com",
    "firstname": "jsksk",
    "lastname": "ioeoe",
    "IP": "40.14.290",
    "narration": "funds payment",
    "txRef": "jw-222",
    "meta": [{metaname: "extra info", metavalue: "a pie"}],
    "device_fingerprint": "89191918hgdgdg99191", //(optional)
    "payment_type": "mpesa",
    "is_mpesa": "1",
  	"is_mpesa_lipa": 1
    }
    try {
       const response =  await rave.MobileMoney.mpesa(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 
// callMpesa();


const zmw_mobilemoney=  async ()=>{
 
    const payload = {
   "currency": "ZMW",
  "payment_type": "mobilemoneyzambia",
  "country": "NG",
  "amount": "50",
  "email": "user@example.com",
  "phonenumber": "054709929220",
  "network": "MTN",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),
  "orderRef": "MC_" + Date.now(),
  "is_mobile_money_ug": 1,
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"  
    }
    try {
       const response =  await rave.MobileMoney.zambia(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 
// zmw_mobilemoney();
// 



 
const Ugx_mob_money=  async ()=>{
 
    const payload = {
   "currency": "UGX",
  "payment_type": "mobilemoneyuganda",
  "country": "NG",
  "amount": "50",
  "email": "user@example.com",
  "phonenumber": "054709929220",
  "network": "UGX",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),
  "orderRef": "MC_" + Date.now(),
  "is_mobile_money_ug": 1,
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
    }
    try {
       const response =  await rave.MobileMoney.uganda(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 
// Ugx_mob_money();
 


 
const rwn_mobilemoney=  async ()=>{
 
    const payload = {
        "currency": "RWF",
        "payment_type": "mobilemoneygh",
        "country": "NG",
        "amount": "50",
        "email": "user@example.com",
        "phonenumber": "054709929220",
        "network": "RWF",
        'accountnumber': "089909qw",
        "firstname": "temi",
        "lastname": "desola",
        "IP": "355426087298442",
        "txRef": "MC-" + Date.now(),
        "orderRef": "MC_" + Date.now(),
        "is_mobile_money_gh": 1,
        "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
        "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
         }
    try {
       const response =  await rave.MobileMoney.rwanda(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 
// rwn_mobilemoney();
 
 

const franco_mobilemoney=  async ()=>{
 
    const payload = {
  "currency": "XAF",
  "amount": "50",
  "email": "user@example.com",
  "phonenumber": "054709929220",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),
  "orderRef": "MC_" + Date.now(),
  "is_mobile_money_franco": 1,
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
   }
    try {
       const response =  await rave.MobileMoney.francophone(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 
// franco_mobilemoney();
 

const callVerify =  async (ref) => {
 
    const payload = {
        txref:ref
    }
    try {
       const response =  await rave.VerifyTransaction.verify(payload, rave)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
// callVerify("rave-123456");

console.log("[done]")


const get_balance= async ()=> {
    const payload = {
            service: "rates_convert",
            service_method: "post",
            service_version: "v1",
            service_channel: "rave",
            currency:"NGN" // for single balance. For all balance don't add currency
          };
    try {
        const response = await rave.Misc.getBalance(payload, rave);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
 
// get_balance();