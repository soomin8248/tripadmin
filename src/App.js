import Topbar from "components/topbar/Topbar";
import Sidebar from "components/sidebar/Sidebar";
import Home from "components/pages/home/Home";
import UserList from "components/pages/userList/UserList";

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import User from "components/pages/user/User";
import Newuser from "components/pages/newUser/Newuser";
import ProductList from "components/pages/productList/ProductList";
import Product from "components/pages/product/Product";
import NewProduct from "components/pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userid">
            <User />
          </Route>
          <Route path="/newUser">
            <Newuser/>
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productid">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct/>
          </Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
