import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { closeMessage } from '../actions';

import '../css/message.css';

class Message extends React.Component {
  componentDidMount() {
    setTimeout(
      function() {
        this.props.dispatch(closeMessage());
      }.bind(this),
      2500
    );
  }

  render() {
    const { message } = this.props;

    if (!message) {
      return null;
    }

    return (
      <div className="message alert alert-warning">
        {this.props.message}
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(Message);
