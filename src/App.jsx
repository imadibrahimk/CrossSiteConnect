import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './components/TestPage'; // Your test page component
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/testPage" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
