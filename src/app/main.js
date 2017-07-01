import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Requests} from './requests/requests';
import {Footer} from './footer';
import PropTypes from 'prop-types';
import queryString from 'query-string';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  constructor() {
    super();
    this.state = {requestDomainName: '', clientIP: ''};
  }
  componentDidMount() {
    const urlSearchString = queryString.parse(location.search);
    this.setState({requestDomainName: urlSearchString.requestDomainName, clientIP: urlSearchString.clientIP});
  }

  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <p> Request To: {this.state.requestDomainName}</p>
        <p> Request By: {this.state.clientIP}</p>
        <main style={styles.main}>
          <Title/>
          <Requests/>
        </main>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {
  urlSearchString: PropTypes.object.isRequired
};
