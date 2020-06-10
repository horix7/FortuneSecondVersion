import React, {Fragment, Component} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import axios from 'axios';
import Loader from '../UI/preloader'


 class CreateWin extends Component {

    state = {
        winneR: {
            name: null,
            price: null,
            location: null,
            video: null,
            audio: null,
            product: null,
            picture: null,
            quote: null,
        },
        submit: false,
        btnLoad: false

    } 
    publishWinner = e => {
        
        e.preventDefault()
        this.setState({
          btnLoad: true  
        })
        const fd = new FormData()
        fd.append('pro', this.state.winneR.picture)
        console.log(fd)
       axios({
           method: 'post',
           url: localStorage.address + "/image/",
           data: fd
           })
           .then( (response) => {
             this.state.winneR["picture"] = localStorage.address + "/" + response.data.imageUrl
             axios({
                method: 'post',
                url: localStorage.address + "/api/v1/publish/",
                data: this.state.winneR,
                headers: {  
                    "Authorization": localStorage.auth,
                    "Content-Type": "application/json"
                         }
                })
                .then( (response) => {
                    this.setState({
                        btnLoad: false,
                        error: null,
                        mess: "Winner Was Published Successfully"
                    })
        
                  
                }).catch(err => console.error(err))
           }).catch(err => console.error(err))
       

 }
  
 
   handleInputs = (e) => {
    if(e.target.id == "picture") {
        this.state.winneR[e.target.id] = e.target.files[0]
         }else {
            this.state.winneR[e.target.id] = e.target.value
         }
      this.changeSub()
      
    }

    changeSub = () => {
       if(Object.values(this.state.winneR).some(n => n == null)) {
           this.setState({
               submit: false
           })
       }else {
     console.log(this.state)

        this.setState({
            submit: true
        })
       }
    }
  
  render() {
    return(
        <Fragment>
             {this.state.error ? <div id="err" className="errorz">{this.state.error}</div> : null}
             {this.state.mess ? <div id="err" className="successz">{this.state.mess}</div> : null}
            <div>
                <Input 
                 info={{
                    style: "input-field",
                    id: "name",
                    type: "text",
                    label: "Names"
            
                 }}
                 changed={this.handleInputs}
                 />
                <Input 
                 info={{
                    style: "input-field",
                    id: "quote",
                    type: "text",
                    label: "quote",
                    icon:"format_quote"
            
                 }}
                 changed={this.handleInputs}

                />

                <div className="gridTwo">
                    <div className="spaceIn">
                    <Input 
                        info={{
                            style: "input-field",
                            id: "product",
                            type: "text",
                            label: "Won For "
                    
                        }}
                        changed={this.handleInputs}

                        />


                    </div>
                    <div className="spaceIn">
                 <Input 
                 info={{
                    style: "input-field",
                    id: "price",
                    type: "text",
                    label: "At Price"
            
                 }}
                 changed={this.handleInputs}

                />
                    </div>

                </div>


                <div className="gridTwo">
                    <div className="spaceIn">
                    <Input 
                        info={{
                            style: "input-field",
                            id: "video",
                            type: "text",
                            label: "Youtube Link "
                    
                        }}
                 changed={this.handleInputs}

                        />
                    </div>
                    <div className="spaceIn">
                 <Input 
                 info={{
                    style: "input-field",
                    id: "audio",
                    type: "text",
                    label: "Audio Link"
            
                 }}
                 changed={this.handleInputs}

                />
                    </div>

                </div>

                 <div className="gridTwo">
                 <div className="spaceIn">
                 <Input 
                 info={{
                    style: "input-field",
                    id: "location",
                    type: "text",
                    label: "Location",
                    icon:"location_on"
            
                 }}
                 changed={this.handleInputs}

                />

                    </div>
                       <div className="spaceIn">

                <div className="file-field input-field">
                    <div className="btn black">
                        <span>Upload Image</span>
                        <input type="file" id="picture" onChange={this.handleInputs} required/>

                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>

                    </div>
                 </div>
                 </div>


             {!this.state.submit ?  
               <Button 
                 style="btn longBtn  waves-effect waves-light black"
                 text="Publish Winner"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                /> :  <Fragment>
                        {!this.state.btnLoad ?
                         <Button 
                        style="btn longBtn  waves-effect waves-light black"
                        text="Publish Winner"
                        info={{
                            type: "submit",
                            name: "action",
                        
                        }}
                        clicked={this.publishWinner} /> : <Loader/>}
                    </Fragment>}

                    
            </div>

            
        </Fragment>
    )
  }
}

export default CreateWin;