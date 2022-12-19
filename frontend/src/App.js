import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route } from "react-router-dom";
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminProducts from './pages/AdminProducts';
import AddProductPage from './pages/AddProductPage';
import ProductPage from './pages/Productpage';
import EditProductPage from './pages/EditProductPage';
import AccountPage from './pages/AccountPage';
import CheckoutPage from './pages/CheckoutPage';
import CategoryPage from './pages/CategoryPage';
import AddCategoryPage from './pages/AddCategoryPage';
import ResultPage from './pages/ResultPage';
import AdminCategoriesPage from './pages/AdminCategoriesPage';
import EditCategoryPage from './pages/EditCategoryPage';
import DashboardPage from './pages/DashboardPage';
import CategoryResultPage from './pages/CategoryResultPage';

function App() {
  return (<BrowserRouter>
    <Header />
    <main>
      <Route path="/cart/:id?" component={CartPage} />
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/admin-products" component={AdminProducts}></Route>
      <Route path="/add-product" component={AddProductPage}></Route>
      <Route path="/product/:id" component={ProductPage}></Route>
      <Route path="/edit-product/:id" component={EditProductPage}></Route>
      <Route path="/account" component={AccountPage}></Route>
      <Route path="/checkout" component={CheckoutPage}></Route>
      <Route path="/category" component={CategoryPage}></Route>
      <Route path="/add-category" component={AddCategoryPage}></Route>
      <Route path="/search/:name" component={ResultPage}></Route>
      <Route path="/admin-categories" component={AdminCategoriesPage}></Route>
      <Route path="/edit-category/:id" component={EditCategoryPage}></Route>
      <Route path="/dashboard" component={DashboardPage}></Route>
      <Route path="/catrgory/:id" component={CategoryResultPage}></Route>
    </main>











  </BrowserRouter>
  )
}

export default App;


// let number=100;
// for(i=1; i<number ; i++){

//   if(Math.sqrt(i)==Math.sqrt(i)){

//     console.log(number)
//   }
// }