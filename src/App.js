
import './App.css';
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import MyOrders from './Pages/MyOrders/MyOrders';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login/Login';
import SignIn from './Pages/SignIn/SignIn';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route exact path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
