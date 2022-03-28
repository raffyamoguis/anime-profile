
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Profile from './components/Profile'
import Videos from './components/Videos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='text-center' style={{ backgroundColor: 'grey', color: 'white', fontSize: '12px', padding: '8px' }}>This site is demo only due to the developer lack of resources, for full features with backend checkout this <a stye={{ color: "white" }} href='https://github.com/raffyamoguis/anime-profile'>repo</a> with branch backend. Thank you.</div>
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
