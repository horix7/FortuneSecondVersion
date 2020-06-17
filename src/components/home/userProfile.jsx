import React, {Component, Fragment} from 'react';
import Tables from '../UI/tables';
import Button from '../UI/button';
import Image from '../UI/image';
import Winners from '../home/winners'
import axios from 'axios';
import Loader from '../UI/preloader';
import CreatePro from '../forms/productReq';
import Form from '../../containers/formHolder'


if(localStorage.currency == null ) {
  localStorage.setItem("currency", JSON.stringify({
    currency: "USD",
    rate: 1
  }))
}


class Profile extends Component {

    state={
      image: null,
      img: false,
      loadUpload: false,
      proReq: false
    }


    formatData = (arr) => {
      arr.map(n => {
        return { product: n.product, date: n.time.toString().split('T')[0],price: n.revenue, tickets: n.fortunes}
      })
    }

    componentDidMount() {
      const M = window.M
      M.AutoInit();
  }

  changeUserPic = e => {
      e.preventDefault()
      this.setState({
        loadUpload: true 
        
      })
    const fd = new FormData()
    fd.append('pro', this.state.image)
    console.log(fd)
   axios({
       method: 'post',
       url: localStorage.address + "/image/",
       data: fd
       })
       .then( (response) => {
       let UploadImg = localStorage.address + "/" + response.data.imageUrl
       let dataSent = {
         picture: UploadImg,
         id: JSON.parse(localStorage.details).id
       }

       axios({
        method: 'put',
        url: localStorage.address + "/api/v1/propic/",
        data: dataSent,
        headers: {
          Authorization: localStorage.auth
        }
        })
        .then( (response) => {
          this.setState({
            loadUpload: false 
            
          })
          
          this.props.refreshData()
        })
        .catch(err => console.err(err))
         
       }).catch(err => console.error(err))
  }

  

  handleInputs = (e) => {
   this.setState({
   image: e.target.files[0],
   img: true

   })

    }

    openProReq = () => {
      this.setState({
        proReq: !this.state.proReq
      })
    }
    
    render() {
      let fetchDataArr =  this.props.dataTable.map(n => {
        return { product: n.product, date: n.time.toString().split('T')[0],price: n.revenue, tickets: n.fortunes}
      })
console.log(fetchDataArr)

        return (
            <Fragment>
           {this.state.proReq ? <Form
           clecked={this.openProReq}>
             <CreatePro />
           </Form>
           :  <Fragment>


           {this.state.loadUpload ? <Loader /> : null}
             <div className="ProfileInfo">
                 <div className="imageCenter">
                    {this.props.image ? <Image 
                      info={{
                         class: "cirke2",
                         type: "squareImg", 
                         wid: "120px",
                         height: "120px",
                         src: this.props.image
                       }}
                       /> :  <form className="gridTwo">
                          <div className="file-field input-field">
                       <div className="btn black">
                           <span>Select Your Profile Picture</span>
                           <input type="file" id="picture" onChange={this.handleInputs} className="validate" required/>
                       </div>
                       <div className="file-path-wrapper">
                           <input className="file-path validate"  type="text" />
                       </div>
   
                       </div>
                         <div className="spaceIn">
                        {this.state.img ?  <button 
                         className="btn  black-text white" 
                         style={{width: "150px", height:"30px", marginTop:"30px", marginLeft:"10px"}}
                         onClick={this.changeUserPic}>Upload</button> : <button className="btn black-text white"
                         style={{width: "150px", height:"30px", marginTop:"30px", marginLeft:"10px"}}
                         >Upload</button>}

                         </div>
                         </form>
   }

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
                 <button className="btn">  Download Bids Data</button>
                 <button className="btn" onClick={this.props.winnners}> View Winners</button>
                 {JSON.parse(localStorage.details).vendor ? <button className="btn" onClick={this.openProReq}> Create A Product</button> : null}

                 
                 </div>
                </div>
             </div>
             </Fragment>
}
            </Fragment>

        )
    }
}

export default Profile;