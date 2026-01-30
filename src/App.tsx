import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ResumePage from './pages/Resume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
