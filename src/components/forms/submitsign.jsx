import React, {Component ,Fragment} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import axios from 'axios';
import Loader from '../UI/preloader'


class SubmitSign  extends Component {

   state={
      signUp: {
         firstname: null,
         secondname: null,
         email: null,
         countrycode: null,
         country: null,
         phone: null,
         age: null,
         gender: "male",
         password: null

      },
      btnLoad: false,
      submit: null,
      error: null,
      account: false,
      loginInfo: {
         email: null,
         password: null
     },
     token: null,
     requestInfo: {
        sells: null,
        address: null,
        store: null,
        account: null,
        phone: null,
        email: null
     }
    
      
   }

   
   showError = () => {
      location.href = "#err"
  }

   postSignUp = (e) => {

      e.preventDefault()
      this.setState({
         btnLoad: true
      })
      if(this.state.submit) {
         axios({
         method: 'post',
         url: localStorage.address + "/api/v1/auth/signup",
         data: this.state.signUp,
         headers: {'Content-Type': "application/json" }
         })
         .then((response) => {

            let request = {...this.state.requestInfo}
            request.account = response.data.data[0].details.username
            request.phone = response.data.data[0].details.phone
            request.email = response.data.data[0].details.email

             this.setState({
               token: response.data.data[0].token,
               details: JSON.stringify(response.data.data[0].details),
               requestInfo: {...request}

            })

            this.rqVend()


         }).catch(err => {
            this.showError()
            let info = err.response.data
            console.log(info)
            if (info.status == 400) {
               this.setState({
                  error: "Your Provided Invalid Information ",
                  mess: null,
                  btnLoad: false
               })
            } else if (info.status == 409 || info.status == 403) {
               this.setState({
                  error:  info.error || info.message,
                  btnLoad: false
               })
            }
           
         })
        
      }
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

            let request = {...this.state.requestInfo}
            request.account = response.data.data[0].details.username
            request.phone = response.data.data[0].details.phone
            request.email = response.data.data[0].details.email



            this.setState({
               token: response.data.data[0].token,
               details: JSON.stringify(response.data.data[0].details),
               requestInfo: {...request}

            })
            
             this.rqVend()


         }).catch(err => {
            this.showError()

            let info = err.response.data
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
           

            console.log(err)
         })
        
      }
   }

   rqVend  = (e) => {
 
         axios({
         method: 'post',
         url: localStorage.address + "/api/v1/reqvend",

         data: this.state.requestInfo,
         headers: {'Content-Type': "application/json" }
         })
         .then( (response) => {
            this.showError()
            
            this.setState({
               btnLoad: true,
               error: null,
               mess: "your request is sent"

            })
            
            setTimeout(() => {
               localStorage.setItem("auth", this.state.token)
               localStorage.setItem("details", this.state.details)

                  this.props.login()
            }, 1000)
            console.log(response)


         }).catch(err => {
           console.log(err)
           
         })
        
   }

   handleInputChange = (e) => {
      this.state.signUp[e.target.id] = e.target.value
      this.changeSubmitAcc()
      console.log(this.state)

     
   }

   handleInputChangeR = (e) => {
      this.state.loginInfo[e.target.id] = e.target.value
      this.changeSubmitAcc2()
      console.log(this.state)


     
   }

   handleInputChangeRl = (e) => {
      this.state.requestInfo[e.target.id] = e.target.value
      this.changeSubmitAcc2()
      this.changeSubmitAcc()
      console.log(this.state)


     
   }

   
   changeSubmitAcc = () => {
      let checkAll =  Object.values(this.state.signUp).some(n => n == null) && Object.values(this.state.requestInfo).some(n => n == null)
      console.log(checkAll)
      if(!checkAll) {
            this.setState({
               submit: true
            })
      } else {
         this.setState({
            submit: false 
         })
      }
   }

   changeSubmitAcc2 = () => {
      let checkAll = Object.values(this.state.loginInfo).some(n => n == null) && Object.values(this.state.requestInfo).some(n => n == null)
      console.log(checkAll)

      if(!checkAll) {
            this.setState({
               submit: true
            })
      } else {
         this.setState({
            submit: false 
         })
      }
   }
    componentDidMount() {
     
    }

    changeGender = (e) => {
      this.state.signUp.gender = e.target.value
      this.changeSubmitAcc()
   }
   changeCode  = (e) => {
      this.state.signUp.countrycode = e.target.value
      this.changeSubmitAcc()

   }
   changeCountry  = (e) => {
      this.state.signUp.country = e.target.value
      this.changeSubmitAcc()
   }
  


    changeForm = () => {
     
      var elems = document.querySelectorAll('input');
      var elems2 = document.querySelectorAll('select');

      elems.forEach(n => {
         n.value = ""
      })

      elems2.forEach(n => {
         n.value = ""
      })
      let newState = {...this.state}
        this.setState({
            account: !newState.account
        })
    }

   render() {
     

      let excute = null 
      if(!this.state.account) {
         excute = this.postSignUp
      }else {
         excute = this.postSignIn

      }


      let newUser = (
         <div>
         <Input 
              info={{
                 style: "input-field",
                 id: "firstname",
                 type: "text",
                 label: "Your Names"
         
              }}
              changed={this.handleInputChange}
              />

             <Input 
              info={{
                 style: "input-field",
                 id: "secondname",
                 type: "text",
                 label: "User Name",
                 icon: "account_circle"
         
              }}
              changed={this.handleInputChange}

              />

              <div className="gridTwo">
             

             <div  className="pushUp">
             <label>Choose Your Gender</label>
                 <select className="browser-default" onChange={this.changeGender} required >
                 <option value="1">Male</option>
                 <option value="2">Female</option>
                 <option value="3">Other</option>
                 </select>
             </div>

             <Input 
              info={{
                 style: "input-field",
                 id: "age",
                 type: "number",
                 label: "Your Current Age"
         
              }}
              changed={this.handleInputChange}

              />
              </div>
              <div className="gridTwo">
                 <div className="pushUp">
                 <label>select Country Code</label>

                 <select className="browser-default"   name="countrycode" id="" onChange={this.changeCode} required>
   <option ></option>
   <option countrycode="DZ" value="213">Algeria (+213)</option>
   <option countrycode="AD" value="376">Andorra (+376)</option>
   <option countrycode="AO" value="244">Angola (+244)</option>
   <option countrycode="AI" value="1264">Anguilla (+1264)</option>
   <option countrycode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
   <option countrycode="AR" value="54">Argentina (+54)</option>
   <option countrycode="AM" value="374">Armenia (+374)</option>
   <option countrycode="AW" value="297">Aruba (+297)</option>
   <option countrycode="AU" value="61">Australia (+61)</option>
   <option countrycode="AT" value="43">Austria (+43)</option>
   <option countrycode="AZ" value="994">Azerbaijan (+994)</option>
   <option countrycode="BS" value="1242">Bahamas (+1242)</option>
   <option countrycode="BH" value="973">Bahrain (+973)</option>
   <option countrycode="BD" value="880">Bangladesh (+880)</option>
   <option countrycode="BB" value="1246">Barbados (+1246)</option>
   <option countrycode="BY" value="375">Belarus (+375)</option>
   <option countrycode="BE" value="32">Belgium (+32)</option>
   <option countrycode="BZ" value="501">Belize (+501)</option>
   <option countrycode="BJ" value="229">Benin (+229)</option>
   <option countrycode="BM" value="1441">Bermuda (+1441)</option>
   <option countrycode="BT" value="975">Bhutan (+975)</option>
   <option countrycode="BO" value="591">Bolivia (+591)</option>
   <option countrycode="BA" value="387">Bosnia Herzegovina (+387)</option>
   <option countrycode="BW" value="267">Botswana (+267)</option>
   <option countrycode="BR" value="55">Brazil (+55)</option>
   <option countrycode="BN" value="673">Brunei (+673)</option>
   <option countrycode="BG" value="359">Bulgaria (+359)</option>
   <option countrycode="BF" value="226">Burkina Faso (+226)</option>
   <option countrycode="BI" value="257">Burundi (+257)</option>
   <option countrycode="KH" value="855">Cambodia (+855)</option>
   <option countrycode="CM" value="237">Cameroon (+237)</option>
   <option countrycode="CA" value="1">Canada (+1)</option>
   <option countrycode="CV" value="238">Cape Verde Islands (+238)</option>
   <option countrycode="KY" value="1345">Cayman Islands (+1345)</option>
   <option countrycode="CF" value="236">Central African Republic (+236)</option>
   <option countrycode="CL" value="56">Chile (+56)</option>
   <option countrycode="CN" value="86">China (+86)</option>
   <option countrycode="CO" value="57">Colombia (+57)</option>
   <option countrycode="KM" value="269">Comoros (+269)</option>
   <option countrycode="CG" value="242">Congo (+242)</option>
   <option countrycode="CK" value="682">Cook Islands (+682)</option>
   <option countrycode="CR" value="506">Costa Rica (+506)</option>
   <option countrycode="HR" value="385">Croatia (+385)</option>
   <option countrycode="CU" value="53">Cuba (+53)</option>
   <option countrycode="CY" value="90392">Cyprus North (+90392)</option>
   <option countrycode="CY" value="357">Cyprus South (+357)</option>
   <option countrycode="CZ" value="42">Czech Republic (+42)</option>
   <option countrycode="DK" value="45">Denmark (+45)</option>
   <option countrycode="DJ" value="253">Djibouti (+253)</option>
   <option countrycode="DM" value="1809">Dominica (+1809)</option>
   <option countrycode="DO" value="1809">Dominican Republic (+1809)</option>
   <option countrycode="EC" value="593">Ecuador (+593)</option>
   <option countrycode="EG" value="20">Egypt (+20)</option>
   <option countrycode="SV" value="503">El Salvador (+503)</option>
   <option countrycode="GQ" value="240">Equatorial Guinea (+240)</option>
   <option countrycode="ER" value="291">Eritrea (+291)</option>
   <option countrycode="EE" value="372">Estonia (+372)</option>
   <option countrycode="ET" value="251">Ethiopia (+251)</option>
   <option countrycode="FK" value="500">Falkland Islands (+500)</option>
   <option countrycode="FO" value="298">Faroe Islands (+298)</option>
   <option countrycode="FJ" value="679">Fiji (+679)</option>
   <option countrycode="FI" value="358">Finland (+358)</option>
   <option countrycode="FR" value="33">France (+33)</option>
   <option countrycode="GF" value="594">French Guiana (+594)</option>
   <option countrycode="PF" value="689">French Polynesia (+689)</option>
   <option countrycode="GA" value="241">Gabon (+241)</option>
   <option countrycode="GM" value="220">Gambia (+220)</option>
   <option countrycode="GE" value="7880">Georgia (+7880)</option>
   <option countrycode="DE" value="49">Germany (+49)</option>
   <option countrycode="GH" value="233">Ghana (+233)</option>
   <option countrycode="GI" value="350">Gibraltar (+350)</option>
   <option countrycode="GR" value="30">Greece (+30)</option>
   <option countrycode="GL" value="299">Greenland (+299)</option>
   <option countrycode="GD" value="1473">Grenada (+1473)</option>
   <option countrycode="GP" value="590">Guadeloupe (+590)</option>
   <option countrycode="GU" value="671">Guam (+671)</option>
   <option countrycode="GT" value="502">Guatemala (+502)</option>
   <option countrycode="GN" value="224">Guinea (+224)</option>
   <option countrycode="GW" value="245">Guinea - Bissau (+245)</option>
   <option countrycode="GY" value="592">Guyana (+592)</option>
   <option countrycode="HT" value="509">Haiti (+509)</option>
   <option countrycode="HN" value="504">Honduras (+504)</option>
   <option countrycode="HK" value="852">Hong Kong (+852)</option>
   <option countrycode="HU" value="36">Hungary (+36)</option>
   <option countrycode="IS" value="354">Iceland (+354)</option>
   <option countrycode="IN" value="91">India (+91)</option>
   <option countrycode="ID" value="62">Indonesia (+62)</option>
   <option countrycode="IR" value="98">Iran (+98)</option>
   <option countrycode="IQ" value="964">Iraq (+964)</option>
   <option countrycode="IE" value="353">Ireland (+353)</option>
   <option countrycode="IL" value="972">Israel (+972)</option>
   <option countrycode="IT" value="39">Italy (+39)</option>
   <option countrycode="JM" value="1876">Jamaica (+1876)</option>
   <option countrycode="JP" value="81">Japan (+81)</option>
   <option countrycode="JO" value="962">Jordan (+962)</option>
   <option countrycode="KZ" value="7">Kazakhstan (+7)</option>
   <option countrycode="KE" value="254">Kenya (+254)</option>
   <option countrycode="KI" value="686">Kiribati (+686)</option>
   <option countrycode="KP" value="850">Korea North (+850)</option>
   <option countrycode="KR" value="82">Korea South (+82)</option>
   <option countrycode="KW" value="965">Kuwait (+965)</option>
   <option countrycode="KG" value="996">Kyrgyzstan (+996)</option>
   <option countrycode="LA" value="856">Laos (+856)</option>
   <option countrycode="LV" value="371">Latvia (+371)</option>
   <option countrycode="LB" value="961">Lebanon (+961)</option>
   <option countrycode="LS" value="266">Lesotho (+266)</option>
   <option countrycode="LR" value="231">Liberia (+231)</option>
   <option countrycode="LY" value="218">Libya (+218)</option>
   <option countrycode="LI" value="417">Liechtenstein (+417)</option>
   <option countrycode="LT" value="370">Lithuania (+370)</option>
   <option countrycode="LU" value="352">Luxembourg (+352)</option>
   <option countrycode="MO" value="853">Macao (+853)</option>
   <option countrycode="MK" value="389">Macedonia (+389)</option>
   <option countrycode="MG" value="261">Madagascar (+261)</option>
   <option countrycode="MW" value="265">Malawi (+265)</option>
   <option countrycode="MY" value="60">Malaysia (+60)</option>
   <option countrycode="MV" value="960">Maldives (+960)</option>
   <option countrycode="ML" value="223">Mali (+223)</option>
   <option countrycode="MT" value="356">Malta (+356)</option>
   <option countrycode="MH" value="692">Marshall Islands (+692)</option>
   <option countrycode="MQ" value="596">Martinique (+596)</option>
   <option countrycode="MR" value="222">Mauritania (+222)</option>
   <option countrycode="YT" value="269">Mayotte (+269)</option>
   <option countrycode="MX" value="52">Mexico (+52)</option>
   <option countrycode="FM" value="691">Micronesia (+691)</option>
   <option countrycode="MD" value="373">Moldova (+373)</option>
   <option countrycode="MC" value="377">Monaco (+377)</option>
   <option countrycode="MN" value="976">Mongolia (+976)</option>
   <option countrycode="MS" value="1664">Montserrat (+1664)</option>
   <option countrycode="MA" value="212">Morocco (+212)</option>
   <option countrycode="MZ" value="258">Mozambique (+258)</option>
   <option countrycode="MN" value="95">Myanmar (+95)</option>
   <option countrycode="NA" value="264">Namibia (+264)</option>
   <option countrycode="NR" value="674">Nauru (+674)</option>
   <option countrycode="NP" value="977">Nepal (+977)</option>
   <option countrycode="NL" value="31">Netherlands (+31)</option>
   <option countrycode="NC" value="687">New Caledonia (+687)</option>
   <option countrycode="NZ" value="64">New Zealand (+64)</option>
   <option countrycode="NI" value="505">Nicaragua (+505)</option>
   <option countrycode="NE" value="227">Niger (+227)</option>
   <option countrycode="NG" value="234">Nigeria (+234)</option>
   <option countrycode="NU" value="683">Niue (+683)</option>
   <option countrycode="NF" value="672">Norfolk Islands (+672)</option>
   <option countrycode="NP" value="670">Northern Marianas (+670)</option>
   <option countrycode="NO" value="47">Norway (+47)</option>
   <option countrycode="OM" value="968">Oman (+968)</option>
   <option countrycode="PW" value="680">Palau (+680)</option>
   <option countrycode="PA" value="507">Panama (+507)</option>
   <option countrycode="PG" value="675">Papua New Guinea (+675)</option>
   <option countrycode="PY" value="595">Paraguay (+595)</option>
   <option countrycode="PE" value="51">Peru (+51)</option>
   <option countrycode="PH" value="63">Philippines (+63)</option>
   <option countrycode="PL" value="48">Poland (+48)</option>
   <option countrycode="PT" value="351">Portugal (+351)</option>
   <option countrycode="PR" value="1787">Puerto Rico (+1787)</option>
   <option countrycode="QA" value="974">Qatar (+974)</option>
   <option countrycode="RE" value="262">Reunion (+262)</option>
   <option countrycode="RO" value="40">Romania (+40)</option>
   <option countrycode="RU" value="7">Russia (+7)</option>
   <option countrycode="RW" value="250">Rwanda (+250)</option>
   <option countrycode="SM" value="378">San Marino (+378)</option>
   <option countrycode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
   <option countrycode="SA" value="966">Saudi Arabia (+966)</option>
   <option countrycode="SN" value="221">Senegal (+221)</option>
   <option countrycode="CS" value="381">Serbia (+381)</option>
   <option countrycode="SC" value="248">Seychelles (+248)</option>
   <option countrycode="SL" value="232">Sierra Leone (+232)</option>
   <option countrycode="SG" value="65">Singapore (+65)</option>
   <option countrycode="SK" value="421">Slovak Republic (+421)</option>
   <option countrycode="SI" value="386">Slovenia (+386)</option>
   <option countrycode="SB" value="677">Solomon Islands (+677)</option>
   <option countrycode="SO" value="252">Somalia (+252)</option>
   <option countrycode="ZA" value="27">South Africa (+27)</option>
   <option countrycode="ES" value="34">Spain (+34)</option>
   <option countrycode="LK" value="94">Sri Lanka (+94)</option>
   <option countrycode="SH" value="290">St. Helena (+290)</option>
   <option countrycode="KN" value="1869">St. Kitts (+1869)</option>
   <option countrycode="SC" value="1758">St. Lucia (+1758)</option>
   <option countrycode="SD" value="249">Sudan (+249)</option>
   <option countrycode="SR" value="597">Suriname (+597)</option>
   <option countrycode="SZ" value="268">Swaziland (+268)</option>
   <option countrycode="SE" value="46">Sweden (+46)</option>
   <option countrycode="CH" value="41">Switzerland (+41)</option>
   <option countrycode="SI" value="963">Syria (+963)</option>
   <option countrycode="TW" value="886">Taiwan (+886)</option>
   <option countrycode="TJ" value="7">Tajikstan (+7)</option>
   <option countrycode="TH" value="66">Thailand (+66)</option>
   <option countrycode="TG" value="228">Togo (+228)</option>
   <option countrycode="TO" value="676">Tonga (+676)</option>
   <option countrycode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
   <option countrycode="TN" value="216">Tunisia (+216)</option>
   <option countrycode="TR" value="90">Turkey (+90)</option>
   <option countrycode="TM" value="7">Turkmenistan (+7)</option>
   <option countrycode="TM" value="993">Turkmenistan (+993)</option>
   <option countrycode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
   <option countrycode="TV" value="688">Tuvalu (+688)</option>
   <option countrycode="UG" value="256">Uganda (+256)</option>
   <option countrycode="GB" value="44">UK (+44)</option>
   <option countrycode="UA" value="380">Ukraine (+380)</option>
   <option countrycode="AE" value="971">United Arab Emirates (+971)</option>
   <option countrycode="UY" value="598">Uruguay (+598)</option>
   <option countrycode="US" value="1">USA (+1)</option>
   <option countrycode="UZ" value="7">Uzbekistan (+7)</option>
   <option countrycode="VU" value="678">Vanuatu (+678)</option>
   <option countrycode="VA" value="379">Vatican City (+379)</option>
   <option countrycode="VE" value="58">Venezuela (+58)</option>
   <option countrycode="VN" value="84">Vietnam (+84)</option>
   <option countrycode="VG" value="84">Virgin Islands - British (+1284)</option>
   <option countrycode="VI" value="84">Virgin Islands - US (+1340)</option>
   <option countrycode="WF" value="681">Wallis &amp; Futuna (+681)</option>
   <option countrycode="YE" value="969">Yemen (North)(+969)</option>
   <option countrycode="YE" value="967">Yemen (South)(+967)</option>
   <option countrycode="ZM" value="260">Zambia (+260)</option>
   <option countrycode="ZW" value="263">Zimbabwe (+263)</option>
</select>
                 </div>
                <div className="spaceIn">
              <Input 
              info={{
                 style: "input-field",
                 id: "phone",
                 type: "number",
                 label: "Phone Number",
         
              }}
              changed={this.handleInputChange}

             />

              </div>
                 </div>
             
         <Input 
              info={{
                 style: "input-field",
                 id: "email",
                 type: "email",
                 label: "Your Email",
                 icon: "email"

         
              }}
              changed={this.handleInputChange}

             />

         <div>
        <label htmlFor="country">Choose Your Country</label>

         <select className="browser-default" required  id="country" name="country" onChange={this.changeCountry}>
             <option ></option>
             <option value="Afghanistan">Afghanistan</option>
             <option value="Åland Islands">Åland Islands</option>
             <option value="Albania">Albania</option>
             <option value="Algeria">Algeria</option>
             <option value="American Samoa">American Samoa</option>
             <option value="Andorra">Andorra</option>
             <option value="Angola">Angola</option>
             <option value="Anguilla">Anguilla</option>
             <option value="Antarctica">Antarctica</option>
             <option value="Antigua and Barbuda">Antigua and Barbuda</option>
             <option value="Argentina">Argentina</option>
             <option value="Armenia">Armenia</option>
             <option value="Aruba">Aruba</option>
             <option value="Australia">Australia</option>
             <option value="Austria">Austria</option>
             <option value="Azerbaijan">Azerbaijan</option>
             <option value="Bahamas">Bahamas</option>
             <option value="Bahrain">Bahrain</option>
             <option value="Bangladesh">Bangladesh</option>
             <option value="Barbados">Barbados</option>
             <option value="Belarus">Belarus</option>
             <option value="Belgium">Belgium</option>
             <option value="Belize">Belize</option>
             <option value="Benin">Benin</option>
             <option value="Bermuda">Bermuda</option>
             <option value="Bhutan">Bhutan</option>
             <option value="Bolivia">Bolivia</option>
             <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
             <option value="Botswana">Botswana</option>
             <option value="Bouvet Island">Bouvet Island</option>
             <option value="Brazil">Brazil</option>
             <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
             <option value="Brunei Darussalam">Brunei Darussalam</option>
             <option value="Bulgaria">Bulgaria</option>
             <option value="Burkina Faso">Burkina Faso</option>
             <option value="Burundi">Burundi</option>
             <option value="Cambodia">Cambodia</option>
             <option value="Cameroon">Cameroon</option>
             <option value="Canada">Canada</option>
             <option value="Cape Verde">Cape Verde</option>
             <option value="Cayman Islands">Cayman Islands</option>
             <option value="Central African Republic">Central African Republic</option>
             <option value="Chad">Chad</option>
             <option value="Chile">Chile</option>
             <option value="China">China</option>
             <option value="Christmas Island">Christmas Island</option>
             <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
             <option value="Colombia">Colombia</option>
             <option value="Comoros">Comoros</option>
             <option value="Congo">Congo</option>
             <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
             <option value="Cook Islands">Cook Islands</option>
             <option value="Costa Rica">Costa Rica</option>
             <option value="Cote D'ivoire">Cote D'ivoire</option>
             <option value="Croatia">Croatia</option>
             <option value="Cuba">Cuba</option>
             <option value="Cyprus">Cyprus</option>
             <option value="Czech Republic">Czech Republic</option>
             <option value="Denmark">Denmark</option>
             <option value="Djibouti">Djibouti</option>
             <option value="Dominica">Dominica</option>
             <option value="Dominican Republic">Dominican Republic</option>
             <option value="Ecuador">Ecuador</option>
             <option value="Egypt">Egypt</option>
             <option value="El Salvador">El Salvador</option>
             <option value="Equatorial Guinea">Equatorial Guinea</option>
             <option value="Eritrea">Eritrea</option>
             <option value="Estonia">Estonia</option>
             <option value="Ethiopia">Ethiopia</option>
             <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
             <option value="Faroe Islands">Faroe Islands</option>
             <option value="Fiji">Fiji</option>
             <option value="Finland">Finland</option>
             <option value="France">France</option>
             <option value="French Guiana">French Guiana</option>
             <option value="French Polynesia">French Polynesia</option>
             <option value="French Southern Territories">French Southern Territories</option>
             <option value="Gabon">Gabon</option>
             <option value="Gambia">Gambia</option>
             <option value="Georgia">Georgia</option>
             <option value="Germany">Germany</option>
             <option value="Ghana">Ghana</option>
             <option value="Gibraltar">Gibraltar</option>
             <option value="Greece">Greece</option>
             <option value="Greenland">Greenland</option>
             <option value="Grenada">Grenada</option>
             <option value="Guadeloupe">Guadeloupe</option>
             <option value="Guam">Guam</option>
             <option value="Guatemala">Guatemala</option>
             <option value="Guernsey">Guernsey</option>
             <option value="Guinea">Guinea</option>
             <option value="Guinea-bissau">Guinea-bissau</option>
             <option value="Guyana">Guyana</option>
             <option value="Haiti">Haiti</option>
             <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
             <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
             <option value="Honduras">Honduras</option>
             <option value="Hong Kong">Hong Kong</option>
             <option value="Hungary">Hungary</option>
             <option value="Iceland">Iceland</option>
             <option value="India">India</option>
             <option value="Indonesia">Indonesia</option>
             <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
             <option value="Iraq">Iraq</option>
             <option value="Ireland">Ireland</option>
             <option value="Isle of Man">Isle of Man</option>
             <option value="Israel">Israel</option>
             <option value="Italy">Italy</option>
             <option value="Jamaica">Jamaica</option>
             <option value="Japan">Japan</option>
             <option value="Jersey">Jersey</option>
             <option value="Jordan">Jordan</option>
             <option value="Kazakhstan">Kazakhstan</option>
             <option value="Kenya">Kenya</option>
             <option value="Kiribati">Kiribati</option>
             <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
             <option value="Korea, Republic of">Korea, Republic of</option>
             <option value="Kuwait">Kuwait</option>
             <option value="Kyrgyzstan">Kyrgyzstan</option>
             <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
             <option value="Latvia">Latvia</option>
             <option value="Lebanon">Lebanon</option>
             <option value="Lesotho">Lesotho</option>
             <option value="Liberia">Liberia</option>
             <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
             <option value="Liechtenstein">Liechtenstein</option>
             <option value="Lithuania">Lithuania</option>
             <option value="Luxembourg">Luxembourg</option>
             <option value="Macao">Macao</option>
             <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
             <option value="Madagascar">Madagascar</option>
             <option value="Malawi">Malawi</option>
             <option value="Malaysia">Malaysia</option>
             <option value="Maldives">Maldives</option>
             <option value="Mali">Mali</option>
             <option value="Malta">Malta</option>
             <option value="Marshall Islands">Marshall Islands</option>
             <option value="Martinique">Martinique</option>
             <option value="Mauritania">Mauritania</option>
             <option value="Mauritius">Mauritius</option>
             <option value="Mayotte">Mayotte</option>
             <option value="Mexico">Mexico</option>
             <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
             <option value="Moldova, Republic of">Moldova, Republic of</option>
             <option value="Monaco">Monaco</option>
             <option value="Mongolia">Mongolia</option>
             <option value="Montenegro">Montenegro</option>
             <option value="Montserrat">Montserrat</option>
             <option value="Morocco">Morocco</option>
             <option value="Mozambique">Mozambique</option>
             <option value="Myanmar">Myanmar</option>
             <option value="Namibia">Namibia</option>
             <option value="Nauru">Nauru</option>
             <option value="Nepal">Nepal</option>
             <option value="Netherlands">Netherlands</option>
             <option value="Netherlands Antilles">Netherlands Antilles</option>
             <option value="New Caledonia">New Caledonia</option>
             <option value="New Zealand">New Zealand</option>
             <option value="Nicaragua">Nicaragua</option>
             <option value="Niger">Niger</option>
             <option value="Nigeria">Nigeria</option>
             <option value="Niue">Niue</option>
             <option value="Norfolk Island">Norfolk Island</option>
             <option value="Northern Mariana Islands">Northern Mariana Islands</option>
             <option value="Norway">Norway</option>
             <option value="Oman">Oman</option>
             <option value="Pakistan">Pakistan</option>
             <option value="Palau">Palau</option>
             <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
             <option value="Panama">Panama</option>
             <option value="Papua New Guinea">Papua New Guinea</option>
             <option value="Paraguay">Paraguay</option>
             <option value="Peru">Peru</option>
             <option value="Philippines">Philippines</option>
             <option value="Pitcairn">Pitcairn</option>
             <option value="Poland">Poland</option>
             <option value="Portugal">Portugal</option>
             <option value="Puerto Rico">Puerto Rico</option>
             <option value="Qatar">Qatar</option>
             <option value="Reunion">Reunion</option>
             <option value="Romania">Romania</option>
             <option value="Russian Federation">Russian Federation</option>
             <option value="Rwanda">Rwanda</option>
             <option value="Saint Helena">Saint Helena</option>
             <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
             <option value="Saint Lucia">Saint Lucia</option>
             <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
             <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
             <option value="Samoa">Samoa</option>
             <option value="San Marino">San Marino</option>
             <option value="Sao Tome and Principe">Sao Tome and Principe</option>
             <option value="Saudi Arabia">Saudi Arabia</option>
             <option value="Senegal">Senegal</option>
             <option value="Serbia">Serbia</option>
             <option value="Seychelles">Seychelles</option>
             <option value="Sierra Leone">Sierra Leone</option>
             <option value="Singapore">Singapore</option>
             <option value="Slovakia">Slovakia</option>
             <option value="Slovenia">Slovenia</option>
             <option value="Solomon Islands">Solomon Islands</option>
             <option value="Somalia">Somalia</option>
             <option value="South Africa">South Africa</option>
             <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
             <option value="Spain">Spain</option>
             <option value="Sri Lanka">Sri Lanka</option>
             <option value="Sudan">Sudan</option>
             <option value="Suriname">Suriname</option>
             <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
             <option value="Swaziland">Swaziland</option>
             <option value="Sweden">Sweden</option>
             <option value="Switzerland">Switzerland</option>
             <option value="Syrian Arab Republic">Syrian Arab Republic</option>
             <option value="Taiwan, Province of China">Taiwan, Province of China</option>
             <option value="Tajikistan">Tajikistan</option>
             <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
             <option value="Thailand">Thailand</option>
             <option value="Timor-leste">Timor-leste</option>
             <option value="Togo">Togo</option>
             <option value="Tokelau">Tokelau</option>
             <option value="Tonga">Tonga</option>
             <option value="Trinidad and Tobago">Trinidad and Tobago</option>
             <option value="Tunisia">Tunisia</option>
             <option value="Turkey">Turkey</option>
             <option value="Turkmenistan">Turkmenistan</option>
             <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
             <option value="Tuvalu">Tuvalu</option>
             <option value="Uganda">Uganda</option>
             <option value="Ukraine">Ukraine</option>
             <option value="United Arab Emirates">United Arab Emirates</option>
             <option value="United Kingdom">United Kingdom</option>
             <option value="United States">United States</option>
             <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
             <option value="Uruguay">Uruguay</option>
             <option value="Uzbekistan">Uzbekistan</option>
             <option value="Vanuatu">Vanuatu</option>
             <option value="Venezuela">Venezuela</option>
             <option value="Viet Nam">Viet Nam</option>
             <option value="Virgin Islands, British">Virgin Islands, British</option>
             <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
             <option value="Wallis and Futuna">Wallis and Futuna</option>
             <option value="Western Sahara">Western Sahara</option>
             <option value="Yemen">Yemen</option>
             <option value="Zambia">Zambia</option>
             <option value="Zimbabwe">Zimbabwe</option>
         </select>
         
        </div>
             
         <Input 
              info={{
                 style: "input-field",
                 id: "sells",
                 type: "text",
                 label: "What Do You Sell",

         
              }}
              changed={this.handleInputChangeRl}

             />

         <Input 
              info={{
                 style: "input-field",
                 id: "address",
                 type: "text",
                 label: "Store Address",
                 icon:"location_on"

         
              }}
              changed={this.handleInputChangeRl}


             />

              <Input 
              info={{
                 style: "input-field",
                 id: "store",
                 type: "text",
                 label: "Store Name",
                 icon: "store"

         
              }}
              changed={this.handleInputChangeRl}


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

         <p className="">By Signing Up You Agree To Our Terms And Conditions </p>
              <br/>

       {this.state.btnLoad ? <Loader />: <div>
        {!this.state.submit ? <Button 
              style="btn  waves-effect waves-light black"
              text="Request Now"
                info={{
                  type: "submit",
                  name: "action",
                 
                }}
             /> :  <Button 
                  style="btn  waves-effect waves-light black"
                  text="Request Now"
                  info={{
                  type: "submit",
                  name: "action",
                  
                  }}
                  clicked={excute}
            />}
        </div>}
            
         </div>

       
      )

      let RegistedUser = (
         <div>
         <Input 
            info={{
               style: "input-field",
               id: "email",
               type: "text",
               label: "User Name"
       
            }}
            changed={this.handleInputChangeR}

            />
                        <Input 
            info={{
               style: "input-field",
               id: "sells",
               type: "text",
               label: "What Do You Sell",

       
            }}
            changed={this.handleInputChangeRl}

           />

       <Input 
            info={{
               style: "input-field",
               id: "address",
               type: "text",
               label: "Store Address",
               icon:"location_on"

       
            }}
            changed={this.handleInputChangeRl}

           />

            <Input 
            info={{
               style: "input-field",
               id: "store",
               type: "text",
               label: "Store Name",
               icon: "store"

       
            }}
            changed={this.handleInputChangeRl}

           />
           <Input 
            info={{
               style: "input-field",
               id: "password",
               type: "password",
               label: "Password"
       
            }}
            changed={this.handleInputChangeR}

           />
            {this.state.btnLoad ? <Loader />: <div>
      {!this.state.submit ? <Button 
            style="btn  waves-effect waves-light black"
            text="Request Now"
              info={{
                type: "submit",
                name: "action",
               
              }}
           /> :  <Button 
                style="btn  waves-effect waves-light black"
                text="Request Now"
                info={{
                type: "submit",
                name: "action",
                
                }}
                clicked={excute}
          />}
      </div>}
   </div>
      )
      return(
        <Fragment>

            {this.state.error ? <div id="err" className="errorz">{this.state.error}</div> : null}
             {this.state.mess ? <div id="err" className="successz">{this.state.mess}</div> : null}

            <div className="gridTwo longz">

                <div className="btn white black-text" onClick={this.changeForm}>
                   {!this.state.account ? <i className="material-icons left ">radio_button_checked</i> : <i className="material-icons left">radio_button_unchecked</i> }
                    New User 
                </div>

                <div className="btn white black-text" onClick={this.changeForm}>
                   {this.state.account ? <i className="material-icons left">radio_button_checked</i> : <i className="material-icons left">radio_button_unchecked</i> }
                    registered
                </div>

            </div>
           {this.state.account ? 
           RegistedUser 
        : 
        newUser
        }

      

        </Fragment>
    )
   }
}

export default SubmitSign;