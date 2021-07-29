import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RequestInputs = ({ url, method, body, onChange, onSubmit }) => {
//   const [selected, setSelected] = useState('');
//   const [url, setUrl] = useState('');
//   const [body, setBody] = useState('');

  //   const handleOptionChange = ({ target }) => {
  //     setSelected(target.value);
  //     console.log(target.value);
  //   };
  //   const handleURlChange = ({ target }) => {
  //     setUrl(target.value);
  //     console.log(target.value);
  //   };

  //   const handleBodyChange = ({ target }) => {
  //     setBody(target.value);
  //     console.log(target.value);
  //   };
  return (
    <>
      <form name="request-form">
        <label>
            URL
          <input 
            type="text"
            name="url"
            value={url}
            onChange={onChange}
          />
        </label>
        <label>
            GET
          <input 
            type="radio"
            value="GET"
            name="method"
            checked={method === 'GET'}
            onChange={onChange}
          />
        </label>
        <label>
            POST
          <input 
            type="radio"
            value="POST"
            name="method"
            checked={method === 'POST'}
            onChange={onChange}
          />
        </label>
        <label>
            PUT
          <input 
            type="radio"
            value="PUT"
            name="method"
            checked={method === 'PUT'}
            onChange={onChange}
          />
        </label>
        <label>
            PATCH
          <input 
            type="radio"
            value="PATCH"
            name="method"
            checked={method === 'PATCH'}
            onChange={onChange}
          />
        </label>
        <label>
            DELETE
          <input 
            type="radio"
            value="DELETE"
            name="method"
            checked={method === 'DELETE'}
            onChange={onChange}
          />
        </label>
      </form>
      <label>
        <textarea 
          placeholder="JSON body" 
          form="request-form"
          name="body"
          onChange={onChange}
        ></textarea>
      </label>
    </>
  );
};

RequestInputs.PropTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default RequestInputs;

