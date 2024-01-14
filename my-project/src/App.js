import './App.css';
import ShopPage from './components/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/MainPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import { UserContextProvider } from './UserContext';
import UserPage from './components/UserPage';
import ProductPage from './components/ProductPage';



function App() {
  return (
    <>
    <UserContextProvider>
    <Router>
       <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<MainPage/>} />
            <Route path='/shop' element={<ShopPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/user' element={<UserPage/>}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
          </Route>
        </Routes>
    </Router>
    </UserContextProvider>
    </>
  );
}

export default App;
