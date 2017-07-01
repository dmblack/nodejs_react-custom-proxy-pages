import React, {Component} from 'react';
import PropTypes from 'prop-types';

const styles = {
  request: {
    height: '15rem',
    width: '15rem',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0'
  }
};

export class Request extends Component {
  render() {
    return (
      <div style={styles.request}>
        <img style={styles.logo} src={this.props.request.logo}/>
        <h3 style={styles.h3}>
          {this.props.request.title}
        </h3>
        <p>{this.props.request.text1}</p>
        <p>{this.props.request.text2}</p>
      </div>
    );
  }
}

Request.propTypes = {
  request: PropTypes.object.isRequired
};
