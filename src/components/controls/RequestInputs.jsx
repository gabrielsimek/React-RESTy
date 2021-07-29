import React from 'react';
import PropTypes from 'prop-types';

const RequestInputs = ({ reqMethod, reqBody, reqUrl, onChange, onSubmit }) => {
  return (
    <>
      <form name="request-form">
        <label>
            URL
          <input type="text"/>
        </label>
        <label>
            GET
          <input 
            type="radio"
            value="GET"
          />
        </label>
        <label>
            POST
          <input 
            type="radio"
            value="POST"
          />
        </label>
        <label>
            PUT
          <input 
            type="radio"
            value="PUT"
          />
        </label>
        <label>
            PATCH
          <input 
            type="radio"
            value="PATCH"
          />
        </label>
        <label>
            DELETE
          <input 
            type="radio"
            value="DELETE"
          />
        </label>
      </form>
      <label>
        <textarea placeholder="JSON body" form="request-form"></textarea>
      </label>
    </>
  );
};

RequestInputs.PropTypes = {
  reqMethod: PropTypes.string.isRequired,
  reqUrl: PropTypes.string.isRequired,
  reqBody: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default RequestInputs;

