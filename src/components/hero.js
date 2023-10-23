import React from "react";
import { useState } from "react";
import ModalMembership from "./modal-membership";
import "../App.css"

export default function Hero() {
    const [render, setRender] = useState(false)
   
    function handleChangeRender() {
        setRender(prevState => !prevState)
    }

    return(
        <section id="hero" className="hero row">
            <div className="container column">
                <h1 className="call-to-action-tittle">Join the <span>thrill!</span></h1>
                <p className="ig-text">Become a member of our club.</p>
                <div className="buttons column">
                    <button className="btn-join-now" onClick={handleChangeRender}>Join now</button>
                    <a href="#contact">
                        <button className="btn-contact">Contact</button>
                    </a>
                </div>
            </div>
            {render && <ModalMembership close={handleChangeRender} />}
        </section>
    )
}