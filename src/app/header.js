import React, {Component} from 'react';

import PropTypes from 'prop-types';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank" rel="noopener noreferrer">
            Blocked with ♥
          </a>
        </p>
        <p style={styles.date}>
          Timestamp: {this.props.timeStamp}
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  timeStamp: PropTypes.string.isRequired
};
