import './App.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Button } from './components/Button/Button'

function App() {
  const showAlert = () => alert('Button clicked!')

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="home">
              <div className="buttons">
                <Button onClick={showAlert}>Hello! It's button!</Button>
                <Button onClick={showAlert} disabled>
                  Hello! It's button!
                </Button>
                <Button onClick={showAlert} loading>
                  Hello! It's button!
                </Button>
              </div>
              <div className="links">
                <Button
                  component={'a'}
                  target="_blank"
                  href="https://www.google.ru/"
                >
                  It's Google link!
                </Button>
                <Button
                  component={'a'}
                  target="_blank"
                  href="https://www.google.ru/"
                  disabled
                >
                  It's Google link!
                </Button>
                <Button
                  component={'a'}
                  target="_blank"
                  href="https://www.google.ru/"
                  loading
                >
                  It's Google link!
                </Button>
              </div>
              <div className="routerLinks">
                <Button component={Link} to="/link-route">
                  It's router link!
                </Button>
                <Button component={Link} to="/link-route" disabled>
                  It's router link!
                </Button>
                <Button component={Link} to="/link-route" loading>
                  It's router link!
                </Button>
              </div>
            </div>
          }
        />
        <Route
          path="/link-route"
          element={
            <div>
              <Button component={Link} to="/">
                Go to home
              </Button>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
