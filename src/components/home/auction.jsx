import React, {Component, Fragment} from 'react';
import ProBox from '../holders/productBox'
import axios from 'axios';
import Loader from '../UI/preloader';
import Modal from '../../containers/modal';

class Auction extends Component {
    state= {
        openModal: false,
        checked: [],
        id: null 
    }

    componentDidMount() {
        this.getDataBids()
    }

    getAllActivePro = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/product/",
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                 this.setState({
                    products: response.data.data,
                    pro: true 
               })
            }).catch(err => console.error(err))

    }

    chooseWinners = (id, status) => {
      axios({
          method: 'patch',
          url: localStorage.address + "/api/v1/choosetik/" + id,
          headers: {  Authorization: localStorage.auth }
          })
          .then(res => {
              this.getDataBids()

          }).catch (err => {
              this.cancelAuction2(id, status)
          })
  }
    
  
  cancelAuction2 = (id,status) => {
  

  axios({
      method: 'post',
      url: localStorage.address + "/api/v1/cancel/" + id.toString() + "/" + status,
      headers: {  Authorization: localStorage.auth }
      })
      .then( (response) => {
          if(response.data.data == null ||  response.data.data.length < 1 ||response.data.data == undefined) {
              this.getDataBids()
          } else {
              this.getDataBids()

          this.setState({
              loadPage: false
          })
      }
      }).catch(err => console.error(err))
     
}
    getDataBids = () => {
      axios({
          method: 'get',
          url: localStorage.address + "/api/v1/biddenidz/111/",
          headers: {  Authorization: localStorage.auth }
          })
          .then( (response) => {
      
            console.log(response)
               if( response.data.data.length < 1 || response.data.data == null || response.data.data == undefined) {
                this.setState({
                  bidzid: [0]
             })
             this.getAllActivePro()
               } else {
                this.setState({
                  bidzid: response.data.data 
             })
             this.getAllActivePro()
               }

          }).catch(err => {
            this.setState({
              bidzid: [0]
         })
            this.getAllActivePro()
            console.log(err)
          })

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

      toggle2 = () =>  {
        let  checkboxes = document.querySelectorAll('#indeterminate-checkbox');
         for(var i=0, n=checkboxes.length;i<n;i++) {
           checkboxes[i].checked = null;
         this.handleClickedCheckBox()
 
         }
       }

      openModal2 = () => {
        this.setState({
            openModal: false,
            ticket: false

        })
      }
    openModal = (id) => {
        this.setState({
            openModal: true,
            ticket: false

        })
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/product/" + id.toString(),
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
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
                    id: response.data.data[0].id,
                    ticket: true 
               })
            }).catch(err => console.error(err))

    }
    render() {
        return (
            <Fragment>
              {this.state.openModal ?
              <div>
                 <h2 className="center-align" style={{
                   paddingTop: "5%"
                 }}>Choose Your Lucky Fortune Number </h2>
                <h6 className="center-align">You Can Select More Than One Fortune Number to Stand A High Chance To Win </h6>
              
              </div>
                 : null
              }
              
              {!this.state.openModal ? <div className="ProductsHere">

                {this.state.pro ? this.state.products.map(n => {
                  if(this.state.bidzid.some(y => y == n.id)) {
                    return  ( <ProBox 
                      text="Bid More"
                      key={n.id}
                      info={{
                          name: n.name,
                          winners: n.winners,
                          price: n.price,
                          fortunes: n.tickets,
                          image: n.picture,
                          date: n.date,
                          hour: n.hour,
                          sold: n.sold,
                          type: n.type
                        }}
                        showTickets={() => this.openModal(n.id)}
                        onFinish={(status) => this.chooseWinners(n.id, status)}
                        />)

                  } else {
                    return  ( <ProBox 
                      key={n.id}
                      info={{
                          name: n.name,
                          winners: n.winners,
                          price: n.price,
                          fortunes: n.tickets,
                          image: n.picture,
                          date: n.date,
                          hour: n.hour,
                          sold: n.sold,
                          type: n.type
                        }}
                        showTickets={() => this.openModal(n.id)}
                        onFinish={(status) => this.chooseWinners(n.id,status)}
                        />)
                  }
                  
                }) : <Loader/>}
                </div> : <Modal id={this.state.id} clecked={this.openModal2} chosen={this.state.checked} price={this.state.currentPrice}> 
                      
                       {this.state.ticket ? <div>  
                           <div className="row">
                    <button className="btn-small white black-text col5" width="100px" onClick={this.toggle}>Select All</button>
                    <button className="btn-small white black-text col5" onClick={this.toggle2}>Un Select All</button>

                           </div>
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