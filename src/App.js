import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Service from './Service/Service';
import NotFound from './Pages/NotFound/NotFound';
import Doctors from './Pages/Doctors/Doctors';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Shared/Footer/Footer';
import Login from './Important/Login/Login';
import Register from './Important/Register/Register';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/service">
              <Service></Service>
            </Route>

            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>

      </AuthProvider>
    </div>
  );
}

export default App;
