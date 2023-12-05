import React from "react";
import "../css/hero.css"

export default function Hero(props) {
    
    return(
        <section id="hero" className="hero row">
            <div className="container column">
                <h1 className="call-to-action-tittle">Join the <span>thrill!</span></h1>
                <p className="ig-text">Become a member of our club.</p>
                <div className="buttons column">
                    <button className="btn-join-now" onClick={() => props.setShowModal(true)}>Join now</button>
                    <a href="#contact">
                        <button className="btn-contact">Contact</button>
                    </a>
                </div>
            </div>
        </section>
    )
}