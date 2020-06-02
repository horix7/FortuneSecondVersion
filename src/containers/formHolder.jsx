import React from 'react';


let FormHolder = props => {

        return (
            <div className="formHolder">
                <i className="material-icons">keyboard_backspace</i>
                {props.children}
            </div>
        )
}

export default  FormHolder