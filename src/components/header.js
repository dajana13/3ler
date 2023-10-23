import React from "react";
import { useState, useEffect} from "react";
import "../App.css"
import logo from '../logo.svg';

export default function Header() {

    const [navSwitch, setNavSwitch] = useState(false);
    const scrollDirection = useScrollDirection();
   
    function onClick() {
        setNavSwitch(prevState => !prevState)
    }

    function useScrollDirection() {
        const [scrollDirection, setScrollDirection] = useState(null);
      
        useEffect(() => {
          let lastScrollY = window.scrollY;
      
          const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
              setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
          };
          window.addEventListener("scroll", updateScrollDirection);
          return () => {
            window.removeEventListener("scroll", updateScrollDirection); 
          }
        }, [scrollDirection]);
      
        return scrollDirection;
    };

    return(
        <header className={`header ${ scrollDirection === "down" ? "hide" : "show"}`}>
            <div className="header-content container container row">
                <a href="#hero" className="header-logo">
                    <img src={logo} className="logo-img" alt="3Ler logo" />
                </a>
                <button onClick={onClick} className="mobile-toggle-nav" aria-controls="primary-navigation" aria-expanded={navSwitch}><span className="sr-only">Menu</span></button>
                <nav className="nav body2">
                    <ul id="primary-navigation" data-visible={navSwitch} className="nav-list  column">
                        <li className="nav-item"><a href="#about" className="nav-link" onClick={onClick} aria-hidden="true">About</a></li>
                        <li className="nav-item"><a href="#membership" className="nav-link" onClick={onClick} aria-hidden="true">Membership</a></li>
                        <li className="nav-item"><a href="#events" className="nav-link" onClick={onClick} aria-hidden="true">Events</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link" onClick={onClick} aria-hidden="true">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}