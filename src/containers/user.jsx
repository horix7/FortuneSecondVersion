import React, {Component, Fragment} from 'react';
import UserNav from '../components/nav/usernav';
import Profile from '../components/home/userProfile'

class User extends Component {

    state={
        account: false,
        loading: false
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
    render() {

        return (
            <Fragment>

            <UserNav
                info={{
                    account: this.state.account,
                    name: "denedict",
                    loading: this.state.loading
                }}
                refresh={this.refreshData}
                switch={this.swithToAuction}
                />


            <Profile 
                info={{
                    one: {
                        name: "Mahoro ",
                        Age: "1231"
                    },

                    two: {
                        name: "Mahoro ",
                        Age: "1231"
                    }
                }}
            />
            </Fragment>

           
        )
    }
}


export default User;