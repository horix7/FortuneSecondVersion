import React from 'react';


let FormHolder = props => {
    location.href="#topz"
        return (
            <div id="topz" className="formHolder" onLoad={() => location.href="#topz"}>
                <div className="backIco" onClick={props.clecked}>
                <i className="material-icons">keyboard_backspace</i>

                </div>
                <form>
                {props.children}
                </form>

            </div>
        )
}

export default  FormHolder