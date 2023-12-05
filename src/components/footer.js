import React from "react";
import "../css/footer.css"
import logoFooter from "../images/logo-footer.svg"
import fb from "../images/fb.svg"
import insta from "../images/insta.svg"
import yt from "../images/yt.svg"

export default function Footer() {

    return(
        <section className="footer">
            <div className="footer-content container column">
                <div className="footer-icons row">
                    <a href="#hero">
                        <img className="footer-logo" src={logoFooter} alt="3Ler logo"/>
                    </a>
                    <div className="social-media-icons row">
                        <a href="https://www.facebook.com/">
                            <img className="fb-logo" src={fb} alt="Facebook-logo" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img className="insta-logo" src={insta} alt="Instagram-logo" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img className="yt-logo" src={yt} alt="Youtube-logo" />
                        </a>
                    </div>
                </div>
                <div className="footer-txt row">
                    <a href="#" className="body2 align footer-link">Privacy Policy</a>
                    <a href="#" className="body2 align-end footer-link">Terms of Service</a>
                </div>
            </div>
        </section>
    )
}