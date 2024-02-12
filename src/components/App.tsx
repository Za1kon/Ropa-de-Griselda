import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from "./Header"
import { Home } from '../routes/Home'
import { Contact } from '../routes/Contact'
import { Products } from '../routes/Products'

export const App = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/religion-clothing' element={ <Products/> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/*' element={ <Navigate to ='/' /> } />
        </Routes>
    </>
  )
}