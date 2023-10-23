import React from "react";
import "../App.css"
import gridImage1 from "../images/grid-image1.svg"
import gridImage2 from "../images/grid-image2.svg"
import gridImage3 from "../images/grid-image3.svg"

export default function About() {

    return (
      <section id="about" className="about container column">
        <div className="content-main-grid column">
          <div className="text-content">
            <h3 className="h3 h3-grid">In the beginning</h3>
            <p>3ler started as a passion project between three friends who loved nothing more than the thrill of racing. As teenagers, they would spend their weekends tinkering with engines and dreaming of one day starting their own go-kart club. After years of hard work and determination, they finally made their dream a reality.</p>
          </div>
          <img className="grid-img" src={gridImage1} alt="Three friends sitting in Go-karts"/>
        </div>
        <div className="content-main-grid column">
          <img className="grid-img grid-img-desktop" src={gridImage2} alt="Trophies they won in a contest"/>
          <div className="text-content">
            <h3 className="h3 h3-grid">As we grew</h3>
            <p>3As the club grew, so did its ambitions. Members began competing in larger races and events, bringing home trophy after trophy and making 3ler a force to be reckoned with in the go-karting world. But even as the club's success continued to soar, its founders never lost sight of why they started it in the first place: for the love of the sport and the thrill of the race.</p>
          </div>
          <img className="grid-img grid-img-mobile" src={gridImage2} alt="Trophies they won in a contest"/>
        </div>
        <div className="content-main-grid column">
          <div className="text-content">
            <h3 className="h3 h3-grid">Today</h3>
            <p>Today, 3ler is still run by those same three friends who started it all those years ago. They continue to welcome new members with open arms, fostering a community that is inclusive, supportive, and most importantly, fun. Whether you're a seasoned pro or a first-time racer, 3ler is the perfect place to experience the ultimate thrill of go-karting.</p>
          </div>
          <img className="grid-img" src={gridImage3} alt="Three men in a race"/>
        </div>
      </section>
   )
}