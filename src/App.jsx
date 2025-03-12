import { useState } from 'react'

//importo il componente homepage
import HomePage from './pages/HomePage'

//importo il componente moviepage
import MoviePage from './pages/MoviePage'

//importo il layout
import DefaultLayout from './layouts/DefaultLayout'

//importo la pagina not found
import NotFoundPage from './pages/NotFoundPage'

//importo react router per gestire le rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
