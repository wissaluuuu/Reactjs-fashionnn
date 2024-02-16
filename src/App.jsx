
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { MyProvider } from './utils/contextProvider';
import { ErrorPage } from './pages/Error/error';
import { Login } from './pages/Login/login';
import { MarketPage } from './pages/Market/market';
import { ProfilePage } from './pages/Profile/profile';
import { Settings } from './pages/Settings/settings';
import { Header } from './layouts/header';
import { ProductPage } from './pages/Market_Product/Products';
import { CartProvider } from 'react-use-cart';
function App() {
  return (
    <MyProvider>
      <CartProvider>
      
      <Header/>
      <Routes >
        <Route path='/home' element={<HomePage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/market' element={<MarketPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/settings/:id' element={<Settings />} />
        <Route path='/products/:id' element={<ProductPage/>} />
      </Routes >
    </CartProvider>
    </MyProvider>

  );
}
export default App;
