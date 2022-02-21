import './App.css';
import Navbar from './Navbar'
import Hero from './Hero'
import Carousel from './Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Hero/>
        <Carousel/>
      </header>
    </div>
  );
}

export default App;
