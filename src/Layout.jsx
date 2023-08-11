import React from 'react'
import Detail from './pages/Detail'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Contact from './pages/Contact'

const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/Detail' element={<Detail />}></Route>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Contact' element={<Contact/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>

    )
}

export default Layout