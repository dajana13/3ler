import React from "react";
import "../App.css"
import eventContent1 from "../images/event-content1.svg"
import eventContent2 from "../images/event-content2.svg"

export default function Events() {

    return(
        <section id="events" className="events container column">
            <h2 className="event-big-title">Upcoming events</h2>
            <div className="event-contetnt column">
                <img className="event-img" src={eventContent1} alt="Three men racing"/>
                <div className="event-txt column">
                    <h4 className="event-title">Adult Individuals & Adult Small Groups</h4> 
                    <p className="body2">Whether you're looking to improve your racing on your own or nail your personal best with your mates, our adult races will see you get on the podium in record breaking time - whilst getting that adrenaline kick!</p>
                    <p className="body2 orange">Daily 09:00 AM - 20:00 PM</p>
                </div>
            </div>
            <div className="event-contetnt column">
                <img className="event-img" src={eventContent2} alt="Go-kart"/>
                <div className="event-txt column">
                    <h4 className="event-title">Grand Prix Go Karting Racing</h4> 
                    <p className="body2">Race onto our podium in our grand prix styled races. Groups can enjoy exclusive use of the track during their sessions and with only one winner - make sure it's you who takes home the trophy, and not your quickest rivals!</p>
                    <p className="body2 orange">Daily 20:00 PM - 23:00 PM</p>
                </div>
            </div>
        </section>
    )
}