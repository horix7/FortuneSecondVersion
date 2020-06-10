import React, {useState} from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root')

let tickets = props => {
    const [modal, setModal] = useState(false)
    const [Momo, setMomo] = useState("checked")
    const [Card, setCard] = useState(null)
    const [Airtel, setAirtel] = useState(null)


    const [payment, setPayment] = useState("momo")

    let handleRadioOption = () => {
        let checkboxes = document.querySelectorAll('input[type=radio]:checked')

        setPayment(checkboxes[0].value)
        
}
    let total = props.chosen.length * props.price

    let setRadion = (id) => {
        if(id === "M") {
            setMomo("checked")
            setCard(null)
            setAirtel(null)


        }else if (id === "A") {
            setAirtel("checked")
            setMomo(null)
            setCard(null)

        } else if (id === "C") {
            setCard("checked")
            setMomo(null)
            setAirtel(null)
        }
    }
        return (    
            <div id="err" className="formHolder">
                <div className="backIco" onClick={props.clecked}>
                <i className="material-icons" >keyboard_backspace</i>

                </div>
                <div className="tickets">
                    <div>
                    {props.children}
                    </div>
                    <div>
                     {props.chosen.map(n => (
                           <div key={n} className="chip">
                            {n}
                         </div>
                     ))}

                     <div className="checkout">
                         <div className="total">
                           Total {total} rwf
                         </div>
                         <button className="btn blue" onClick={() => setModal(true)}>Continue To Checkout</button>
                     </div>
                    </div>
                </div>

                <Modal
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.404)'
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #fff',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '50px',
                      outline: 'none',
                      padding: '20px'
                    }
                  }}
                 isOpen={modal} onRequestClose={() => setModal(false)}>
                    <div>
                    <form action="#" className="optionPay">
                        <p>
                        <label>
                            <input name="group1" type="radio" checked={Momo} onChange={() => setRadion("M")} />
                            <span>MTN Money </span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input name="group1" type="radio" onChange={() => setRadion("A")} checked={Airtel}/>
                            <span>Airtel-Tigo s Money </span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input class="with-gap" name="group1" type="radio" onChange={() => setRadion("C")}  checked={Card}/>
                            <span>Credit Card </span>
                        </label>
                        </p>
                       
                    </form>
                    </div>
                </Modal>
            </div>
        )
}

export default  tickets