import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './assets/components/Nav';
import Section2 from './assets/components/Section2';
import Section3 from './assets/components/Section3';
// import Cards from './assets/components/Cards';
import Timeline from './assets/components/Timeline';
import Footer from './assets/components/Footer';
import Section6 from './assets/components/Section6';
import Accordian from './assets/components/Accordian';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Section2 />
      <Section3 />
      <Timeline />
      <Accordian />
      <Section6 />
      <Footer />

    </div>
  );
}

export default App;
