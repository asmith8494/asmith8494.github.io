import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ResumePage from './pages/Resume';
import ProfessionalProjects from './pages/ProfessionalProjects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/professional-projects" element={<ProfessionalProjects />} />
      </Routes>
    </Router>
  );
}

export default App;