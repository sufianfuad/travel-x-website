
import './App.css';
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import TourOffers from './Pages/Home/TourOffers/TourOffers';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import SignIn from './Pages/SignIn/SignIn';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import AddTourOffer from './Pages/AddTourOffer/AddTourOffer';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/placeOrder/PlaceOrder';
import MyOrders from './Pages/DashBoard/MyOrders/MyOrders';
import ManageAllOrder from './Pages/DashBoard/ManageAllOrder/ManageAllOrder';
import UpdateOrder from './Pages/DashBoard/UpdateOrder/UpdateOrder';
import LatestBlogs from './Pages/LatestBlogs/LatestBlogs';
// react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="">

      <AuthProvider>
        <Router>
          {/* header route  */}
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

            <PrivateRoute path="/placeOrder/:bookingId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/addTour">
              <AddTourOffer></AddTourOffer>
            </PrivateRoute>

            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/allOrder">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/blogs">
              <LatestBlogs></LatestBlogs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/orders/update/:id">
              <UpdateOrder></UpdateOrder>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          {/* footer route  */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
