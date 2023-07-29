import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Article from "./components/Article";
import Gallery from "./components/Gallery/galeery";
import Footer from "./components/footer/Footer";
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Article/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
