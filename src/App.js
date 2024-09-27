import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="" element={<CoursesPage />} />
        <Route path="" element={<CoursesPage />} />
        <Route path="" element={<CoursesPage />} />
      </Routes>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
