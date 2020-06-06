import React, {Component, Fragment} from 'react';


class Loader extends Component {
    state = {

    }



    render() {

        return (
            <Fragment>
          { 
          this.props.type === "circle" ?     
            <div className={this.props.style}>
                <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
                </div>
            </div>
            : 
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
}
            </Fragment>

        )
    }
}


export default Loader;


