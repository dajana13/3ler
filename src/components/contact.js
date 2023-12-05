import React from "react";
import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import "../css/contact.css"
import iconYellowMail from "../images/icon-yellow-mail.svg"
import iconYellowPhone from "../images/icon-yellow-phone.svg"
import Snackbar from './snackbar';

export default function Contact() {
    const [formData, setFormData] = useState(
        {fullName: "", email: "", message: ""}
    )

    const [snackbarVisible, setSnackbarVisible] = useState(false);

    function handleChange(event) {
        setFormData(prevState=>{
            return{
                ...prevState,
                [event.target.name]:event.target.value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        setFormData({fullName: "", email: "", message: ""});
        setSnackbarVisible(true);

        setTimeout(() => {
            setSnackbarVisible(false);
        }, 2000);
    }


    return(
        <section id="contact" className="contact container column">
            <h2 className="h2-contact">Contact</h2> 
            <div className="contact-body column">
                <div className="form-onSubmit-div">
                    <form className="form-onSubmit column" onSubmit={handleSubmit}>
                        <div className="label-input column">
                            <label htmlFor="fullName" className="body2 form-label">Full Name *</label>
                            <input
                                id="fullName"
                                className="input-contact"
                                type="text"
                                placeholder=""
                                onChange={handleChange}
                                name="fullName"
                                value={formData.fullName}
                                autoComplete="name"
                                required
                            />
                        </div>
                        <div className="label-input column">
                            <label htmlFor="email" className="body2 form-label">Email *</label>
                            <input
                                id="email"
                                className="input-contact"
                                type="email"
                                placeholder=""
                                onChange={handleChange}
                                name="email"
                                value={formData.email}
                                autoComplete="email"
                                required
                            />
                        </div>
                        <div className="label-input column">
                            <label htmlFor="message" className="body2 form-label">Message</label>
                            <textarea
                                id="message"
                                className="textarea-contact"
                                type="text"
                                placeholder=""
                                onChange={handleChange}
                                name="message"
                                value={formData.message}
                                autoComplete="off"
                            />
                        </div>
                        <button className="btn-contact btn-submit" onSubmit={handleSubmit}>Submit</button>
                    </form>
                </div>
                <div className="contact-location column">
                    <h3 className="title-h3">Where are we?</h3> 
                    <p className="body2">Nürburgring Nordschleife, 53520 Nürburg, Germany</p>
                    <div className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10187.154129063594!2d6.929997074734349!3d50.33319641543468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bfad32c9c1a5b9%3A0x1e0c01d5641571d4!2sN%C3%BCrburgring%201927%20GmbH%20%26%20Co.%20KG!5e0!3m2!1sen!2sba!4v1695914420223!5m2!1sen!2sba" width="100%" height="300rem" allowFullScreen="" loading="lazy" title="google map" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="contact-icons column">
                        <div className="contact-icon row">
                            <img className="icon" src={iconYellowMail} alt="Mail icon"/>
                            <p className="body2">info@3ler.com</p>
                        </div>
                        <div className="contact-icon row">
                            <img className="icon" src={iconYellowPhone} alt="Phone icon"/>
                            <p className="body2">(+49) 3368-616-064</p>
                        </div>
                    </div>
                 </div>
            </div>

            <CSSTransition
            in={snackbarVisible}
            timeout={500}
            classNames="modal"
            unmountOnExit
            >
                <Snackbar message={"Message successfully sent!"} />
            </CSSTransition>
        </section>
    )
}