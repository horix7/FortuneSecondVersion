import React, {Fragment, Component} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';



class ReqPro  extends Component{

    state={
        account: false
    }

   componentDidMount() {
    const M = window.M

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
      });

   }

   changeForm = () => {
    let newState = {...this.state}
    this.setState({
        account: !newState.account
    })
}
   render() {
    return(
        <Fragment>
              <div className="gridTwo">

                <button className="btn white black-text" onClick={this.changeForm}>
                   {!this.state.account ? <i className="material-icons left ">radio_button_checked</i> : <i className="material-icons left">radio_button_unchecked</i> }
                   New Product
                </button>

                <button className="btn white black-text" onClick={this.changeForm}>
                   {this.state.account ? <i className="material-icons left">radio_button_checked</i> : <i className="material-icons left">radio_button_unchecked</i> }
                    Used Product
                </button>

            </div>
            <div>
            <Input 
                 info={{
                    style: "input-field",
                    id: "product",
                    type: "text",
                    label: "Product Name"
            
                 }}
                 />


        
            <div className="spaceIn">

                <Input 
                 info={{
                    style: "input-field",
                    id: "user",
                    type: "number",
                    label: "Number Of Winners",
            
                 }}
                 />

                 </div>

                 <div className="gridTwo">
                     <div className="spaceIn">
                     <Input 
                 info={{
                    style: "input-field",
                    id: "end",
                    type: "date",
                    label: "End Date"
            
                 }}
                 />

                     </div>
                     <div className="spaceIn">
                     <Input 
                 info={{
                    style: "input-field",
                    id: "time",
                    type: "time",
                    label: "End Hour",
            
                 }}
                />

                     </div>
                

              

                </div>

                <div className="gridTwo">

                <div className="spaceIn">

                <div className="file-field input-field">
                    <div className="btn black">
                        <span>Upload Image</span>
                        <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>

                    </div>

                    {
                     this.state.account ?
                        <div className="spaceIn">

                        <div className="file-field input-field">
                            <div className="btn black">
                                <span>Proof Docs</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
        
                            </div>   </div>  : null
                    }
                    </div>

                <div className="spaceIn">


                   <Input 
                 info={{
                    style: "input-field",
                    id: "time2",
                    type: "number",
                    label: "Selling Price",
            
                 }}
                />
                    </div>

                    </div>


                <Button 
                 style="btn longBtn waves-effect waves-light black"
                 text="Submit For Approval"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                />

             
            </div>
        </Fragment>
    )
   }
}

export default ReqPro;