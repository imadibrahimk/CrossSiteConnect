import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './components/TestPage';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/§" element={<Home />} />
        <Route path="/testPage" element={<TestPage />} />
      </Routes>
     </Router>
  );
}

export default App;
