import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import ShowDetails from './components/ShowDetails.js';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/show/:id" element={<ShowDetails />} />{' '}
          {/* Add dynamic route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
