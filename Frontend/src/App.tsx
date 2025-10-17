import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Logout from './pages/Logout.tsx'
import Post from './pages/Post.tsx'

function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/post' element={<Post/>} />
        </Routes>
      </Router>
    </div>
  )
  
}

export default App
