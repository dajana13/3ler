import React from 'react';
import './App.css';
import Header from "./components/header"
import Hero from "./components/hero"
import Tittle from "./components/tittle"
import About from "./components/about";
import Achievements from './components/achievments';
import Testimonials from './components/testimonials';
import Membership from './components/membership';
import Events from './components/events';
import Contact from './components/contact';
import Footer from './components/footer';

const testimonialsURL = "https://gist.githubusercontent.com/dajana13/e4be845a9a0d49c9179e868d34483f37/raw/831dc2ce19b1df8c4c48c2a06fd603948d5164b0/gistfile1.json"

function App() {
  const [carouselJSON, setCarouselJSON] = React.useState([])
  const [done, setDone] = React.useState(false)

  const fetchTestimonials = () =>{
    fetch(testimonialsURL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setCarouselJSON(data)
      setDone(true)
    })
}

  React.useEffect(() => {
    fetchTestimonials()
  }, [done])

  return (
    <>
    { done && <div className="app">
      <Header />
      <Hero />
      <Tittle />
      <About />
      <Achievements />
      <Testimonials carouselData={carouselJSON} />
      <Membership />
      <Events />
      <Contact />
      <Footer />
    </div>}
    </>
  )
}

export default App;
