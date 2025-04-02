import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ResumePage from './pages/Resume';
import Contact from './pages/Contact';
import ProfessionalProjects from './pages/ProfessionalProjects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/professional-projects" element={<ProfessionalProjects />} />
      </Routes>
    </Router>
  );
}

export default App;