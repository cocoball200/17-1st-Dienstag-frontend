import React, { Component } from 'react';
import NavHeadLogos from './NavHeadLogos';
import Navmodal from './NavModal';
import FilterModal from '../../Pages/Filter/FilterModal';
import CartView from '../../Pages/Cart/CartView';
import './Nav.scss';
import { ProductConsumer } from '../../context';

class Nav extends Component {
  constructor() {
    super();
    this.state = { MainStoriesdata: [] };
  }
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="Nav">
              <NavHeadLogos />
              {value.isNavOpen && <Navmodal />}
              {value.isCartOpen && <CartView />}
              {value.isFilteropen && <FilterModal />}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Nav;
