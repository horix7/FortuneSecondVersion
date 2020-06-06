import React, {Component, Fragment} from 'react';
import Tables from '../UI/tables';
import Button from '../UI/button';
import Image from '../UI/image';



class Profile extends Component {

    state={
      
    }


    formatData = (arr) => {
      arr.map(n => {
        return { product: n.product, date: n.time.toString().split('T')[0],price: n.revenue, tickets: n.fortunes}
      })
    }

    render() {
      let fetchDataArr =  this.props.dataTable.map(n => {
        return { product: n.product, date: n.time.toString().split('T')[0],price: n.revenue, tickets: n.fortunes}
      })
console.log(fetchDataArr)

        return (
            <Fragment>

                <div className="ProfileInfo">
                    <div className="imageCenter">
                        <Image 
                         info={{
                            class: "cirke2",
                            type: "squareImg", 
                            wid: "100px",
                            height: "100px",
                            src: "data:image/jpeg;base64,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"
                          }}
                          />

                    </div>

                   <div>
                   <div className="userInfo">
                        <div>
                            <ul>
                    {Object.keys(this.props.info.one).map(n => <li  key={n}> <span>{n}</span> {this.props.info.one[n]}</li>)}
                                
                            </ul>

                        </div>

                        <div>
                            <ul>
                    {Object.keys(this.props.info.two).map(n => <li key={n}> <span>{n}</span> {this.props.info.two[n]}</li>)}

                            </ul>
                        </div>
                    </div>
                       


                   {this.props.dataTable.length > 1 ?
                   <Fragment>
                    <h6 className="topBottom">Your Bidding History </h6>
                    <Tables 
                          heads={Object.keys(fetchDataArr[0])}
                          information={fetchDataArr}
                    />  
                   </Fragment>
                    : <h6 className="topBottom">No Bidding History </h6>}

                    <div className="flexBtn">
                    <button className="btn btn2 black left">  Download Bids Data</button>
                    <button className="btn btn2 black "> View Winners</button>
                    
                    </div>
                   </div>
                </div>

            </Fragment>

        )
    }
}

export default Profile;