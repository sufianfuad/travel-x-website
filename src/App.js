
import './App.css';
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import TourOffers from './Pages/Home/TourOffers/TourOffers';
import MyOrders from './Pages/MyOrders/MyOrders';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login/Login';
import SignIn from './Pages/SignIn/SignIn';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import AddTourOffer from './Pages/AddTourOffer/AddTourOffer';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/placeOrder/PlaceOrder';


function App() {
  return (
    <div className="">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/tourOffers">
              <TourOffers></TourOffers>
            </Route>
            {/* Private Route Hobe MyOrders route */}
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            {/* <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route> */}
            <Route path="/manageOrders">
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <PrivateRoute path="/addTour">
              <AddTourOffer></AddTourOffer>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route exact path="/placeOrder/:bookingId">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
