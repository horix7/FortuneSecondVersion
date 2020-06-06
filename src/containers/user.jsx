import React, {Component, Fragment} from 'react';
import UserNav from '../components/nav/usernav';
import Profile from '../components/home/userProfile';
import axios from 'axios';
import Loader from '../components/UI/preloader';


class User extends Component {

    state={
        account: false,
        loading: false,
        userInfo : false,
        bids: false
    }
    
    swithToAuction = () => {
        let newState = {...this.state}
        this.setState({
            account: !newState.account
        })
    }

    refreshData = () => {
        let newState = {...this.state}
        this.setState({
            loading: !newState.loading
        })
    }

    getAccountInfo = () => {

               axios({
               method: 'get',
               url: localStorage.address + "/api/v1/useraccount/" + JSON.parse(localStorage.details).id.toString(),
               headers: {  Authorization: localStorage.auth }
               })
               .then( (response) => {

                   this.setState({
                        details: response.data.data,
                        userInfo: true 
                   })
                    console.log(response)
               }).catch(err => console.error(err))
              
         }
    

    getBidData = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/onebid/" + JSON.parse(localStorage.details).username,
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                 this.setState({
                    bidata: response.data.data,
                    bids: true 
               })
            }).catch(err => console.error(err))
           
    }


    componentDidMount() {
        this.getAccountInfo()
        this.getBidData()

    }
    render() {
        console.log(this.state)
        return (
            <Fragment>

           {this.state.userInfo ? <UserNav
                info={{
                    account: this.state.account,
                    name: "denedict",
                    loading: this.state.loading
                }}
                refresh={this.refreshData}
                switch={this.swithToAuction}
                logout={this.props.onLogout}
                /> : <div className="headLoader"> <Loader/>  </div> 
}
    {this.state.userInfo ?
          <Fragment>
          {this.state.bids ? <Profile 
                info={{
                    one: {
                        name: this.state.details.firstname,
                        email:  this.state.details.email,
                        age:  this.state.details.age,
                        Phone:  this.state.details.phone,

                    },

                    two: {
                        username: this.state.details.secondname,
                        gender:  this.state.details.gender
                    }
                }}

                dataTable={this.state.bidata}
            /> : <div className="midLoader"> <Loader type="circle" style="preloader-wrapper large active"/>  </div> }
          </Fragment> : null
            }
            </Fragment>           
        )
    }
}


export default User;