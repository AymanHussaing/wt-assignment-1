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
        <Route path="/wt-assignment-1" element={<HomePage />} />
          <Route path="/wt-assignment-1/applications" element={<Applications />} />
          <Route path="/wt-assignment-1/profile" element={<Profile />} />
          <Route path="/wt-assignment-1/jobs" element={<Jobs />} />
          <Route path="/wt-assignment-1/students" element={<Student />} />
          <Route path="/wt-assignment-1/placements" element={<Placements />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
