

import React, {Component, Fragment} from 'react';




class Slider extends Component {
    state={
        current: 0
    }

  componentDidMount() {
      let time = setInterval(() => this.changeCurrent(), parseInt(this.props.timer))
  }
    changeCurrent() {

        let newState = {...this.state}
        if(this.props.displayIn.length - 1 > newState.current) {
            this.setState({
                current: newState.current + 1
            })
        }else {
            this.setState({
                current: 0
            })
        }
             
    }

    backCurrent() {
        let newState = {...this.state}
        console.log(newState)
        if(newState.current !== 0) {
            
            this.setState({
                current: newState.current - 1
            })

        }
        }       
 
    render() {


      

        return (

          <Fragment>
              <div className="gridSlide">
              <i className="material-icons hideIco" onClick={this.backCurrent.bind(this)}>keyboard_arrow_left</i>
              <div className="proSlider">
                {this.props.displayIn[this.state.current]}
              </div>
              <i className="material-icons hideIco" onClick={this.changeCurrent.bind(this)}>keyboard_arrow_right</i>
              </div>
              
          </Fragment>


        )
    }
}

export default Slider;