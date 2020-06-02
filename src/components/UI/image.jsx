import React, {Component, Fragment} from 'react';


class Image extends Component {
    state = {

    }



    render() {

        return (

            <div className={this.props.info.type}>
                <img width={this.props.info.wid} height={this.props.info.height} className={this.props.info.class} src={this.props.info.src}></img> 
            </div>
                            

        )
    }
}


export default Image;


