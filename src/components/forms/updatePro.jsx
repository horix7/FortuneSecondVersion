import React, {Fragment, Component} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import axios from 'axios'
import Loader from '../UI/preloader'


class CreatePro  extends Component{

    state = {
        productR: {
            tickets: null,
            price: null,
        },
        submit: false
    } 

    componentDidMount() {
        this.changeStateNow()
    }



 handleInputs = (e) => {
  
    this.state.productR[e.target.id] = e.target.value

    this.changeSub()
    }

    submitProduct = e => {
        e.preventDefault()
        axios({
            method: 'post',
            url: localStorage.address + "/api/v1/product/",
            data: this.state.productR,
            headers: {  
                "Authorization": localStorage.auth,
                "Content-Type": "application/json"
                     }
            })
            .then( (response) => {
                this.deleteRePro(this.props.info.id)
                this.setState({
                    error: null,
                    mess: "Product Was Created Successfully",
                    btnLoad: false  
    
                })
    
              
            }).catch(err => console.error(err))
      
    }

    deleteRePro = (id) => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/deletereq/"+ id,
            data: this.state.productR,
            headers: {  
                "Authorization": localStorage.auth,
                "Content-Type": "application/json"
                     }
            })
            .then( (response) => {
             
    
              
            }).catch(err => console.error(err))
      
    }
    changeSub = () => {
        if(Object.values(this.state.productR).some(n => n == null)) {
            this.setState({
                submit: false 
            })
        }else {

         this.setState({
             submit: true
         })
        }
     }


     changeStateNow = () => {
        const {name, store,hour,date,winners,picture,price}= this.props.info
        let newState = {...this.state.productR}
        let ChangeState = {
            ...newState,
            name: name,
            vendor: store || "admin",
            hour: hour,
            date: date,
            winners: winners,
            picture: picture,
            selling: price
        }

        this.setState({
            productR: ChangeState
        })
        this.changeSub()

        }
render() {
    const {name, store,hour,date,price,winners}= this.props.info

    return(
        <Fragment>
             {this.state.error ? <div id="err" className="errorz">{this.state.error}</div> : null}
             {this.state.mess ? <div id="err" className="successz">{this.state.mess}</div> : null}
            <div>


            <p>
                name: {name}
                <br/>

                store: {store}
                <br/>
                <br/>
                ending-hour: {hour}
                <br/>

                Ending-date: {date}
                <br/>

                Selling-price: {price}
                <br/>

                winners: {winners}


            </p>
            <div className="gridTwo">

                     <div className="spaceIn">
             <Input 
                 info={{
                    style: "input-field",
                    id: "tickets",
                    type: "number",
                    label: "Number Of Tickets",
            
                 }}
                 changed={this.handleInputs}

                 />

            </div>
            <div className="spaceIn">

                <Input 
                 info={{
                    style: "input-field",
                    id: "price",
                    type: "number",
                    label: "ticket Price",
            
                 }}
                 changed={this.handleInputs}

                 />

                 </div>
                 </div>

                 


              {
                  !this.state.submit ?   <Button 
                  style="btn longBtn waves-effect waves-light black"
                  text="Submit"
                    info={{
                      type: "submit",
                      name: "action",
                     
                    }}
                 />:   <Fragment>
                 {!this.state.btnLoad ?
                  <Button 
                 style="btn longBtn  waves-effect waves-light black"
                 text="submit"
                 info={{
                     type: "submit",
                     name: "action",
                 
                 }}
                 clicked={this.submitProduct} /> : <Loader/>}
             </Fragment>}
             
            </div>
        </Fragment>
    )
}
}

export default CreatePro;