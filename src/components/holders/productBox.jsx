import React, {Component} from 'react';
import Button from '../UI/button';
import Image from '../UI/image';
import Par from '../UI/paragraphs';


class ProducBox extends Component {

    state= {

    }

    render() {

        return (

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
                            text: this.props.info.price
                          }}
                        />
                        <div className="gridTwo topBottom">
    
                          <div>

                        <Par 
                         info={{
                            type:"winnersPara", //homeText homePara
                            text:this.props.info.winners
                          }}
                        />
                          </div>

                          <div>

                    <Button
                     style="btn  waves-effect waves-light light-green darken-2"
                     text="Bid Now"
                       info={{
                         type: "submit",
                         name: "action",
                        
                       }}
                        />
                          </div>

                          </div>


                <Par 
                 info={{
                    type:"winnersPara", //homeText homePara
                    text: this.props.info.fortunes
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

        )
    }
}





export default ProducBox;