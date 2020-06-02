import React, {Component} from 'react';
import Button from '../UI/button';
import Par from '../UI/paragraphs';
import Image from '../UI/image';


class WinnerBox extends Component {

    state={

    }

    render() {

        return (

            <div className="winnerBox">
               
               <div className="central">
               <Image 
                    info={{
                        class: "cirke", // image 
                        type: "squareImg2", //bidImage  squareImg
                        src: this.props.info.image

                    }}
                    

               />
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
                            text:this.props.info.wonfor
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
                        style="btn-small  waves-effect waves-light  blue darken-3"
                        text="watch Video"
                        info={{
                            type: "submit",
                            name: "action",
                    
                        }}
                   /> 
                        </div>

                        <div>
                        <Button 
                        style="btn-small  waves-effect waves-light  blue darken-3"
                        text="listen Audio"
                        info={{
                            type: "submit",
                            name: "action",
                    
                        }}
                   /> 
                        </div>
                    </div>

            </div>
        )
    }
}


export default WinnerBox;