import { useState , useEffect} from 'react'

import PageTitle from './components/PageTitle'
import RSBuilder from './pages/Dashboard/RSBuilder'
import {Route, Routes, useLocation} from 'react-router-dom'
import Defaultlayout from './layout/Defaultlayout'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Defaultlayout>
      <Routes>
        <Route index element={
          <>
            <PageTitle title ="Resume Builder Dashboard"/>
            <RSBuilder/>
          </>
          }
        />
        <Route path='/templateGallery' element={
            <>
            <PageTitle title ="Template Gallery"/>
          </>
          }
        />
      </Routes>
    </Defaultlayout>
  )
}

export default App
