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
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
