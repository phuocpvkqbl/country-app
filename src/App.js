import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Document from './components/Document'
import * as countryService from './services/Country'

function App() {
  const countriesJSON = localStorage.getItem('countries');
  if (countriesJSON === null) {
    let countries =  countryService.getAllCountryService('fields=name,cioc').then((result) => {
      localStorage.setItem('countries', JSON.stringify(result.data))
    } )
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          {Pages().map((route) => <Route {...route} />)}
        </Routes>
      </Router>
    </div>
  )
}

let Pages = function buildPages() {
  let pages = [
    { key: 'home', path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/:type/:id', element: <Document /> }
  ]
  return pages
}

export default App;
