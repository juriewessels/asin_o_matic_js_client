import React from "react";
import PropTypes from "prop-types";

import ActionButtons from "./ActionButtons";

import "../css/product.css";

const truncateString = (string, length) => {
  return string.length > length ? string.substr(0, length - 1) + "..." : string;
};

const Product = props => {
  const { product } = props;

  return (
    <tr className="product-data">
      <td>
        {product.asin}
      </td>
      <td>
        {truncateString(product.title, 80)}
      </td>
      <td className="text-center">
        {product.review_count}
      </td>
      <td className="text-center">
        {product.price.toFixed(2)}
      </td>
      <td>
        <ActionButtons productId={product.id} />
      </td>
    </tr>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;
