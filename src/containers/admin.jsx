
import React, {Component, Fragment} from 'react';
import logo from '../images/fortuneScution.png';
import axios from 'axios';
import Loader from '../components/UI/preloader';
import Tables from '../components/UI/tables';
import CreatePro from '../components/forms/createpro'
import CreateWin from '../components/forms/createwinn'
import Counter from '../components/UI/counter'
import Form from '../containers/formHolder'
import SendMoMo from '../components/forms/sendMoney'
import UpdatePro from '../components/forms/updatePro'


class Admin extends Component {
    state={
        currentInfo: null,
        downloading: null
    }


    componentWillMount() {
       
       this.runAllFunc()
    }

    componentDidMount() {
      
    }

    openModify = () => {
        
    }

    componentWillUpdate() {
        const M = window.M
        M.AutoInit();
    }

    runAllFunc = async () => {
      

         this.getProData()
         this.getBidData()
         this.getVendReq()
         this.vendorProReq()
         this.getWinnerData()
         this.dataInfo()
         this.allUsersRegistered()
         this.getRefundOnes()
         this.activateMomo()
        }

    getWinnerData = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/chosenone/" ,
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {
                } else {

                    this.setState({
                        winners: response.data.data,
                        wins: true 
                   })
                }
                 
            }).catch(err => console.error(err))
    }

    getRefundOnes = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/refunem/" ,
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                  if(response.data.error.length < 1) {

                  }else {
                    this.setState({
                        reundz: response.data.error
                   })
                  }
                 
            }).catch(err => console.error(err))
    }

    activateMomo  = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/payment/" ,
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
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
                if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {
                } else {

                 this.setState({
                    requestedPro: response.data.data.map(n => {
                        return {
                            name: n.name,
                            store: n.store,
                            winners: n.winners,
                            date: n.date,
                            hour: n.hour,
                            price: n.price,
                            action: (  <a className="insideTb blue-text" onClick={() => this.handleProUpdate(n)}>Approve </a>)
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
                    bidata1: response.data.data,
                    bids: true 
               })
            }
            }).catch(err => console.error(err))
           
    }

    dataInfo = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/dataday/" + "",
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                
                 this.setState({
                    today: response.data.data.todaty,
                    all:  response.data.data.allTime 
               })
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
                 this.runAllFunc()

                } else {
       this.runAllFunc()

                this.setState({
                    loadPage: false
                })
            }
            }).catch(err => console.error(err))
           
    }

    cancelAuction2 = (id) => {
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
     this.runAllFunc()

              } else {
     this.runAllFunc()

              this.setState({
                  loadPage: false
              })
          }
          }).catch(err => console.error(err))
         
  }


    
    approveVend = (id) => {
        this.setState({
                  loadPage: true
              })


      axios({
          method: 'put',
          url: localStorage.address + "/api/v1/makevend/" + id,
          headers: {  Authorization: localStorage.auth }
          })
          .then( (response) => {
              if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {
                this.runAllFunc()

              } else {
                this.runAllFunc()

              this.setState({
                  loadPage: false
              })
          }
          }).catch(err => console.error(err))
         
  }


   
  rejectVend = (id, dataInfo) => {
    this.setState({
              loadPage: true
          })


  axios({
      method: 'put',
      url: localStorage.address + "/api/v1/rejectvend/" + id,
      data: {
          user: dataInfo
      },
      headers: {  Authorization: localStorage.auth }
      })
      .then( (response) => {
          if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {
            this.runAllFunc()

          } else {
            this.runAllFunc()

          this.setState({
              loadPage: false
          })
      }
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
                    realPro : response.data.data,
                    finances:  response.data.data.map(n => {
                        let revenue = 0
                        let ree = 0

                          if(n.sold !== null) {
                           revenue = parseInt(n.price) * JSON.parse(n.sold).length 
                          }
                          if(n.type == "Brand New") {
                            ree = 0.1
                          } else {
                            ree = 0.09
                          }
                          let tax = revenue * 0.05
                          let charge = n.selling * ree
                          let tot = revenue - n.selling - tax + charge
                            return {
                                product: n.name,
                                vendor: n.vendor,
                                revenue: revenue,
                                tax: tax,
                                selling: n.selling,
                                charge: charge,
                                income: tot

                            }
                      }),
                    products: response.data.data.map(n =>{
                        return  {
                        name: n.name,
                        vendor: n.vendor,
                        tickets: n.tickets,
                        winners: n.winners,
                        timer: (<Counter date={n.date} hour={n.hour} key={n.id} onFinish={() => this.chooseWinners(n.id)}/>),
                        spin: ( <a className="insideTb  blue-text"  onClick={() => this.chooseWinners(n.id)}>Spin Now</a>),
                        action: ( <a className="insideTb  blue-text" onClick={() => this.cancelAuction(n.id)}>Cancel</a>)
                    }}),
                    pro: true 
               })
            }
            }).catch(err => console.error(err))
           
    }


    chooseWinners = (id) => {
        axios({
            method: 'patch',
            url: localStorage.address + "/api/v1/choosetik/" + id,
            headers: {  Authorization: localStorage.auth }
            })
            .then(res => {
                this.runAllFunc()

            }).catch (err => {
                alert("Failed To Choose The Winners")
                this.cancelAuction2(id)
            })
    }

    
    allUsersRegistered = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/allusers/",
            headers: {  Authorization: localStorage.auth }
            })
            .then(res => {
                this.setState({
                    allusers: res.data.data.map(n => {
                        return {
                            names: n.firstname,
                            user_name: n.secondname,
                            email: n.email,
                            phone: n.countrycode + n.phone,
                            age: n.age,
                            registered_on: n.registeredDate,
                            isVendor: n.vendor,
                            gender: n.gender,
                            profilePic: n.picture

                        }
                    })
                })

            }).catch (err => console.error(err))
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
                     realVend: response.data.data,
                    vendors: response.data.data.map(n => {
                        return {
                            store: n.store,
                            account: n.account,
                            email: n.email,
                            phone:  n.phone,
                            selling: n.sells,
                            action: ( <div>
                               {n.verified ? null :  <a className="insideTb blue-text row" onClick={() => this.approveVend(n.account)}>accept</a>}
                                {n.verified ? <a href="#" className="insideTb  green-text row">accepted</a> : <a className="insideTb yellow-text row" onClick={() => this.rejectVend(n.id, n.account)}>reject</a>}
                                <a className="insideTb red-text row" onClick={() => this.rejectVend(n.id, n.account)}>delete</a>

                            </div>)
                        }
                    }),
                    vend: true 
               })
            }
            }).catch(err => console.error(err))
           
    }

    handleCreatePro = () => {
       this.runAllFunc()

        let stateN = {...this.state}
        this.setState({
            createPro: !stateN.createPro,
            openForm: !stateN.openForm
        })
    }

    handleCreateWin = () => {
       this.runAllFunc()

        let stateN = {...this.state}
        this.setState({
            createWin: !stateN.createWin,
            openForm: !stateN.openForm
        })
    }


    handleSendMoney = () => {
       this.runAllFunc()

        let stateN = {...this.state}
        this.setState({
            sendMoney: !stateN.sendMoney,
            openForm: !stateN.openForm
        })
    }

    handleProUpdate  = (info) => {
        this.runAllFunc()
 
         let stateN = {...this.state}
         this.setState({
             approvePro: !stateN.approvePro,
             openForm: !stateN.openForm,
             currentInfo: info
         })
     }

    //  realPro bidata  realVend  allusers 
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
        CurrentForm = <SendMoMo/>
        func = this.handleSendMoney

           
    }
    if(this.state.approvePro) {
        CurrentForm = <UpdatePro info={this.state.currentInfo}/>
        func = this.handleProUpdate

           
    }
    let  numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
          {this.state.pro ?  <div>US$ {this.state.realPro.map(n => {
              if(n.sold !== null ) {
                return n.price * JSON.parse(n.sold).length
              }
           }).reduce((a,b) => a + b)}</div> : <div>  0 </div>}
                    </div>
                    <div className="light1">
                        <p>Total Customers</p>
                        {this.state.all ? <div>{this.state.all}</div> : <div>0</div>}

                    </div>
                    <div className="light1">
                        <p>New Customers</p>
                        {this.state.today ? <div>{this.state.today}</div> : <div>0</div>}
                    </div>

                    <div className="light1">
                        <p>Winners</p>
                        {this.state.wins  ? <div>{this.state.winners.length }</div> : <div>0</div>}
                    </div>
                </div>

                <div className="groudBtn">
                    
                </div>
                <div className="row top20">
                <div className="col s12">
                <ul className="tabs ">
                    <li className="tab col s2 white"><a   className="active black-text"  href="#winners">Winners</a></li>
                    <li className="tab col s3"><a className="black-text" href="#current">Current Auction </a></li>
                    <li className="tab col s2"><a  className="black-text"  href="#request">vendors</a></li>
                    <li className="tab col s3"><a   className="black-text"  href="#req">requested Product</a></li>
                    <li className="tab col s2"><a   className="black-text"  href="#finance"> Finance </a></li>
                
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
                

                
                <div id="finance" className="col s12"> 
                {this.state.pro ?
                   <Fragment>
                    <h6 className="topBottom">Products </h6>
                    <Tables 
                          heads={["product","vendor","revenue", "tax", "selling", "charge", "income"]}
                          information={this.state.finances}
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

                <select 
                onChange={e => {
                    let newState = this.state.downloading
                    if(e.target.value == "users") {
                        if(this.state.allusers == undefined || this.state.allusers == null) {
                            newState = null
                        }else {
                            newState = this.state.allusers
                        }
                    }else if(e.target.value == "vendors") {
                        if(this.state.realVend == undefined || this.state.realVend == null) {
                            newState = null
                        }else {
                            newState = this.state.realVend
                        }
                       
                    }else if(e.target.value == "bids") {
                        if(this.state.bidata == undefined || this.state.bidata == null) {
                            newState = null
                        }else {
                            newState = this.state.bidata
                        }
                       
                  }else if(e.target.value == "products") {
                    if(this.state.realPro == undefined || this.state.realPro == null) {
                        newState = null
                    }else {
                        newState = this.state.realPro
                    }
                 }   else if(e.target.value == "finance") {
                    if(this.state.finances == undefined || this.state.finances == null) {
                        newState = null
                    }else {
                        newState = this.state.finances
                    }
                }  
                else if(e.target.value == "reundz") {
                    if(this.state.reundz == undefined || this.state.reundz == null) {
                        newState = null
                    }else {
                        newState = this.state.reundz
                    }
                }                     
                       
                    this.setState({
                        downloading: newState
                    })

                }}>
                <option value="" defaultValue>Choose Data To download </option>
                <option value="users" > users</option>
                <option value="vendors"> Vendors</option>
                <option value="bids" > bids</option>
                <option value="products"> products</option>
                <option value="finance"> all finances</option>
                <option value="reundz">Refund Users</option>
               
                
                </select>
            </div>

            <div className="">
                <button className="btn" style={{width: "150px", height:"30px", marginTop:"30px", marginLeft:"10px"}}
                onClick={() => {
                    if(this.state.downloading == null) {
                        alert("no Data Available")
                    } else {
                      
                            this.downLoadData(this.state.downloading)
                    }
                }}
                >Download </button>
            </div>
            </div>

          
            <div className="flexBtn">
                <button className="btn black" onClick={this.handleCreatePro}>create Product</button>
                <button className="btn black" onClick={this.handleCreateWin}>Publish A winner</button>
                <button className="btn black" onClick={this.handleSendMoney}> Send Money</button>
                <button className="btn black" onClick={() => window.location.reload()}> Refersh All Data</button>

               

            </div>

            
            </Fragment> : 
            <div className="homeform">

             <Form 
             clecked={() => {
                
               func()
               this.runAllFunc()

            }} 
             >
                 {CurrentForm}
             </Form>
             </div>
        }
           </Fragment>
        )
    }
}


export default Admin;