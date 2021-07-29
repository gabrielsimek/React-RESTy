import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RequestInputs = ({ reqMethod, reqBody, reqUrl, onChange, onSubmit }) => {
  const [selected, setSelected] = useState('');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');

  const handleOptionChange = ({ target }) => {
    setSelected(target.value);
    console.log(target.value);
  };
  const handleURlChange = ({ target }) => {
    setUrl(target.value);
    console.log(target.value);
  };

  const handleBodyChange = ({ target }) => {
    setBody(target.value);
    console.log(target.value);
  };
  return (
    <>
      <form name="request-form">
        <label>
            URL
          <input 
            type="text"
            value={url}
            onChange={handleURlChange}
          />
        </label>
        <label>
            GET
          <input 
            type="radio"
            value="GET"
            checked={selected === 'GET'}
            onChange={handleOptionChange}
          />
        </label>
        <label>
            POST
          <input 
            type="radio"
            value="POST"
            checked={selected === 'POST'}
            onChange={handleOptionChange}
          />
        </label>
        <label>
            PUT
          <input 
            type="radio"
            value="PUT"
            checked={selected === 'PUT'}
            onChange={handleOptionChange}
          />
        </label>
        <label>
            PATCH
          <input 
            type="radio"
            value="PATCH"
            checked={selected === 'PATCH'}
            onChange={handleOptionChange}
          />
        </label>
        <label>
            DELETE
          <input 
            type="radio"
            value="DELETE"
            checked={selected === 'DELETE'}
            onChange={handleOptionChange}
          />
        </label>
      </form>
      <label>
        <textarea placeholder="JSON body" form="request-form"
          onChange={handleBodyChange}
        ></textarea>
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

