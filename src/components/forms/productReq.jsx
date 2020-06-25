import React, { Fragment, Component } from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import axios from 'axios'
import Loader from '../UI/preloader'


class CreatePro extends Component {

    state = {
        productR: {
            name: null,
            price: null,
            date: null,
            hour: null,
            type: null,
            picture: null,
            winners: null
        },
        submit: false
    }

    ComponentDidMount() {
        const M = window.M

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });

    }


    uploadImage = () => {
        const fd = new FormData()
        fd.append('pro', this.state.productR.picture)
        axios({
            method: 'post',
            url: localStorage.address + "/image/",
            data: fd
        })
            .then((response) => {
                this.state.winneR["picture"] = localStorage.address + "/" + response.data.imageUrl

            }).catch(err => console.error(err))
    }

    handleInputs = (e) => {
        if (e.target.id == "picture") {
            this.state.productR[e.target.id] = e.target.files[0]
        } else {
            this.state.productR[e.target.id] = e.target.value

        }
        this.changeSub()
    }

    submitProduct = e => {
        e.preventDefault()
        this.setState({
            btnLoad: true
        })
        const fd = new FormData()
        fd.append('pro', this.state.productR.picture)
        axios({
            method: 'post',
            url: localStorage.address + "/image/",
            data: fd
        })
            .then((response) => {
                this.state.productR["picture"] = localStorage.address + "/" + response.data.imageUrl
                axios({
                    method: 'post',
                    url: localStorage.address + "/api/v1/vendorpro/",
                    data: {
                        ...this.state.productR,
                        store: localStorage.store
                    },
                    headers: {
                        "Authorization": localStorage.auth,
                        "Content-Type": "application/json"
                    }
                })
                    .then((response) => {
                        this.setState({
                            error: null,
                            mess: "Product Request Was Created Successfully",
                            btnLoad: false

                        })


                    }).catch(err => console.error(err))
            }).catch(err => console.error(err))

    }

    changeSub = () => {
        if (Object.values(this.state.productR).some(n => n == null)) {
            this.setState({
                submit: false
            })
        } else {

            this.setState({
                submit: true
            })
        }
    }


    render() {
        return (
            <Fragment>
                {this.state.error ? <div id="err" className="errorz">{this.state.error}</div> : null}
                {this.state.mess ? <div id="err" className="successz">{this.state.mess}</div> : null}
                <div>
                    <Input
                        info={{
                            style: "input-field",
                            id: "name",
                            type: "text",
                            label: "Product Name"
                        }}
                        changed={this.handleInputs}
                    />


                    <div className="gridTwo">

                        <div className="spaceIn">
                            <div>
                                <label>Product Type</label>
                                <select id="type" className="browser-default" onChange={this.handleInputs} required>
                                    <option></option>
                                    <option value="Brand New">Brand New </option>
                                    <option value="Second Hand">Second Hand</option>
                                </select>
                            </div>

                        </div>



                        <div className="spaceIn">

                            <Input
                                info={{
                                    style: "input-field",
                                    id: "winners",
                                    type: "number",
                                    label: "Number Of Winners",

                                }}
                                changed={this.handleInputs}

                            />

                        </div>
                    </div>

                    <div className="gridTwo">
                        <div className="spaceIn">
                            <Input
                                info={{
                                    style: "input-field",
                                    id: "date",
                                    type: "date",
                                    label: "End Date"

                                }}
                                changed={this.handleInputs}

                            />

                        </div>
                        <div className="spaceIn">
                            <Input
                                info={{
                                    style: "input-field",
                                    id: "hour",
                                    type: "time",
                                    label: "End Hour",

                                }}
                                changed={this.handleInputs}

                            />

                        </div>




                    </div>

                    <div className="gridTwo">

                        <div className="spaceIn">

                            <div className="file-field input-field">
                                <div className="btn black">
                                    <span>Upload Image</span>
                                    <input type="file" id="picture" onChange={this.handleInputs} required />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" />
                                </div>

                            </div>

                        </div>

                        <div className="spaceIn">


                            <Input
                                info={{
                                    style: "input-field",
                                    id: "price",
                                    type: "number",
                                    label: "Total Selling Price in USD",

                                }}
                                changed={this.handleInputs}

                            />
                        </div>

                    </div>


                    {
                        !this.state.submit ? <Button
                            style="btn longBtn waves-effect waves-light black"
                            text="Submit"
                            info={{
                                type: "submit",
                                name: "action",

                            }}
                        /> : <Fragment>
                                {!this.state.btnLoad ?
                                    <Button
                                        style="btn longBtn  waves-effect waves-light black"
                                        text="submit"
                                        info={{
                                            type: "submit",
                                            name: "action",

                                        }}
                                        clicked={this.submitProduct} /> : <Loader />}
                            </Fragment>}

                </div>
            </Fragment>
        )
    }
}

export default CreatePro;