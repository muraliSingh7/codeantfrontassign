import './App.css';
import { Login, Repository } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
