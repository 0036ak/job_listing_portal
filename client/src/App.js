import './App.css';
import Content from './Content';
import Header1 from './Header1';
import Footer1 from './components/footer1.component';
import Login from './components/login.component';
import Signup from './components/signup.component';
import Joblist from './components/jobs.component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header1/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Joblist />} />
      </Routes>
      <Footer1/>
    </Router>
    </>
  );
}

export default App;
