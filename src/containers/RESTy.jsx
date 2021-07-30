import React, { Component } from 'react';
import RequestInputs from '../components/controls/RequestInputs';
import ResponseDisplay from '../components/display/ResponseDisplay';
import makeRequest from '../services/dynamicFetch';
export default class RESTy extends Component {
    state = {
      url: '',
      method: '',
      body: '',
      response: []
      //array or obj?
    };
    handleReqChange = ({ target }) => {
      this.setState({ [target.name] : target.value });
    }

    handleSubmit  = async (e) => {
      const { url, method, body } = this.state;
      e.preventDefault();
      const response = await makeRequest(url, method, body);
      console.log(response);
      this.setState({ response });

    }
    render() {
      const { url, method, body, response } = this.state;
      return (
        <>
          <RequestInputs url={url} method={method} body={body} 
            onChange={this.handleReqChange}
            onSubmit={this.handleSubmit}
          />
          <ResponseDisplay response={response}/>
        </>
      );
    }
}
