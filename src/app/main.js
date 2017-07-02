import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Request} from './requests/request';
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
        <main style={styles.main}>
          <Title/>
          <Request requestDomainName={this.state.requestDomainName} clientIP={this.state.clientIP}/>
        </main>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {
  urlSearchString: PropTypes.object.isRequired
};
