import React, {Fragment} from 'react';
import Input from '../UI/input';
import Button from '../UI/button';



let createWinner = props => {

    return(
        <Fragment>
            <div>
                <Input 
                 info={{
                    style: "input-field",
                    id: "user",
                    type: "text",
                    label: "Names"
            
                 }}
                 />
                <Input 
                 info={{
                    style: "input-field",
                    id: "pass1",
                    type: "text",
                    label: "quote",
                    icon:"format_quote"
            
                 }}
                />

                <div className="gridTwo">
                    <div className="spaceIn">
                    <Input 
                        info={{
                            style: "input-field",
                            id: "pass2",
                            type: "text",
                            label: "Won For "
                    
                        }}
                        />
                    </div>
                    <div className="spaceIn">
                 <Input 
                 info={{
                    style: "input-field",
                    id: "ss2",
                    type: "text",
                    label: "At Price"
            
                 }}
                />
                    </div>

                </div>


                <div className="gridTwo">
                    <div className="spaceIn">
                    <Input 
                        info={{
                            style: "input-field",
                            id: "pa2",
                            type: "text",
                            label: "Youtube Link "
                    
                        }}
                        />
                    </div>
                    <div className="spaceIn">
                 <Input 
                 info={{
                    style: "input-field",
                    id: "pss2",
                    type: "text",
                    label: "Audio Link"
            
                 }}
                />
                    </div>

                </div>

                 <div className="gridTwo">
                 <div className="spaceIn">
                 <Input 
                 info={{
                    style: "input-field",
                    id: "32",
                    type: "text",
                    label: "Location",
                    icon:"location_on"
            
                 }}
                />

                    </div>
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
                 </div>


                <Button 
                 style="btn longBtn  waves-effect waves-light black"
                 text="Publish Winner"
                   info={{
                     type: "submit",
                     name: "action",
                    
                   }}
                />

             
            </div>

            
        </Fragment>
    )
}

export default createWinner;