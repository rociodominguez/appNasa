import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Nasa from './components/Apod/Nasa';
import Mars from './components/Mars/Mars';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nasa" element={<Nasa />} />
        <Route path="/mars" element={<Mars />} />
      </Routes>
    </Router>
  );
};

export default App;