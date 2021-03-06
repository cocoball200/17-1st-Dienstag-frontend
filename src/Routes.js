import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import MapAPI from './Pages/Map/MapAPI';
import BackpackListBox from './Pages/Shop/BackpackListBox';
import BagCategoryView from './Pages/Shop/BagCategoryView';
import SignUp from './Pages/SignUp/SignUp';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Cart/Checkout';
import Main from './Pages/Main/Main';
import FilterView from './Pages/Filter/FilterView';
import NewsLetter from './Pages/newsletter/NewsLetter';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/map" component={MapAPI} />
          <Route exact path="/bagcategoryview" component={BagCategoryView} />
          <Route exact path="/backpacklistbox" component={BackpackListBox} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/filterview" component={FilterView} />
          <Route exact path="/newsletter" component={NewsLetter} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
