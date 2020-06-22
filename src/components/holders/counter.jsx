import React from 'react';

class Counter extends React.Component {

    state={
        timer: true
    }

    componentDidMount() {
        this.displayCounter(this.props.date, this.props.hour)
    }



     displayCounter = ( date, hour) => {

        let dateToDo = [date, hour].join(' ')
    
      let countDownDate = new Date(dateToDo).getTime();
      
      let x = setInterval(() => {
      
        // Get today's date and time
        let now = new Date().getTime();
      
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let millSec =  Math.floor(distance % 1000) ;
    
      
      this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            millSec: millSec
      })
        
        if (distance <= 0) {
          this.setState({
              timer: false
          })

          this.props.onFinish("expired")
        }
      }, 10);
      }

    render() {

        return (
           <React.Fragment>
          {this.state.timer ? <div  className="Counter">
               <span>DeadLine :</span>
                <span>{this.state.days}</span> :
                <span>{this.state.hours}</span> :
                <span>{this.state.minutes}</span> :
                <span>{this.state.seconds}</span> :
                <span>{this.state.millSec}</span> 

            </div> : <div> Auction Expired </div>}
           </React.Fragment>
        )
    }
}


export default Counter;