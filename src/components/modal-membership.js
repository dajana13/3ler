import React from "react";
import { useState } from "react";
import HamburgerMenuClose from "../images/hamburger-menu-close.svg"
import "../App.css"

export default function ModalMembership(props) {
    const [formData, setFormData] = useState(
        {fullName: "", email: "", message: ""}
    )
    const [visible, setVisible] = useState(true);

    function handleChange(event) {
        setFormData(prevState=>{
            return{
                ...prevState,
                [event.target.name]:event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.close()
    }

    function handleClose(event) {
        event.preventDefault()
        
        setVisible(prevState => !prevState)
    }


    return ( 
        <div className="modal-membership column" data-visible={visible}>
            <img className="btn-close" onClick={handleClose} src={HamburgerMenuClose} alt="Close"/>
            <h1 className="modal-membership-text">Fill the form to become a member!</h1>
            <form className="form-onSubmit-membership column" onSubmit={handleSubmit}>
                    <div className="label-input-modal column">
                        <label for="fullName" className="body2">Full Name *</label>
                        <input
                            id="fullName"
                            className="input-modal"
                            type="text"
                            placeholder=""
                            onChange={handleChange}
                            name="fullName"
                            value={formData.fullName}
                            autoComplete="name"
                            required
                        />
                    </div>
                    <div className="label-input-modal column">
                        <label for="email" className="body2">Email *</label>
                        <input
                            id="email"
                            className="input-modal"
                            type="email"
                            placeholder=""
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            autoComplete="email"
                            required
                        />
                    </div>
                    <button className="membership-btn btn-contact" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>  
    )
}