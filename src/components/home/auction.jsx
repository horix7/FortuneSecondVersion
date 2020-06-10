import React, {Component, Fragment} from 'react';
import ProBox from '../holders/productBox'
import axios from 'axios';
import Loader from '../UI/preloader';
import Modal from '../../containers/modal'

class Auction extends Component {
    state= {
        openModal: false,
        checked: []
    }

    componentDidMount() {
        this.getAllActivePro()
    }

    getAllActivePro = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/product/",
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                console.log(response.data)
                 this.setState({
                    products: response.data.data,
                    pro: true 
               })
            }).catch(err => console.error(err))

    }

    handleClickedCheckBox = () => {
            let array = []
            let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

            for (let i = 0; i < checkboxes.length; i++) {
                array.push(checkboxes[i].value)
            }
             this.setState({
                 checked: array
             })
    }

     toggle = () =>  {
       let  checkboxes = document.querySelectorAll('#indeterminate-checkbox');
        for(var i=0, n=checkboxes.length;i<n;i++) {
          checkboxes[i].checked = "checked";
        this.handleClickedCheckBox()

        }
      }

    openModal = (id) => {
        this.setState({
            openModal: true,
            tickets: false

        })
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/product/" + id.toString(),
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                console.log(response.data)
                let dataTick = (tick) => {
                   if(tick == null || tick == "[]") {
                       return ["No Data"]
                   }else {
                       return JSON.parse(tick)
                   }
                }
                 this.setState({
                    tickets: dataTick(response.data.data[0].current),
                    sold: dataTick(response.data.data[0].sold),
                    currentPrice: response.data.data[0].price,
                    ticket: true 
               })
            }).catch(err => console.error(err))

    }
    render() {
        return (
            <Fragment>
              {!this.state.openModal ? <div className="ProductsHere">

                {this.state.pro ? this.state.products.map(n => ( <ProBox 
                    key={n.id}
                    info={{
                        name: n.name,
                        winners: n.winners,
                        price: n.price,
                        fortunes: n.tickets,
                        image: n.picture,
                        date: n.date,
                        hour: n.hour,
                        sold: n.sold
                      }}
                      showTickets={() => this.openModal(n.id)}
                      />)) : <Loader/>}
                </div> : <Modal clecked={this.openModal2} chosen={this.state.checked} price={this.state.currentPrice}> 
                       {this.state.ticket ? <div>  
                    <button className="btn white black-text" onClick={this.toggle}>Select All</button>
                 <div className="gridTwo">
                           {this.state.tickets.map(n => (
                               <p key={n}>
                               <label>
                                 <input value={n} name="fortunes" id="indeterminate-checkbox" type="checkbox" onChange={this.handleClickedCheckBox}/>
                                 <span>Fortune Number: {n} </span>
                               </label>
                             </p>
                           ))}
                       </div>  </div> :  <div className="midLoader"> <Loader type="circle" style="preloader-wrapper large active"/>  </div> }
                    </Modal>}

            </Fragment>
        )
    }
}

export default Auction;