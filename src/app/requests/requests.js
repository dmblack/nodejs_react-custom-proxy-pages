import React, {Component} from 'react';

import axios from 'axios';

import {Request} from './request';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  requests: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class Requests extends Component {
  constructor() {
    super();
    this.state = {requests: []};
  }

  componentDidMount() {
    axios
      .get('app/requests/requests.json')
      .then(response => {
        this.setState({requests: response.data});
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Cooked with all these awesome requestnologies:
        </h2>
        <div style={styles.requests}>
          {this.state.requests.map((request, i) => (
            <Request key={i} request={request}/>
          ))}
        </div>
      </div>
    );
  }
}
