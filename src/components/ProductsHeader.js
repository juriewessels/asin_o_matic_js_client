import React from "react";

const ProductsHeader = props => {
  return (
    <thead>
      <tr>
        <th>Asin</th>
        <th>Title</th>
        <th className="text-center">Reviews</th>
        <th className="text-center">Price CDN$</th>
        <th />
      </tr>
    </thead>
  );
};

export default ProductsHeader;
