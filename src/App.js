import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Document from './components/Document'
import Country from './components/Country/index'

function App() {

  return (
    <div className="App">
      <Router basename="/country-app">
        <Routes>
          {Pages().map((route) => <Route {...route} />)}
        </Routes>
      </Router>
    </div>
  )
}

let Pages = function buildPages() {
  let pages = [
    { key: 'home', path: '/', element: <Country /> },
    { path: '/about', element: <About /> },
    { path: '/:type/:id', element: <Document /> }
  ]
  return pages
}

export default App;
