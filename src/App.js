import React from "react";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./css/App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Tittle from "./components/tittle";
import About from "./components/about";
import Achievements from "./components/achievments";
import Testimonials from "./components/testimonials";
import Membership from "./components/membership";
import Events from "./components/events";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ModalMembership from "./components/modal-membership";
import Snackbar from "./components/snackbar";

const testimonialsURL =
  "https://gist.githubusercontent.com/dajana13/e4be845a9a0d49c9179e868d34483f37/raw/831dc2ce19b1df8c4c48c2a06fd603948d5164b0/gistfile1.json";

function App() {
  const [carouselJSON, setCarouselJSON] = useState([]);
  const [done, setDone] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [membershipSnackbar, setMembershipSnackbar] = useState(false);

  const fetchTestimonials = () => {
    fetch(testimonialsURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCarouselJSON(data);
        setDone(true);
      });
  };

  useEffect(() => {
    fetchTestimonials();
  }, [done]);

  useEffect(() => {
    setTimeout(() => {
      setMembershipSnackbar(false);
    }, 2000);
  }, [membershipSnackbar]);

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [showModal]);

  return (
    <>
      {/* <CSSTransition
        in={showModal}
        timeout={500}
        classNames="modal"
        unmountOnExit
      > */}
      {showModal &&
        (<ModalMembership
          showModal={showModal}
          setShowModal={setShowModal}
          setSnackbar={setMembershipSnackbar}
        />
        )}
      {/* </CSSTransition> */}

      <div className="page-container">
        {done && (
          <div className="app">
            <Header />
            <Hero setShowModal={setShowModal} />
            <Tittle />
            <About />
            <Achievements />
            <Testimonials carouselData={carouselJSON} />
            <Membership setShowModal={setShowModal} />
            <Events />
            <Contact />
            <Footer />
          </div>
        )}

        <CSSTransition
          in={membershipSnackbar}
          timeout={500}
          classNames="modal"
          unmountOnExit
        >
          <Snackbar message={"Join request successfully sent!"} />
        </CSSTransition>
      </div>
    </>
  );
}

export default App;
