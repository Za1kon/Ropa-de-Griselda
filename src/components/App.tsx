import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from "./Header"
import { Home } from '../routes/Home'
import { Contact } from '../routes/Contact'
import { Reviews } from '../routes/Reviews'
import { ReligionClothing } from '../routes/ReligionClothing'

export const App = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/religion-clothing' element={ <ReligionClothing/> } />
            <Route path='/reviews' element={ <Reviews /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/*' element={ <Navigate to ='/' /> } />
        </Routes>
    </>
  )
}