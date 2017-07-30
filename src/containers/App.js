import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import Header from '../components/Header';
import Products from '../components/Products';
import NoProducts from '../components/NoProducts';
import Message from '../components/Message';
import Loading from '../components/Loading';

import { getProducts } from '../actions';

import '../css/application.css';

class App extends React.Component {
  constructor() {
    super();
    this.loadProducts = this.loadProducts.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  componentWillMount() {
    this.loadProducts();
  }

  loadProducts() {
    this.props.dispatch(getProducts());
  }

  handleLoading() {
    const { isLoading } = this.props.app;
    if (isLoading) {
      return <Loading />;
    }
  }

  render() {
    const props = this.props;
    const { isLoading, displayMessage, message } = props.app;
    const products = props.products;
    const itemsPresent = products.length > 0;

    return (
      <div>
        <Header />
        <div className="container">
          <CSSTransitionGroup
            transitionName="message"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {displayMessage && <Message message={message} key="message" />}
          </CSSTransitionGroup>

          {itemsPresent && <Products products={products} />}
          {!itemsPresent && !isLoading && <NoProducts />}
        </div>
        {this.handleLoading()}
      </div>
    );
  }
}

App.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  app: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    displayMessage: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
  }),
  products: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { app, products } = state;

  return {
    app,
    products
  };
};

export default connect(mapStateToProps)(App);
