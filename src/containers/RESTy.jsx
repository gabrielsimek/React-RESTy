import React, { Component } from 'react';
import RequestInputs from '../components/controls/RequestInputs';
import ResponseDisplay from '../components/display/ResponseDisplay';
import makeRequest from '../services/dynamicFetch';
import HistoryList from '../components/history/HistoryList';
export default class RESTy extends Component {
    state = {
      url: '',
      method: '',
      body: '',
      response: [],
      history: [{ url: 'url', method: 'method', body: 'body', id: 1 }]
      //array of obj {url, method, body}
    };
    handleReqChange = ({ target }) => {
      this.setState({ [target.name] : target.value });
    }

    handleSubmit  = async (e) => {
      const { url, method, body } = this.state;
      e.preventDefault();
      const response = await makeRequest(url, method, body);
      this.setState({ response });
    }
    render() {
      const { url, method, body, response, history } = this.state;
      return (
        <>
          <RequestInputs url={url} method={method} body={body} 
            onChange={this.handleReqChange}
            onSubmit={this.handleSubmit}
          />
          <ResponseDisplay response={response}/>
          <HistoryList history={history}/>
        </>
      );
    }
}
