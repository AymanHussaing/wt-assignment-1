import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/NavBar";
import './App.css';
import Footer from "./components/footer/Footer";
// Pages
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import Jobs from './pages/Jobs'
import Student from "./pages/Student";
import Placements from "./pages/Placements";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/students" element={<Student />} />
        <Route path="/placements" element={<Placements />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
