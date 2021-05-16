import './App.css';
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import Price from './Price';
import Products from './Products';
import Register from './Register';
import Service from './Service';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
    <Header></Header>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path ="/about" component={About}/>
        <Route exact path ="/contact" component={Contact}/>
        <Route exact path ="/price" component={Price}/>
        <Route exact path ="/products" component={Products}/>
        <Route exact path ="/register" component={Register}/>
        <Route exact path ="/service" component={Service}/>
      </Switch>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default App;

