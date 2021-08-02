import React, { Component } from 'react';
import RequestInputs from '../components/controls/RequestInputs';
import ResponseDisplay from '../components/display/ResponseDisplay';
import makeRequest from '../services/dynamicFetch';
import HistoryList from '../components/history/HistoryList';
import HeaderInput from '../components/controls/HeaderInput';
export default class RESTy extends Component {
    state = {
      url: '',
      method: '',
      body: null,
      response: ['Make a request'],
      history: [],
      headerKey: '',
      headerValue: '',
      headers: {}
    };

    componentDidMount(){
      const history = JSON.parse(localStorage.getItem('HISTORY'));
      if(history) this.setState({ history });
      return;
    }

    handleHistoryClear = () => {
      localStorage.clear();
      this.setState({ history: [] });
    }

    handleReqChange = ({ target }) => {
      this.setState({ [target.name] : target.value });
    }

    handleHeaderChange = ({ target }) => {
      this.setState({ [target.name] : target.value });
    }
    
    handleJSONInput = ({ jsObject }) => {
     
      this.setState({ body: jsObject });
    }

    handleHistoryClick = ({ url, method, body }) => {
      this.setState({ url, method, body });
    }
    handleHeaderSubmit = (e) => {
      const { headerKey, headerValue, headers } = this.state;
      e.preventDefault();
      this.setState({ headers: { ...headers, [headerKey]: headerValue }, headerKey: '', headerValue: '' });
    }

    handleSubmit  = async (e) => {
      const { url, method, body, history, headers } = this.state;
      e.preventDefault();
      const response = await makeRequest(url, method, body, headers);
      this.setState({ response });
      this.setState({ history: [...history, { id: history.length, url, method, body }] }, () => {
        localStorage.setItem('HISTORY', JSON.stringify(this.state.history));
      });
    }
    render() {
      const { url, method, body, response, history, headerKey, headerValue } = this.state;
      return (
        <>
          <RequestInputs url={url} method={method} body={body}
            onChange={this.handleReqChange}
            onSubmit={this.handleSubmit}
            onJSONInput={this.handleJSONInput}
          />
          <HeaderInput headerKey={headerKey} headerValue={headerValue}
            onChange={this.handleHeaderChange}
            onSubmit={this.handleHeaderSubmit}
          />
          <button onClick={this.handleHistoryClear}>Clear History</button>
          <ResponseDisplay response={response}/>
          <HistoryList history={history} onClick={this.handleHistoryClick}/>
        </>
      );
    }
}


