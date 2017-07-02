import React, {Component} from 'react';

import PropTypes from 'prop-types';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  request: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class Request extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          <p> The request from {this.props.clientIP} to {this.props.requestDomainName} has been rejected.</p>
        </h2>
      </div>
    );
  }
}

Request.propTypes = {
  requestDomainName: PropTypes.string.isRequired,
  clientIP: PropTypes.string.isRequired
};
