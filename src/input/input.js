import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { className = '', error = false, ...props } = this.props;

    return (
      <input
        className={`mt-input ${error ? 'mt-input-error' : ''} ${className}`}
        {...props}
      />
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
};
