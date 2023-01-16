import { Route, Routes } from 'react-router-dom';
import './App.module.css';

// LAYOUT
import Header from './layout/Header';
import Footer from './layout/Footer';

// PAGES
import IndexPage from './pages/IndexPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import CustomersPage from './pages/CustomersPage';

const App = () => {


  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='orders' element={<OrdersPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='customers' element={<CustomersPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );

};

export default App;
