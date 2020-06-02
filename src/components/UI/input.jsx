import React, {Component, Fragment} from 'react';


class Input extends Component {
    state = {

    }



    render() {

        return (

            <Fragment>
                <div className={this.props.info.style}>
                {this.props.info.icon ? <i className="material-icons prefix">{this.props.info.icon}</i> : null}
                 <input id={this.props.info.id} type={this.props.info.type} className="validate" />
                    <label htmlFor={this.props.info.id}>{this.props.info.label}</label>
                </div>
            </Fragment>

        )
    }
}


export default Input;


