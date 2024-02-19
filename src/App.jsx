//-----------------|    Styles        |-----------------
import './App.css'

//-----------------|    Router DOM    |-----------------
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//-----------------|    Components    |-----------------
import Header from './components/Header/header';
import NavBar from './components/NavBar/NavBar';

//-----------------|    Views         |-----------------
import AboutPage from './views/AboutPage/AboutPage';
import HomePage from './views/HomePage/HomePage';
import CategoryPage from './views/CategoryPage/CategoryPage';
import DetailPage from './views/DetailPage/DetailPage';
import ShopPage from './views/ShopPage/shopPage';


function App() {  

  return (
    <Router>
      <div className='App'>
        <Header/>
        <NavBar/>        
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/category/:tipo" element={<CategoryPage />}></Route>
          <Route path="/DetailPage/:id" element={<DetailPage />}></Route>          
          <Route path="/ShopPage" element={<ShopPage />}></Route>          
        </Routes>
      </div>
    </Router>

  )
}

export default App
