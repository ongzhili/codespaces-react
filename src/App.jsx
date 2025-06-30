import './App.css';
import Navbar from './components/navbar.jsx'
import BGContainer from './components/background';
import MainContent from './components/maincontent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <BGContainer />
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* Add more routes here, e.g.: */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
