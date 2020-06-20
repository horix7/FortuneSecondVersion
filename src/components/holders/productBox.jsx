import React, {Component, Fragment} from 'react';
import Button from '../UI/button';
import Image from '../UI/image';
import Par from '../UI/paragraphs';
import Counter from '../holders/counter';
import Modal from 'react-modal';
import WhatsApp from '../../images/iconfinder_whatsapp_287520.png'
import Ig from '../../images/6225234-download-instagram-logo-icon-free-png-transparent-image-and-clipart-instagram-symbol-transparent-400_400_preview.png'
import Tel from '../../images/iconfinder_telegram_3069742.png'
import Fb from '../../images/facbook.png'



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
     if(typeof this.props.openModl == "function") {
      this.props.openModl()
     } 
      
    }

    returnNum = (num) => {
      if (num == null) {
        return 0
      } else {
        return JSON.parse(num).length
      }
    }

    
    render() {
      if(this.returnNum(this.props.info.sold) ===  parseInt(this.props.info.fortunes)) {
        this.props.onFinish()
      }
     
      let  numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
        
        return (
          <Fragment>

   {!this.state.openModal ? <div>
         

            <Counter date={this.props.info.date} hour={this.props.info.hour}  onFinish={this.props.onFinish}/>
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
                            text: "Ticket Price = " +  " " +  numberWithCommas(JSON.parse(localStorage.currency).currency + (parseFloat(this.props.info.price) / JSON.parse(localStorage.currency).rate).toFixed(2))
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
                     style={this.props.text ? "btn  green darken-2" :"btn  light-green darken-2"}
                     text={this.props.text ? this.props.text : "Bid Now"}
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
                    text:  this.returnNum(this.props.info.sold) + " " + '/'+ this.props.info.fortunes + " " + "fortunes remains"
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
                      top: '20%',
                      left: '10%',
                      right: '10%',
                      height: "100px",
                      border: '1px solid #fff',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '10px',
                      outline: 'none',
                      padding: '30px'
                    }
                  }}
                 isOpen={this.state.modal} onRequestClose={() => {
                   this.setState({ modal: false})
                    if(typeof this.props.closeMdl == "function") {
                      this.props.closeMdl()
                    }
                  }
                   }> 
                    <div class="fixed-action-btn">   
                    <a className="btn-floating black" onClick={
                      () => {
                        this.setState({ modal: false})
                         if(typeof this.props.closeMdl == "function") {
                           this.props.closeMdl()
                         }
                       }
                        
                    }>
                        <i className="material-icons">clear</i>
                    </a>
                    </div>
                 {/* https://telegram.me/share/url?url=<URL><TEXT></TEXT> */}
                <div className="picturesShare">

                 <a href="#" target="_blank"
                onClick={() => {
                  window.open(
                    'https://telegram.me/share/url?url='+location.href + "&text=" + " Never has such a global guarantee platform been made that enables you to have the opportunity to get your heart wishes for as low as $1.Don’t Miss out! Check it out now! www.fortuneauction360" )
                  return false;}}>
                <img src={Tel} width="35px" height="35px" alt=""/>

              </a>
                   <a href="#" target="_blank"
                onClick={() => {
                  window.open(
                    'whatsapp://send?text='+ " Never has such a global guarantee platform been made that enables you to have the opportunity to get your heart wishes for as low as $1.Don’t Miss out! Check it out now! www.fortuneauction360" + encodeURIComponent(location.href))
                  return false;}}>
                <img src={WhatsApp} width="35px" height="35px" alt=""/>

              </a>
                 <a href="#" target="_blank"
                onClick={() => {
                  window.open(
                    'https://www.facebook.com/sharer/sharer.php?u='+" Never has such a global guarantee platform been made that enables you to have the opportunity to get your heart wishes for as low as $1.Don’t Miss out! Check it out now! www.fortuneauction360" + comencodeURIComponent(location.href), 
                    'facebook-share-dialog', 
                    'width=626,height=436')
                  return false;}}>
                <img src={Fb} width="35px" height="35px" alt=""/>

              </a>

              <a href="#" target="_blank"
              onClick={() => {
                window.open(
                  'https://www.instagram.com/?url='+ " Never has such a global guarantee platform been made that enables you to have the opportunity to get your heart wishes for as low as $1.Don’t Miss out! Check it out now! www.fortuneauction360"  +encodeURIComponent(location.href))
                    return false;}}
                >
                  <img src={Ig} width="35px" height="35px" alt=""/>

              </a>
              </div>


                 </Modal>
          </Fragment>

        )
    }
}





export default ProducBox;