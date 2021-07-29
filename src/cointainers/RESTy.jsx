import React, { Component } from 'react';
import RequestInputs from '../components/controls/RequestInputs';
import ResponseDisplay from '../components/display/ResponseDisplay';

export default class RESTy extends Component {
    state = {
      url: '',
      method: '',
      body: ''
    };
    handleReqChange = ({ target }) => {
      this.setState({ [target.name] : target.value });
    }
    render() {
      const { url, method, body } = this.state;
      return (
        <>
          <RequestInputs url={url} method={method} body={body} 
            onChange={this.handleReqChange}
          />
          <ResponseDisplay/>
        </>
      );
    }
}
