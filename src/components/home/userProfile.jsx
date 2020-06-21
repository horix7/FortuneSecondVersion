import React, {Component, Fragment} from 'react';
import Tables from '../UI/tables';
import Button from '../UI/button';
import Image from '../UI/image';
import Winners from '../home/winners'
import axios from 'axios';
import Loader from '../UI/preloader';
import CreatePro from '../forms/productReq';
import Form from '../../containers/formHolder'
import SImage from '../../images/22-223965_no-profile-picture-icon-circle-member-icon-png.png'
import PaymentOption2 from '../../images/PaymentOptions3.png'

if(localStorage.currency == null ) {
  localStorage.setItem("currency", JSON.stringify({
    currency: "$",
    curren: "USD",
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

     //  realPro bidata  realVend  allusers 
     downLoadData = (objArray) => {
      let items = objArray;
            const replacer = (key, value) => value === null ? '' : value; 
            const header = Object.keys(items[0]);
            let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
            csv.unshift(header.join(','));
            csv = csv.join('\r\n');
    
            alert("Press Ok To DownLoad Csv")
    
            let downloadLink = document.createElement("a");
            let blob = new Blob(["\ufeff", csv]);`    `
            let url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = `${parseInt(Math.floor(Math.random() * 100678700000) + 1000000).toString()}fortuneData.csv`;  //Name the file here
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
    
    }
    

  changeUserPic = e => {
      e.preventDefault()
      this.setState({
        loadUpload: true 
        
      })
    const fd = new FormData()
    fd.append('pro', this.state.image)
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

        return (
            <Fragment>
           {this.state.proReq ?
            <div className="homeform">

            <Form
           clecked={this.openProReq}>
             <CreatePro />
           </Form>
           </div>

           :  <Fragment>


           {this.state.loadUpload ? <Loader /> : null}
             <div className="ProfileInfo">
                 <div className="imageCenter">
                    {this.props.image ? 
                    <form className="gridTwoe1">

                    <Image 
                      info={{
                         class: "cirke2",
                         type: "squareImg", 
                         wid: "120px",
                         height: "120px",
                         src: this.props.image
                       }}
                       /> 
                       <div className=" paddsBttom">
                       <div className="file-field">
                           <span>Update Profile</span>
                           <input type="file" id="picture" onChange={this.handleInputs} className="validate" required/>
                       </div>
   
                       </div>
                         <div className="">
                        {this.state.img ?  <button 
                         className="btn  white-text light-green darken4" 
                         style={{width: "150px", height:"30px", marginTop:"30px", marginLeft:"10px"}}
                         onClick={this.changeUserPic}>Upload</button> : <button className="btn white-text light-green darken4"
                         style={{display: "none", height:"30px", marginTop:"30px", marginLeft:"10px"}}
                         >Upload</button>}

                         </div>
                    </form>

                         :  <form className="gridTwoe1">
                      
                      <div>
                      <img src={SImage}  width="100px" height="100px" alt=""/>
                      </div>
                      
                       <div className=" paddsBttom">
                       <div className="file-field">
                           <span>Choose Profile</span>
                           <input type="file" id="picture" onChange={this.handleInputs} className="validate" required/>
                       </div>
   
                       </div>
                         <div className="">
                        {this.state.img ?  <button 
                         className="btn  white-text light-green darken4" 
                         style={{width: "150px", height:"30px", marginTop:"30px", marginLeft:"10px"}}
                         onClick={this.changeUserPic}>Upload</button> : <button className="btn white-text light-green darken4"
                         style={{display: "none", height:"30px", marginTop:"30px", marginLeft:"10px"}}
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
                    


                 <div className="flexBtn">
                 <button className="btn" onClick={() => {
                  if(this.props.dataTable.length < 1) {
                    alert("You have No Bids Data For now")
                  } else {
                    this.downLoadData(this.props.dataTable)
                  }
                 
                 }}>  Download Bids Data</button>
                 <button className="btn" onClick={this.props.winnners}> View Winners</button>
                 {JSON.parse(localStorage.details).vendor ? <button className="btn" onClick={this.openProReq}> Create A Product</button> : null}

                 
                 </div>
                 <img src={PaymentOption2} alt="" width="100%" className="payOpt1" style={{
                textAlign: "center"
              }}/>

              
             
                
              {this.props.dataTable.length > 1 ?
                <Fragment>
                 <h6 className="topBottom">Your Bidding History </h6>
                 <Tables 
                       heads={Object.keys(fetchDataArr[0])}
                       information={fetchDataArr}
                 />  
                </Fragment>
                 : <h6 className="topBottom">No Bidding History </h6>}
                </div>
             </div>
             </Fragment>
}
            </Fragment>

        )
    }
}

export default Profile;