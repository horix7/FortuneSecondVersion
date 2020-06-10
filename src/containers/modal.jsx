import React from 'react';


let Modal = props => {

        return (
            <div id="err" className="formHolder">
                <div className="backIco" onClick={props.clecked}>
                <i className="material-icons" >keyboard_backspace</i>

                </div>
                <div>
                {props.children}
                </div>

            </div>
        )
}

export default  Modal