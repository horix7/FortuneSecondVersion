import React, {Component, Fragment} from 'react';
import WinnerBox from '../holders/winnerBox';
import axios from 'axios';
import Loader from '../UI/preloader';


class Winners extends Component {
    state= {
    }

    componentDidMount() {
        this.gelAllWinners()
    }

    gelAllWinners = () => {
        axios({
            method: 'get',
            url: localStorage.address + "/api/v1/winners/",
            headers: {  Authorization: localStorage.auth }
            })
            .then( (response) => {
                console.log(response.data)
                 this.setState({
                    winners: response.data.data,
                    wins: true 
               })
            }).catch(err => console.error(err))

    }

    handleClickedCheckBox = () => {
            let array = []
            let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

            for (let i = 0; i < checkboxes.length; i++) {
                array.push(checkboxes[i].value)
            }
             this.setState({
                 checked: array
             })
    }

     toggle = () =>  {
       let  checkboxes = document.querySelectorAll('#indeterminate-checkbox');
        for(var i=0, n=checkboxes.length;i<n;i++) {
          checkboxes[i].checked = "checked";
        this.handleClickedCheckBox()

        }
      }

      toggle2 = () =>  {
        let  checkboxes = document.querySelectorAll('#indeterminate-checkbox');
         for(var i=0, n=checkboxes.length;i<n;i++) {
           checkboxes[i].checked = null;
         this.handleClickedCheckBox()
 
         }
       }

      openModal2 = () => {
        this.setState({
            openModal: false,
            ticket: false

        })
      }
    
    render() {
        return (
            <Fragment>
                {this.state.wins ? 
                <div className="ProductsHere"> 
                 {this.state.winners.map(n => (
                    <WinnerBox 
                    key={n.id}

                    info={{
                        winners: n.id,
                        names: n.name,
                        wonfor : n.product,
                        image: n.picture,
                        location: n.location,
                        description: n.quote,
                        price: n.price,
                        audio: n.audion,
                        video: n.video

                      }}
                    />
                ))} </div>: <Loader/>}

            </Fragment>
        )
    }
}

export default Winners;