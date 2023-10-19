import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from "./Header"
import { Home } from '../routes/Home'
import { Contact } from '../routes/Contact'
import { Reviews } from '../routes/reviews'
import { ReligionClothing } from '../routes/ReligionClothing'

export const App = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={ <Home></Home> }></Route>
            <Route path='/religion-clothing' element={ <ReligionClothing></ReligionClothing> }></Route>
            <Route path='/reviews' element={ <Reviews></Reviews> }></Route>
            <Route path='/contact' element={ <Contact></Contact> }></Route>
            <Route path='/*' element={ <Navigate to ='/'/> }></Route>
        </Routes>
    </>
  )
}
