import React from "react";
import "../css/achievements.css"
import trophy from "../images/trophy.svg"

export default function Achievements() {

    return(
        <section className="trophy-gray-background">
            <div className="container trophy-area">
                <h3 className="h3-caps">Achievements</h3>
                <div className="all-tropheys">
                    <div className="column">
                        <img className="trophy-img" src={trophy} alt="Trophy"/>
                        <p className="trophy-txt body2">European Championship 2018 SPA</p>
                    </div>
                    <div className="column">
                        <img className="trophy-img" src={trophy} alt="Trophy"/>
                        <p className="trophy-txt body2">FIA WDC 2020 ITA</p>
                    </div>
                    <div className="column">
                        <img className="trophy-img" src={trophy} alt="Trophy"/>
                        <p className="trophy-txt body2">TRINEC, CZEFIA Karting European Championship</p>
                    </div>
                        <div className="column">
                        <img className="trophy-img" src={trophy} alt="Trophy"/>
                        <p className="trophy-txt body2">WACKERSDORF, GERMondokart.com FIA Karting WDCKZ, KZ2, KZ2-Masters</p>
                    </div>
                </div>
            </div>
        </section>
    )
}