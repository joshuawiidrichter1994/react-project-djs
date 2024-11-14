import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
