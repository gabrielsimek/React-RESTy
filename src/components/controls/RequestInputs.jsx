import React from 'react';
import PropTypes from 'prop-types';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';
import './RequestInputs.css';
const RequestInputs = ({ url, method, body, onChange, onSubmit, onJSONInput }) => {

  //Use placeholder for JSON input in place of value
  let placeHolder;
  body ? placeHolder =  body : placeHolder = null;
  return (
    <div>
      <form name="request-form"
        onSubmit={onSubmit}
      >
        <label>
            URL
          <input 
            placeholder="URL"
            type="text"
            name="url"
            value={url}
            onChange={onChange}
          />
        </label>
       
        <input 
          id="get"
          type="radio"
          value="GET"
          name="method"
          checked={method === 'GET'}
          onChange={onChange}
        />
        <label htmlFor="get">GET</label>
       
        <input 
          id="post"
          type="radio"
          value="POST"
          name="method"
          checked={method === 'POST'}
          onChange={onChange}
        />
        <label htmlFor="post">POST</label>
     
        <input
          id="put"
          type="radio"
          value="PUT"
          name="method"
          checked={method === 'PUT'}
          onChange={onChange}
        />
        <label htmlFor="put">PUT</label>
        
        <input 
          id="patch"
          type="radio"
          value="PATCH"
          name="method"
          checked={method === 'PATCH'}
          onChange={onChange}
        />
        <label htmlFor="patch">PATCH</label>
     
        <input 
          id="delete"
          type="radio"
          value="DELETE"
          name="method"
          checked={method === 'DELETE'}
          onChange={onChange}
        />
        <label htmlFor="delete">DELETE</label>
        <button>Go!</button>
        <JSONInput
          form="request-form"
          name="body"
          onChange={onJSONInput}
          id          = "a_unique_id"
          placeholder = { placeHolder } 
          locale      = { locale }
          height      = "200px"
          width = "600px"
        />
      </form>
    </div>
  );
};

RequestInputs.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onJSONInput: PropTypes.func.isRequired
};
export default RequestInputs;


//text area alt.
{/* <textarea 
          placeholder="JSON body" 
          form="request-form"
          name="body"
          onChange={onChange}
          value={body}
        ></textarea> */}
