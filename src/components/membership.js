import React from "react";
import "../css/membership.css"

export default function Membership(props) {

    return(
        <section id="membership" className="membership">
            <div className="cta-content container column">
                <div className="member-title column">
                    <h2 className="cta-h2">Become a member and join the thrill</h2> 
                    <button className="btn-join-now" onClick={() => props.setShowModal(true)}>Join now</button>
                </div>
                <div className="orange-rectangle">
                    <p className="xl-text">Gain access to exclusive races and events, discounted rates on equipment rentals, and a supportive community of fellow racers.</p>
                </div>
            </div>
        </section>
    )
}