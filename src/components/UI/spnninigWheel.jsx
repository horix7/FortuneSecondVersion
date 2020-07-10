import React, {useState} from 'react'
import arrowLeft from '../../images/arrow-left.png'
import Tables from './tables'

class Spinner extends React.Component {

    state = {
        currentTick: null,
        tickets: Object.values([...this.props.spinningTicks]),
        checkedRTick: [],
        spinningNow: false,
        lossingTick: [1200,2000,1800,2120],
        winningTick: [1500,3200,2800,2520],
        spinningNow: false,
        rotateDegree: 9000,
        rotateDegree2: 4500,
        currentIndex: 1,

    }

    

     myfunction = (n,mm) => {
        document.querySelector('button[name="' + 'spin' + '"]').disabled = true;
        let nn = Math.floor(Math.random() * 4)
        this.state.lossingTick[nn]
        this.setState({
            rotateDegree: this.state.rotateDegree * 2,
            rotateDegree2: this.state.rotateDegree2 * 3
        })

        let degrerotate = null
        if (this.props.luckies.some(y => n == y)) {
            degrerotate = this.state.rotateDegree 
            } else {
                degrerotate = this.state.rotateDegree2
            }

        document.getElementById('box').style.transform = "rotate(" + degrerotate + "deg)"
       
        var element = document.getElementById('mainbox');
        element.classList.add('animate');
        setTimeout(() => {
            // element.classList.remove('animate');
            let currentState = {...this.state}

            this.checkSecone(n,this.props.luckies.some(y => n == y))
            this.setState({
                spinningNow: true,
                currentTick: this.state.tickets[0],
                currentIndex:  currentState.currentIndex + 1 
            })

            if(this.state.tickets.length == 0) {
                // document.querySelector('button[name="' + 'spin' + '"]').disabled = true;
            }else {
            document.querySelector('button[name="' + 'spin' + '"]').disabled = false;
            document.querySelector('button[name="' + 'spin' + '"]').click()

            }


           
        }, 6000); 

    }


     checkSecone = (n, lost) => {
        let man = this.state.checkedRTick
       

        if(!lost) {
            man.push({
                "Winning Tickets": null,
                "Lost Tickets": n 
            })
        } else {
            man.push({
                "Winning Tickets": n,
                "Lost Tickets": null
            })
        }

        let Ntickets = this.state.tickets.filter(x => x !== n)

        this.setState({
            tickets: [...new Set(Ntickets)],
            checkedRTick: [...new Set(man)]

        })

    }

 render() {
       
 let spinner = (
    <div className=" ">
<h6 style={{textTransform: "uppercase", fontWeight: "bold", textAlign: "center"}}>Ticket {this.state.currentIndex + " " + "=" + " " } {this.state.currentTick ||  this.state.tickets[0]}</h6>

    <div className="bodySpin">

    <div id="mainbox" className="mainbox">
 <div id="box" className="box">
     <div className="box1">
         <span className="alspan span1" style={{
             border: "10px solid black",
             backgroundColor: "red"
         }}><b>LOSE</b></span>
         <span className="alspan span2"
             style={{
                 border: "10px solid black",
                 backgroundColor: " rgb(65, 65, 252)"
             }}><b>WIN</b></span>

         <span className="alspan span3"
             style={{
                 border: "10px solid black",
                 backgroundColor: "rgb(255, 41, 41)"
             }}><b>LOSE</b></span>
         
         <span className="alspan span4"
             style={{
                 border: "10px solid black",
                 backgroundColor: " rgb(31, 31, 252)"
             }}><b>WIN</b></span>
     </div>
     <div className="box2">
         <span className="alspan span1"
             style={{
                 border: "10px solid black",
                 backgroundColor: "rgb(95, 0, 0)"
             }}><b>LOSE</b></span>
         <span className="alspan span2"
             style={{
                 border: "10px solid black",
                 backgroundColor: "rgb(0, 0,114)"
             }}><b>WIN</b></span>
         <span className="alspan span3"
             style={{
                 border: "10px solid black",
                 backgroundColor: "rgb(247, 84, 84)"
             }}><b>LOSE</b></span>
         <span className="alspan span4"   style={{
                 border: "10px solid black",
                 backgroundColor: "blue"
             }}><b>WIN</b></span>
     </div>
 </div>

 <button className="spin pulse" name="spin" onClick={() => this.myfunction(this.state.currentTick || this.state.tickets[0], 2)}> <p style={{transform:"rotate(90deg)"}}>SPIN</p></button>
</div>

    </div>
</div>

)

let Ticks = (
    <div className="twoGidz">
      
    <div className="ticketsBuy">
          {this.state.tickets.map(n => (<button key={n} onClick={() => {
              this.setState({
                  currentTick: n
              })
          }} className="btn">{n}</button>))}
      </div>

      <div className="ticketsBuy"> 
      <Tables
              heads={["Winning Tickets", "Lost Tickets"]}
              information={this.state.checkedRTick} />
      </div>
    
    </div>
)
    return(
       
        <React.Fragment>

            
{!this.state.tickets.length < 1 ?  <div className="twoGridz">  

      {spinner}
        {Ticks}
        </div>  : <div className="ticketsDsi">   
        {Ticks}
        </div> }

        </React.Fragment>
        
        )
}
}



export default Spinner