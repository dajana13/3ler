import React from "react";
import "../App.css"
import logoFooter from "../images/logo-footer.svg"
import mediaDark from "../images/mediaDark.svg"

export default function Footer() {

    return(
        <section className="footer">
            <div className="footer-content container column">
                <div className="footer-icons row">
                    <a href="#hero">
                        <img className="footer-logo" src={logoFooter} alt="3Ler logo"/>
                    </a>
                    <img className="media-dark" src={mediaDark} alt="Facebook,Instagram,YouTube icons"/>
                </div>
                <div className="footer-txt row">
                    <p className="body2 align" >Privacy Policy</p>
                    <p className="body2 align-end">Terms of Service</p>
                </div>
            </div>
        </section>
    )
}