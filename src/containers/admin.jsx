
import React, {Component, Fragment} from 'react';
import logo from '../images/fortuneScution.png';
import axios from 'axios';
import Loader from '../components/UI/preloader';
import Tables from '../components/UI/tables';
import CreatePro from '../components/forms/createpro'
import CreateWin from '../components/forms/createwinn'
import Counter from '../components/holders/counter'

import Form from '../containers/formHolder'

class Admin extends Component {
    state={

    }


    componentWillMount() {
       
       this.runAllFunc()
    }

    runAllFunc = () => {
       if(!this.loadPage) {
        this.getProData()
        this.getBidData()
        this.getVendReq()
        this.vendorProReq()
        this.getWinnerData()
       }
    }
    getWinnerData = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/chosenone/" ,
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {
                    console.log(response)
                } else {

                    this.setState({
                        winners: response.data.data,
                        wins: true 
                   })
                }
                 
            }).catch(err => console.error(err))
    }
    
    getBidData = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/bidss/" ,
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {

                } else {
                 this.setState({
                    bidata: response.data.data,
                    bids: true 
               })
            }

            }).catch(err => console.error(err))
           
    }




    vendorProReq = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/vrpro/" ,
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                console.log(response)
                if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {
                    console.log(response)
                } else {
                    console.log(response)
                    console.log("response")

                 this.setState({
                    requestedPro: response.data.data.map(n => {
                        return {
                            name: n.name,
                            store: n.store,
                            winners: n.winners,
                            date: n.date,
                            hour: n.hour,
                            price: n.price,
                            action: (  <a className="insideTb blue-text">Approve </a>)
                        }
                    }),
                    proReq: true
               })
            }
            }).catch(err => console.error(err))
           
    }

    
    getOneBidData = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/onebid/" + "",
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {

                } else {
                 this.setState({
                    bidata: response.data.data,
                    bids: true 
               })
            }
            }).catch(err => console.error(err))
           
    }


    cancelAuction = (id) => {
          this.setState({
                    loadPage: true
                })
        axios({
            method: 'post',
            url: localStorage.address + "/api/v1/cancel/" + id.toString(),
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {

                } else {
                this.setState({
                    loadPage: false
                })
            }
               console.log(response)
            }).catch(err => console.error(err))
           
    }


    getProData = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/product/",
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {

                } else {
                this.setState({
                    products: response.data.data.map(n =>{
                        return  {
                        name: n.name,
                        vendor: n.vendor,
                        target: n.target,
                        winners: n.winners,
                        timer: (<Counter date={n.date} hour={n.hour} key={n.id}/>),
                        spin: ( <a className="insideTb  blue-text">Spin Now</a>),
                        action: ( <a className="insideTb  blue-text" onClick={() => this.cancelAuction(n.id)}>Cancel</a>)
                    }}),
                    pro: true 
               })
            }
            }).catch(err => console.error(err))
           
    }

    getVendReq = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/idz/",
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {

                } else {
                 this.setState({
                    vendors: response.data.data.map(n => {
                        return {
                            store: n.store,
                            account: n.account,
                            email: n.email,
                            phone: n.phone,
                            selling: n.sells,
                            action: ( <div>
                                <a className="insideTb blue-text row">accept</a>
                                <a className="insideTb yellow-text row">reject</a>
                                <a className="insideTb red-text row">delete</a>

                            </div>)
                        }
                    }),
                    vend: true 
               })
            }
            }).catch(err => console.error(err))
           
    }

    handleCreatePro = () => {
        let stateN = {...this.state}
        this.setState({
            createPro: !stateN.createPro,
            openForm: !stateN.openForm
        })
    }

    handleCreateWin = () => {
        let stateN = {...this.state}
        this.setState({
            createWin: !stateN.createWin,
            openForm: !stateN.openForm
        })
    }


    handleSendMoney = () => {
        let stateN = {...this.state}
        this.setState({
            createWin: !stateN.createWin,
            openForm: !stateN.openForm
        })
    }

    downLoadData = (objArray) => {
        let items = objArray;
              const replacer = (key, value) => value === null ? '' : value; 
              const header = Object.keys(items[0]);
              let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
              csv.unshift(header.join(','));
              csv = csv.join('\r\n');
      
              alert("Press Ok To DownLoad Csv")
      
              let downloadLink = document.createElement("a");
              let blob = new Blob(["\ufeff", csv]);`    `
              let url = URL.createObjectURL(blob);
              downloadLink.href = url;
              downloadLink.download = `${parseInt(Math.floor(Math.random() * 100678700000) + 1000000).toString()}fortuneData.csv`;  //Name the file here
              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);
      
      }
      

    render() {
      
        const M = window.M
        M.AutoInit();

       let CurrentForm = null 
       let func = null 

       let changeNullInfo = (info) => {
        if(info == null || info == undefined || info.length < 1) {
            return ["No Data"]
        }else {
            return info
            
        }
       }

       if(this.state.createWin) {
        CurrentForm = <CreateWin />
        func = this.handleCreateWin

       }
       if(this.state.createPro) {
        CurrentForm = <CreatePro/>
        func = this.handleCreatePro
           
    }
    if(this.state.sendMoney) {
        CurrentForm = null
           
    }
    
        return (
           <Fragment>

            {this.state.loadPage ?  <div className="headLoader"> <Loader/>  </div> : null}
           {!this.state.openForm ? <Fragment>
                <div className="adminNav">
                    <img src={logo} alt="" className="logoadmin"/>
                    <p className="">Fortune Admin</p>
                    <button className="loginBtn" onClick={this.props.logout}>Logout</button>
                </div>

                <div className="highlight">
                    <div className="light1">
                        <p>Revenue</p>
                        <div>RWF 0</div>
                    </div>
                    <div className="light1">
                        <p>Total Customers</p>
                        <div> 0</div>
                    </div>
                    <div className="light1">
                        <p>New Customers</p>
                        <div>0</div>
                    </div>

                    <div className="light1">
                        <p>Winners</p>
                        <div>30</div>
                    </div>
                </div>

                <div className="groudBtn">
                    
                </div>
                <div className="row top20">
                <div className="col s12">
                <ul className="tabs ">
                    <li className="tab col s3 white"><a   className="active black-text"  href="#winners">Winners</a></li>
                    <li className="tab col s3"><a className="black-text" href="#current">Current Auction </a></li>
                    <li className="tab col s3"><a  className="black-text"  href="#request">vendors</a></li>
                    <li className="tab col s3"><a   className="black-text"  href="#req">requested Product</a></li>
                </ul>
                </div>
                
                <div id="current" className="col s12"> 
                {this.state.pro ?
                   <Fragment>
                    <h6 className="topBottom">Products </h6>
                    <Tables 
                          heads={Object.keys(changeNullInfo(this.state.products)[0])}
                          information={this.state.products}
                    />  
                   </Fragment>
                    : <h6 className="topBottom">No Current Auction </h6>} </div>
                <div id="winners" className="col s12">
                {this.state.wins  ?
                   <Fragment>
                    <h6 className="topBottom"> Winners </h6>
                    <Tables 
                          heads={Object.keys(this.state.winners[0])}
                          information={this.state.winners}
                    />  
                   </Fragment>
                    : <h6 className="topBottom">No winners data </h6>}

                </div>
                <div id="request" className="col s12">
                {this.state.vend ?
                   <Fragment>
                    <h6 className="topBottom">Vendors </h6>
                    <Tables 
                          heads={Object.keys(this.state.vendors[0])}
                          information={this.state.vendors}
                    />  
                   </Fragment>
                    : <h6 className="topBottom">No bid data </h6>}

                </div>
                <div id="req" className="col s12"> 
                {this.state.proReq?
                   <Fragment>
                    <h6 className="topBottom">Requested Product </h6>
                    <Tables 
                          heads={Object.keys(this.state.requestedPro[0])}
                          information={this.state.requestedPro}
                    />  
                   </Fragment>
                    : <h6 className="topBottom"> No Requested Products  </h6>}

                </div>
            </div>

            <div className="gridTwo" style={{marginLeft:"20px"}}>
            <div className=" input-field">

                <select multiple>
                <option value="" disabled defaultValue>Choose Data To download </option>
                <option value="users"> users</option>
                <option value="vendors"> Vendors</option>
                <option value="bids"> bids</option>
                <option value="pro"> products</option>
                <option value="finance"> all finances</option>

                </select>
            </div>

            <div className="">
                <button className="btn" style={{width: "150px", height:"30px", marginTop:"30px", marginLeft:"10px"}}>Download </button>
            </div>
            </div>

          
            <div className="flexBtn">
                <button className="btn black" onClick={this.handleCreatePro}>create Product</button>
                <button className="btn black" onClick={this.handleCreateWin}>Publish A winner</button>
                <button className="btn black" onClick={this.handleSendMoney}> Send Money</button>

            </div>

            
            </Fragment> : 
             <Form 
             clecked={func} 
             >
                 {CurrentForm}
             </Form>
        }
           </Fragment>
        )
    }
}


export default Admin;