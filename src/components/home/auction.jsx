import React, {Component, Fragment} from 'react';
import ProBox from '../holders/productBox'
import axios from 'axios';
import Loader from '../UI/preloader';
import Modal from '../../containers/modal'

class Auction extends Component {
    state= {
        openModal: false
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

    openModal = (id) => {
        console.log("doone")
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
                </div> : <Modal clecked={this.openModal2}> 
                       {this.state.ticket ?  <div className="grid-three">
                           {this.state.tickets.map(n => (
                               <p>
                               <label>
                                 <input id="indeterminate-checkbox" type="checkbox" />
                                 <span>Fortune Number: {n} </span>
                               </label>
                             </p>
                           ))}
                       </div> :  <div className="midLoader"> <Loader type="circle" style="preloader-wrapper large active"/>  </div> }
                    </Modal>}

            </Fragment>
        )
    }
}

export default Auction;