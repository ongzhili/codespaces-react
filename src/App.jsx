import './App.css';
import Navbar from './components/navbar.jsx'
import BGContainer from './components/background';
import MainContent from './components/maincontent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BGContainer />
      <MainContent></MainContent>
    </div>
  );
}

export default App;
