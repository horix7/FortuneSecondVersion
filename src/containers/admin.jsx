
import React, {Component, Fragment} from 'react';
import logo from '../images/fortuneScution.png';
import axios from 'axios';
import Loader from '../components/UI/preloader';
import Tables from '../components/UI/tables';

class Admin extends Component {
    state={

    }


    componentWillMount() {
        this.getVendReq()
    }

    getWinnerData = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/bidss/" ,
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                 this.setState({
                    winners: response.data.data,
                    wins: true 
               })
            }).catch(err => console.error(err))
    }
    
    getBidData = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/bidss/" ,
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                 this.setState({
                    bidata: response.data.data,
                    bids: true 
               })
            }).catch(err => console.error(err))
           
    }

    getOneBidData = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/onebid/" + "",
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                 this.setState({
                    bidata: response.data.data,
                    bids: true 
               })
            }).catch(err => console.error(err))
           
    }

    getProData = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/products/",
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                 this.setState({
                    products: response.data.data,
                    pro: true 
               })
            }).catch(err => console.error(err))
           
    }

    getVendReq = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/idz/",
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                 this.setState({
                    vendors: response.data.data,
                    vend: true 
               })
            }).catch(err => console.error(err))
           
    }


    render() {
        return (
            <Fragment>
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
                          heads={Object.keys(this.state.products[0])}
                          information={this.state.products}
                    />  
                   </Fragment>
                    : <h6 className="topBottom">No Current Auction </h6>} </div>
                <div id="winners" className="col s12">
                {this.wins  ?
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
                {this.props.vend ?
                   <Fragment>
                    <h6 className="topBottom">Vendors</h6>
                    <Tables 
                          heads={Object.keys(this.state.vendors[0])}
                          information={this.state.vendors}
                    />  
                   </Fragment>
                    : <h6 className="topBottom">No Vendor  Req </h6>}

                </div>
                <div id="req" className="col s12"> 
                {this.props.proReq?
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

          
        
            </Fragment>
        )
    }
}


export default Admin;