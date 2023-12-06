import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Courses from './components/pages/Courses';
//import TeamMembers from './components/pages/Teams';
import AppNavbar from './components/Navbar';
import AdvancedCourse from './components/pages/AdvancedCourses';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <AdvancedCourse />
      <Router>
        <Routes>
          <Route exact path="/about" component={<About />} />
          <Route exact path="/courses" component={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
