import './App.css';
import Navbar from './components/navbar'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Homepage from './components/homepage';
import Itemstate from './context/itemsstate';
import Adminlogin from './admin/login';
import Adminstate from './context/adminstate';
import Homepageadmin from './admin/homepageadmin';
import Openpage from './components/openpage';
import Categorypage from './components/categorypage';
import CustomerState from './context/customerstate';
import CustomerLogin from './client/customerlogin'
import Billing from './components/billing';
import Profile from './client/profile';

function App() {
  return (
    <Itemstate><Adminstate><CustomerState>
      <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/'><Homepage></Homepage></Route>
      <Route exact path='/admin/adminlogin'><Adminlogin></Adminlogin></Route>
      <Route exact path='/admin/adminlogin/homepageadmin'><Homepageadmin></Homepageadmin></Route>
      <Route exact path='/openpage' ><Openpage></Openpage></Route>
      <Route exact path='/category' ><Categorypage></Categorypage></Route>
      <Route exact path='/customerlogin' ><CustomerLogin></CustomerLogin></Route>
      <Route exact path='/customerlogin/billing' ><Billing/></Route>
      <Route exact path='/profile' ><Profile></Profile></Route>
      
      </Switch>
      </Router>
      </CustomerState></Adminstate></Itemstate>
  );
}

export default App;
