import { Fragment } from 'react';
import './App.css';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Fragment>
      <Home />
      <Portfolio />
      <About />
      <Contact />
    </Fragment>
  );
}

export default App;
