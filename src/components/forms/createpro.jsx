import React, {Fragment} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';



let createPro = props => {

    const M = window.M

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
      });


    return(
        <Fragment>
            <div>
            <Input 
                 info={{
                    style: "input-field",
                    id: "product",
                    type: "text",
                    label: "Product Name"
            
                 }}
                 />

            <div className="gridTwo">

                     <div className="spaceIn">
            <Input 
                 info={{
                    style: "input-field",
                    id: "user1",
                    type: "number",
                    label: "Bid Target",
            
                 }}
                 />

            </div>
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

                    </div>

                <div className="spaceIn">


                   <Input 
                 info={{
                    style: "input-field",
                    id: "time2",
                    type: "number",
                    label: "Ticket Price",
            
                 }}
                />
                    </div>

                    </div>


                <Button 
                 style="btn longBtn waves-effect waves-light black"
                 text="Submit"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                />

             
            </div>
        </Fragment>
    )
}

export default createPro;