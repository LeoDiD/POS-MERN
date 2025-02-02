import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Auth, Orders } from './pages';
import Header from "./components/shared/Header"; // If Header is a default export
import BottomNav from './components/shared/BottomNav';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;