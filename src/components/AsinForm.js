import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createProduct } from '../actions';

import '../css/form.css';

class AsinForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const asin = this.refs.asin.value;

    if (!asin) {
      return;
    }
    this.props.dispatch(createProduct(asin));
    this.refs.form.reset();
  }

  render() {
    return (
      <div className="form-wrapper">
        <form ref="form" className="asin-form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              ref="asin"
              className="asin-form-input"
              placeholder="Enter the ASIN to add."
            />
            <span className="input-group-addon">
              <button className="btn btn-js">ADD ASIN</button>
            </span>
          </div>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

AsinForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(AsinForm);
