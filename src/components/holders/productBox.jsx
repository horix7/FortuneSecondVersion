import React, {Component, Fragment} from 'react';
import Button from '../UI/button';
import Image from '../UI/image';
import Par from '../UI/paragraphs';
import Counter from '../holders/counter';

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
                            text: "Bidding Price" + " " + this.props.info.price
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
                     style="btn  waves-effect waves-light light-green darken-2"
                     text="Bid Now"
                       info={{
                         type: "submit",
                         name: "action",
                        
                       }}
                       clicked={this.props.showTickets}
                        /> :
                         <Button
                     style="btn  waves-effect waves-light light-green darken-2"
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
                 style="btn  waves-effect waves-light  blue darken-3"
                 text="share now"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                   />
            </div>
          </div> : null
          }</Fragment>

        )
    }
}





export default ProducBox;