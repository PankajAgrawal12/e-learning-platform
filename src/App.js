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
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="carrier" element={<HomePage />} />
        <Route path="blog" element={<HomePage />} />
        <Route path="aboutus" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
