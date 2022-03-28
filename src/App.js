
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Profile from './components/Profile'
import Videos from './components/Videos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Content />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/videos' element={<Videos />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
