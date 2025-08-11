import './App.css';
import Navbar from './components/navbar.jsx'
import BGContainer from './components/background';
import MainContent from './components/maincontent';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Sidebar from './components/sidebar';

function MainContentWrapper() {
    const { filePath } = useParams();
    const url = `https://raw.githubusercontent.com/ongzhili/Study-Notes/main/${filePath}`;
    return <MainContent url={url} />;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Navbar />
        <BGContainer />
        <div className="mainLayout">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainContent url='/src/content/articles/welcomepage.md'/>} />
            <Route path="view/:filePath" element={<MainContentWrapper />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
