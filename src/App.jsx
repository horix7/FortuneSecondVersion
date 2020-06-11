import React, {Fragment, Component} from 'react';
import Admin from './containers/admin';
import User  from './containers/user';
import Landing  from './components/landing/landing';



localStorage.setItem("address", "https://fortunesecondv.herokuapp.com")
localStorage.setItem("auth", localStorage.auth || null)
localStorage.setItem("details", localStorage.details || null)




class App extends Component {
  state = {
    logined: localStorage.auth
  }
  componentDidMount() {
    const M = window.M
    M.AutoInit();
  }

  logout = () => {
    localStorage.auth = null
    this.setState({
      logined: false
    })
  }

  logIn = () => {
    this.setState({
      logined: localStorage.auth
    })
  }

  changeAdminNul = (num ) => {
    if(num === null || num === "null") {
      return false 
    } else {
      return JSON.parse(num).isAdmin
    }
  }


  checkToken = (num) =>  {
    if(num === null || num === "null") {
      return false 
    } else {
      return num
    }
  }
 render() {
 let check = this.changeAdminNul(localStorage.details)
 let tCheck = this.checkToken(localStorage.auth) 
  return (
    <Fragment>
        {!check ? <Fragment>
       {tCheck && this.state.logined ?  <User onLogout={this.logout}/> : <Landing  onLogin={this.logIn}/>}

        </Fragment> :  <Admin logout={() => {
           
          localStorage.details = null
          localStorage.auth = null 
          this.setState({
            logined: false
          })
        }}/> }  
    </Fragment>
  );
 }
}

export default App;
                                                           


