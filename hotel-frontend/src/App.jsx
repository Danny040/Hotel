import { useState } from 'react'
import FrontPage from './components/FrontPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
						<Routes>
							<Route
								path="/"
								element={<FrontPage />}
							/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
