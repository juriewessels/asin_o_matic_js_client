import React from "react";
import PropTypes from "prop-types";

import ProductsHeader from "./ProductsHeader";
import Product from "./Product";

const renderProducts = products => {
  return (
    <tbody>
      {products.map((product, index) =>
        <Product key={index} product={product} />
      )}
    </tbody>
  );
};

const Products = props => {
  return (
    <div className="products-container">
      <div className="row">
        <div className="col-sm-12">
          <table className="table table-striped">
            <ProductsHeader />
            {renderProducts(props.products)}
          </table>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
