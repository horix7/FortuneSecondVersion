import React, {Component} from 'react';
import Button from '../UI/button';
import Par from '../UI/paragraphs';
import Image from '../UI/image';
import Modal from 'react-modal';
import VideoPlayer from 'react-player'
Modal.setAppElement('#root')


class WinnerBox extends Component {

    state={
      modal: false,

    }


      opneModal = (info) => {
        this.setState({
          modal: true,
          display: info
        })
      }

    render() {

      let detAIls = this.state.display

        return (

          <React.Fragment>
              <div className="winnerBox">
               
               <div className="central">
               <img src={this.props.info.image} alt="" width="100px" height="100px" className="circle"/>
                    
               </div>
                    <Par 
                         info={{
                            type:"bidName", //homeText homePara
                            text:this.props.info.names
                          }}
                        />

                    <Par 
                         info={{
                            type:"winnersPara", //homeText homePara
                            text:this.props.info.wonfor + " " + "At " + " " + this.props.info.price.toString() 
                          }}
                        />

                          <Par 
                         info={{
                            type:"winnersPara", //homeText homePara
                            text:this.props.info.location
                          }}
                        />
                
                <Par
                info={{
                    type:"smallPara", //homeText homePara
                    text:this.props.info.description
                  }}
               />
                    <div className="gridTwo topBottom">
                        <div>
                        <Button 
                        style="btn-small blue darken-3"
                        text="watch Video"
                        info={{
                            type: "submit",
                            name: "action",
                    
                        }}
                        clicked={() => this.opneModal(this.props.info.video)}

                   /> 
                        </div>

                        <div>
                        <Button 
                        style="btn-small blue darken-3"
                        text="listen Audio"
                        info={{
                            type: "submit",
                            name: "action",
                    
                        }}
                        clicked={() => this.opneModal(this.props.info.audio)}
                   /> 
                        </div>
                    </div>
                      
            </div>
            
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
                     bottom: "100px",
                      border: '1px solid rgba(0, 0, 0, 0.304)',
                      background: 'rgba(0, 0, 0, 0.304)',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '10px',
                      outline: 'none',
                      padding: '30px',
                      textAlign: "center"
                    }
                  }}
                 isOpen={this.state.modal} onRequestClose={() => this.setState({ modal: false})}> 
                 <div className="displayVidz">
                   <VideoPlayer url={detAIls}/>
                  
                 </div>
                  <div class="fixed-action-btn">   
                    <a className="btn-floating black" onClick={() => this.setState({modal : false})}>
                        <i className="material-icons">clear</i>
                    </a>
                    </div>
                 </Modal>
          </React.Fragment>
        )
    }
}


export default WinnerBox;