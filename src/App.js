import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Service from './Service/Service';
import NotFound from './Pages/NotFound/NotFound';
import Doctors from './Pages/Doctors/Doctors';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">

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

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
