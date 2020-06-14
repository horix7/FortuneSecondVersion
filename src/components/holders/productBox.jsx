import React, {Component, Fragment} from 'react';
import Button from '../UI/button';
import Image from '../UI/image';
import Par from '../UI/paragraphs';
import Counter from '../holders/counter';
import Modal from 'react-modal';
Modal.setAppElement('#root')

class ProducBox extends Component {

    state= {
      openModal: false
    }
    
    componentDidMount() {

    }

    showTickets = () => {
      this.setState({
        openModal: true
      })
    }
    opneModal = () => {
      this.setState({
        modal: true
      })
    }
    render() {
      let returnNum = (num) => {
        if (num == null) {
          return 0
        } else {
          return JSON.parse(num).length
        }
      }

        return (
          <Fragment>

         {!this.state.openModal ? <div>
            <Counter date={this.props.info.date} hour={this.props.info.hour}/>
         <div className="protype">{this.props.info.type}</div>
            <div className="bordered">
                  <Image 
                    info={{
                        class: "image", // image 
                        type: "bidImage", //bidImage  squareImg
                        src: this.props.info.image

                    }}
                    
                    />
                     <Par 
                    info={{
                            type:"bidName", //homeText homePara
                            text: this.props.info.name
                          }}
                        />

                  <Par 
                    info={{
                            type:"bidText", //homeText homePara
                            text: "Bidding Price" + " " + Math.floor(this.props.info.price / JSON.parse(localStorage.currency).rate) + " " +  JSON.parse(localStorage.currency).currency
                          }}
                        />
                        <div className="gridTwo topBottom">
    
                          <div>

                        <Par 
                         info={{
                            type:"winnersPara", //homeText homePara
                            text: "For" + " " + this.props.info.winners + " " + "winners"
                          }}
                        />
                          </div>

                          <div>
                   {!this.props.check ?       
                    <Button
                     style="btn  light-green darken-2"
                     text="Bid Now"
                       info={{
                         type: "submit",
                         name: "action",
                        
                       }}
                       clicked={this.props.showTickets}
                        /> :
                         <Button
                     style="btn  light-green darken-2"
                     text="Bid Now"
                       info={{
                         type: "submit",
                         name: "action",
                        
                       }}
                       clicked={this.props.login}
                        />}
                          </div>

                          </div>


                <Par 
                 info={{
                    type:"winnersPara", //homeText homePara
                    text:  returnNum(this.props.info.sold) + " " + '/'+ this.props.info.fortunes + " " + "fortunes remains"
                  }}
                  />
                <Button 
                 style="btn   blue darken-3"
                 text="share now"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}

                   clicked={this.opneModal}
                   />
            </div>
          </div> : null
          }
            <Modal
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.304)'
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      height: "200px",
                      border: '1px solid #fff',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '10px',
                      outline: 'none',
                      padding: '30px'
                    }
                  }}
                 isOpen={this.state.modal} onRequestClose={() => this.setState({ modal: false})}> 
                                     
                 </Modal>
          </Fragment>

        )
    }
}





export default ProducBox;