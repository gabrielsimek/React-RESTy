import React, { Component } from 'react';
import RequestInputs from '../components/controls/RequestInputs';
import ResponseDisplay from '../components/display/ResponseDisplay';
import makeRequest from '../services/dynamicFetch';
import HistoryList from '../components/history/HistoryList';
export default class RESTy extends Component {
    state = {
      url: '',
      method: '',
      body: null,
      authType: '',
      authValue: '',
      response: [],
      history: []
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
    
    handleJSONInput = ({ jsObject }) => {
     
      this.setState({ body: jsObject });
    }

    handleHistoryClick = ({ url, method, body }) => {
      this.setState({ url, method, body });
    }

    handleSubmit  = async (e) => {
      const { url, method, body, history, authType, authValue } = this.state;
      e.preventDefault();
      const response = await makeRequest(url, method, body, authType, authValue);
      this.setState({ response });
      this.setState({ history: [...history, { id: history.length, url, method, body }] }, () => {
        localStorage.setItem('HISTORY', JSON.stringify(this.state.history));
      });
    }
    render() {
      const { url, method, body, response, history, authType, authValue } = this.state;
      return (
        <>
          <RequestInputs url={url} method={method} body={body} authType={authType} authValue={authValue}
            onChange={this.handleReqChange}
            onSubmit={this.handleSubmit}
            onJSONInput={this.handleJSONInput}
          />
          <button onClick={this.handleHistoryClear}>Clear History</button>
          <ResponseDisplay response={response}/>
          <HistoryList history={history} onClick={this.handleHistoryClick}/>
        </>
      );
    }
}
