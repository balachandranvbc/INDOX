import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about/About';
import Tokenomics from './components/tokenomics/Tokenomics';
import Community from './components/community/Community';
import Buy from './components/buy/Buy';
import Blog from './components/blog/Blog';
import Whitepaper from './components/whitepaper/Whitepaper';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import AnimationContainer from './components/animations/AnimationContainer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimationContainer />
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <Community />
      <Buy />
      <Blog />
      <Whitepaper />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;