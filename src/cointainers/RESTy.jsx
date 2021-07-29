import React, { Component } from 'react';
import RequestInputs from '../components/controls/RequestInputs';
import ResponseDisplay from '../components/display/ResponseDisplay';

export default class RESTy extends Component {
    state = {
      url: '',
      method: '',
      body: ''
    };
    render() {
      return (
        <>
          <RequestInputs/>
          <ResponseDisplay/>
        </>
      );
    }
}
