import { useState } from 'react'
import FrontPage from './components/FrontPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SignUpForm from './components/SignUpForm';

function App() {

  return (
    <>
      <BrowserRouter>
						<Routes>
							<Route
								path="/"
								element={<FrontPage />}
							/>
              <Route
								path="/signupform"
								element={<SignUpForm />}
							/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
