import React, {Component, Fragment} from 'react';


class Button extends Component {
    state = {

    }



    render() {

        return (
            <Fragment>

              <button onClick={this.props.clicked} className={this.props.style} type={this.props.info.type} name={this.props.info.name}>{this.props.text}
                   {this.props.info.icon ? <i className={this.props.info.icon.class}>{this.props.info.icon.icon}</i> : null }
                </button>
                
            </Fragment>

        )
    }
}


export default Button;


