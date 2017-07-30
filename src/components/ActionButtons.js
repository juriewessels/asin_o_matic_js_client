import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteProduct, updateProduct } from '../actions';

class ActionButtons extends React.Component {
  constructor() {
    super();
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleRefresh(e, value) {
    e.preventDefault();
    const id = this.refs.refreshButton.value;
    this.props.dispatch(updateProduct(id));
  }

  handleDelete(e) {
    e.preventDefault();
    const id = this.refs.deleteButton.value;
    this.props.dispatch(deleteProduct(id));
  }

  render() {
    const { productId } = this.props;

    return (
      <ul className="list-unstyled list-inline product-actions">
        <li className="list-inline-item">
          <button
            className="btn btn-xs"
            ref="refreshButton"
            value={productId}
            onClick={this.handleRefresh}
          >
            Refresh
          </button>
        </li>
        <li>
          <button
            className="btn btn-xs"
            ref="deleteButton"
            value={productId}
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  }
}

ActionButtons.propTypes = {
  productId: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(ActionButtons);
