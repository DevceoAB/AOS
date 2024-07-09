import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import NAvbar from "./components/NAvbar"
import Hero from './components/Hero';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <NAvbar />
      <Hero />

    </>
  )
}

export default App
