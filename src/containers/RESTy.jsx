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
      history: []
      //array of obj {url, method, body}
    };

    componentDidMount(){
      const history = JSON.parse(localStorage.getItem('HISTORY'));
      if(history) this.setState({ history });
      return;
    }

    handleReqChange = ({ target }) => {
      this.setState({ [target.name] : target.value });
    }

    handleHistoryClick = ({ url, method, body }) => {
      this.setState({ url, method, body  });
    }

    handleSubmit  = async (e) => {
      const { url, method, body, history } = this.state;
      // let parsedBody;
      e.preventDefault();
      // console.log(body);
      // if(body) parsedBody = JSON.parse(body);
      // console.log(parsedBody);
      const response = await makeRequest(url, method, body);
      this.setState({ response });
      this.setState({ history: [...history, { id: history.length, url, method, body }] }, () => {
        localStorage.setItem('HISTORY', JSON.stringify(this.state.history));
      });
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
          <HistoryList history={history} onClick={this.handleHistoryClick}/>
        </>
      );
    }
}
