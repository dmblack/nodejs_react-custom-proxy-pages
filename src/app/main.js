import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Request} from './requests/request';
import {Footer} from './footer';
// import PropTypes from 'prop-types';
import queryString from 'query-string';

const styles = {
  container: {
    opacity: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  }
};

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      },
      timeStamp: '', requestDomainName: '', clientIP: ''
    };
  }

  componentDidMount() {
    const urlSearchString = queryString.parse(location.search);
    this.setState({timeStamp: urlSearchString.timeStamp, requestDomainName: urlSearchString.requestDomainName, clientIP: urlSearchString.clientIP});
    // setTimeout(() => {
    //   this.setState({main: {
    //     opacity: 0
    //   }});
    // }, 5000);
  }

  render() {
    return (
      <div style={styles.container}>
        <Header timeStamp={this.state.timeStamp}/>
        <main style={this.state.main}>
          <Title/>
          <Request requestDomainName={this.state.requestDomainName} clientIP={this.state.clientIP}/>
        </main>
        <Footer/>
      </div>
    );
  }
}
